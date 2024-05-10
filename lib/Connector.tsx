import type { MqttClient } from 'mqtt';
import * as mqtt from 'mqtt';
import { useEffect, useMemo, useRef, useState } from 'react';
import MqttContext from './Context';
import type { ConnectorProps, Error, IMqttContext } from './types';
import { STATUS } from './constants';

export default function Connector({
  children,
  brokerUrl,
  options = { keepalive: 0 },
  parserMethod,
}: ConnectorProps) {
  const clientValid = useRef(false);
  const [connectionStatus, setStatus] = useState<string | Error>(STATUS.OFFLINE);
  const [client, setClient] = useState<MqttClient | null>(null);

  useEffect(() => {
    if (!client && !clientValid.current) {
      clientValid.current = true;
      setStatus(STATUS.CONNECTING);
      const mqttClient = mqtt.connect(brokerUrl, options);

      mqttClient.on('connect', () => {
        setStatus(STATUS.CONNECTED);
        setClient(mqttClient);
      });
      mqttClient.on('reconnect', () => {
        setStatus('Reconnecting');
      });
      mqttClient.on('error', (err) => {
        console.log(`Connection error: ${err}`);
        setStatus(err.message);
      });
      mqttClient.on('offline', () => {
        setStatus(STATUS.OFFLINE);
      });
      mqttClient.on('end', () => {
        setStatus(STATUS.OFFLINE);
      });
    }
  }, [client, clientValid, brokerUrl, options]);

  useEffect(
    () => () => {
      if (client) {
        client.end(true);
        setClient(null);
        clientValid.current = false;
      }
    },
    [client, clientValid],
  );

  const value: IMqttContext = useMemo<IMqttContext>(
    () => ({
      connectionStatus,
      client,
      parserMethod,
    }),
    [connectionStatus, client, parserMethod],
  );

  return <MqttContext.Provider value={value}>{children}</MqttContext.Provider>;
}

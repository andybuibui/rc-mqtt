import type { IClientSubscribeOptions } from 'mqtt';
import { matches } from 'mqtt-pattern';
import { useCallback, useContext, useEffect, useState } from 'react';
import MqttContext from './Context';
import type { IMqttContext as Context, IMessage, IUseSubscription } from './types';

export default function useSubscription(
  topic: string | string[],
  options: IClientSubscribeOptions = {} as IClientSubscribeOptions,
): IUseSubscription {
  const { client, connectionStatus, parserMethod } = useContext<Context>(MqttContext);

  const [message, setMessage] = useState<IMessage | undefined>(undefined);

  const subscribe = useCallback(async () => {
    client?.subscribe(topic, options);
  }, [client, options, topic]);

  const callback = useCallback(
    (receivedTopic: string, receivedMessage: any) => {
      if ([topic].flat().some((rTopic) => matches(rTopic, receivedTopic))) {
        setMessage({
          topic: receivedTopic,
          message: parserMethod?.(receivedMessage) || receivedMessage.toString(),
        });
      }
    },
    [parserMethod, topic],
  );

  useEffect(() => {
    if (client?.connected) {
      subscribe();

      client.on('message', callback);
    }
    return () => {
      client?.off('message', callback);
    };
  }, [callback, client, subscribe]);

  return {
    client,
    topic,
    message,
    connectionStatus,
  };
}

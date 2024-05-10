import { useContext } from 'react';

import MqttContext from './Context';
import type { IMqttContext } from './types';

export default function useMqttState() {
  const { connectionStatus, client, parserMethod } = useContext<IMqttContext>(
    MqttContext,
  );

  return {
    connectionStatus,
    client,
    parserMethod,
  };
}
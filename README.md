<div align="center">

[![NPM version](https://img.shields.io/npm/v/rc-mqtt.svg?style=flat)](https://www.npmjs.org/package/rc-mqtt) [![NPM Downloads](https://img.shields.io/npm/dm/rc-mqtt.svg)](https://npmcharts.com/compare/rc-mqtt?minimal=true) [![jsDelivr Downloads](https://data.jsdelivr.com/v1/package/npm/rc-mqtt/badge?style=rounded)](https://www.jsdelivr.com/package/npm/rc-mqtt) [![License](https://img.shields.io/npm/l/rc-mqtt.svg)](https://github.com/andybuibui/rc-mqtt/blob/main/LICENSE)

</div>

## rc-mqtt

[中文说明](https://github.com/andybuibui/rc-mqtt/blob/main/README.zh-CN.md)

## Overview

This library is focused in help you to connect, publish and subscribe to a Message Queuing Telemetry Transport (MQTT) in ReactJS with the power of React Hooks.

## Flow of Data

1. WiFi or other mobile sensors publish data to an MQTT broker
2. ReactJS subscribes to the MQTT broker and receives the data using MQTT.js
3. React's state is updated and the data is passed down to stateless components

## Installation

Just add rc-mqtt to your project:

```
yarn add rc-mqtt
```

### Hooks availables

- useMqttState -> return { connectionStatus, client, message }
- useSubscription(topic: string | string[], options?: {} ) -> return { client, topic, message, connectionStatus }

### Usage

Currently, rc-mqtt exports one enhancers. Similarly to react-redux, you'll have to first wrap a root component with a `Connector` which will initialize the mqtt instance.

#### Root component

The only property for the connector is the connection information for [mqtt.Client#connect](https://github.com/mqttjs/MQTT.js#connect)

**Example Root component:**

```js
import React from 'react';

import { Connector } from 'rc-mqtt';
import Status from './Status';

export default function App() {
  return (
    <Connector brokerUrl="wss://test.mosquitto.org:1884">
      <Status />
    </Connector>
  );
}
```

**Example Connection Status**

```js
import React from 'react';

import { useMqttState } from 'rc-mqtt';

export default function Status() {
  /*
   * Status list
   * - Offline
   * - Connected
   * - Reconnecting
   * - Closed
   * - Error: printed in console too
   */
  const { connectionStatus } = useMqttState();

  return <h1>{`Status: ${connectionStatus}`}</h1>;
}
```

#### Subscribe

**Example Posting Messages**

MQTT Client is passed on useMqttState and can be used to publish messages via [mqtt.Client#publish](https://github.com/mqttjs/MQTT.js#publish) and don't need Subscribe

```js
import React from 'react';
import { useMqttState } from 'rc-mqtt';

export default function Status() {
  const { client } = useMqttState();

  function handleClick(message) {
    return client.publish('esp32/led', message);
  }

  return (
    <button type="button" onClick={() => handleClick('false')}>
      Disable led
    </button>
  );
}
```

**Example Subscribing and Receiving messages**

```js
import React from 'react';

import { useSubscription } from 'rc-mqtt';

export default function Status() {
  /* Message structure:
   *  topic: string
   *  message: string
   */
  const { message } = useSubscription(['room/esp32/testing', 'room/esp32/light']);

  return (
    <div>
      <span>{`topic:${message.topic} - message: ${message.message}`}</span>
    </div>
  );
}
```

## Tips

1. If you need to change the format in which messages will be inserted in message useState, you can pass the option of parserMethod in the Connector:

```js
import React, { useEffect, useState } from 'react';
import { Connector, useSubscription } from 'rc-mqtt';

const Children = () => {
  const { message, connectionStatus } = useSubscription('esp32/testing/#');
  const [messages, setMessages] = useState < any > [];

  useEffect(() => {
    if (message) setMessages((msgs: any) => [...msgs, message]);
  }, [message]);

  return (
    <>
      <span>{connectionStatus}</span>
      <hr />
      <span>{JSON.stringify(messages)}</span>
    </>
  );
};

const App = () => {
  return (
    <Connector
      brokerUrl="wss://test.mosquitto.org:1884"
      parserMethod={(msg) => msg} // msg is Buffer
    >
      <Children />
    </Connector>
  );
};
```

## Contributing

Thanks for being interested on making this package better. We encourage everyone to help improving this project with some new features, bug fixes and performance issues. Please take a little bit of your time to read our guides, so this process can be faster and easier.

## License

MIT ©

<div align="center">

[![NPM version](https://img.shields.io/npm/v/rc-mqtt.svg?style=flat)](https://www.npmjs.org/package/rc-mqtt) [![NPM Downloads](https://img.shields.io/npm/dm/rc-mqtt.svg)](https://npmcharts.com/compare/rc-mqtt?minimal=true) [![jsDelivr Downloads](https://data.jsdelivr.com/v1/package/npm/rc-mqtt/badge?style=rounded)](https://www.jsdelivr.com/package/npm/rc-mqtt) [![License](https://img.shields.io/npm/l/rc-mqtt.svg)](https://github.com/andybuibui/rc-mqtt/blob/main/LICENSE)

</div>

## rc-mqtt

[English](https://github.com/andybuibui/rc-mqtt/blob/main/README.zh-CN.md)

## 概述

该库专注于帮助您使用 React Hooks 的强大功能在 ReactJS 中连接、发布和订阅消息队列遥测传输 （MQTT）。

## 数据流

1. WiFi 或其他移动传感器将数据发布到 MQTT 代理
2. ReactJS 订阅 MQTT 代理并使用 MQTT.js 接收数据
3. React 的状态被更新，数据被传递给无状态组件

## 安装

只需将 rc-mqtt 添加到您的项目中：

```
yarn add rc-mqtt or npm i rc-mqtt
```

### Hooks

- useMqttState -> return { connectionStatus, client, message }
- useSubscription(topic: string | string[], options?: {} ) -> return { client, topic, message, connectionStatus }

### 用法

目前，rc-mqtt 导出了一个增强器。与 react-redux 类似，您必须首先用 `Connector` 来包装根组件，该组件将初始化 mqtt 实例。

#### 根组件

连接器的唯一属性是 mqtt 的连接信息 [mqtt.Client#connect](https://github.com/mqttjs/MQTT.js#connect)

**示例 Root 组件：**

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

**连接状态示例**

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

**发布消息示例**

MQTT 客户端在 useMqttState 上传递，可用于通过 mqtt 发布消息。[mqtt.Client#publish](https://github.com/mqttjs/MQTT.js#publish) 并且不需要订阅

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

**订阅和接收消息示例**

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

## 技巧

1. 如果需要更改在消息 useState 中插入消息的格式，可以在连接器中传递 parserMethod 选项：

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

## 贡献

感谢您有兴趣使这个软件包变得更好。我们鼓励大家通过一些新功能、错误修复和性能问题来帮助改进这个项目。请花一点时间阅读我们的指南，以便此过程更快、更容易。

## License

MIT ©

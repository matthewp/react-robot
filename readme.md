# react-robot

React hooks for use with [Robot](https://thisrobot.life/) finite state machines.

## Installation

Via npm:

```shell
npm install react-robot --save
```

Or Yarn:

```shell
yarn add react-robot
```

## Usage

```js
import { useMachine } from 'react-robot';
import React from 'react';

const machine = createMachine({
  one: state(
    transition('next', 'two')
  ),
  two: state()
});

function App() {
  const [current, send] = useMachine(machine);
  
  return html`
    <button type="button" onClick=${() => send('next')}>
      State: ${current.name}
    </button>
  `;
}
```

## License

BSD-2-Clause
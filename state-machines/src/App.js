import React from 'react';
import { useMachine } from '@xstate/react';
import { Machine } from 'xstate';

const toggleMachine = new Machine({
  id: 'toggleMachine',
  initial: 'inactive',
  states: {
    inactive: {
      on: {
        TOGGLE: 'active'
      }
    },
    active: {
      on: {
        TOGGLE: 'inactive'
      }
    },
  }
})

function App() {
 const [current, send] = useMachine(toggleMachine);
  return (
    <div>
      <button onClick={() => {
        send('TOGGLE')
      }}>Toggle</button>
      {current.matches('active') && 'We Are Active'}
      {current.matches('inactive') && 'Inactive'}
    </div>
  );
}

export default App;

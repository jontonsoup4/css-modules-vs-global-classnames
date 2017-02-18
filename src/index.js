import React from 'react';
import ReactDOM from 'react-dom';
import { TestComponent1, TestComponent2 } from './TestComponent';

ReactDOM.render(
  <div>
    <TestComponent1 />
    <TestComponent2 />
  </div>,
  document.getElementById('root')
);

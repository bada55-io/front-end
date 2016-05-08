import React from 'react';
import { render } from 'react-dom';
import createApp from './App';

const App = createApp(React);

const props = {
  foo: 'yay!  🎸🎶',
  title: 'Bada55',
  helloClass: 'hello'
};

render(
  <App { ...props }></App>,
  document.getElementById('app')
);

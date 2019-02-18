import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather';

const panes = [
  {title: 'red', content: 'I am a red Shiba!'},
  {title: 'black', content: 'I am a black Shiba!'},
  {title: 'cream', content: 'I am a cream Shiba!'}
]

function Root() {
  return (
    <div className="main">
      <Clock />
      <Tabs panes={ panes } />
      <Weather />
    </div>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root />, document.getElementById('root'));
});

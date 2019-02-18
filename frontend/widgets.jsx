import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather';
import Autocomplete from './autocomplete';

const panes = [
  {title: 'red', content: 'I am a red Shiba!'},
  {title: 'black', content: 'I am a black Shiba!'},
  {title: 'cream', content: 'I am a cream Shiba!'}
]

const names = [
  "Ada",
  "Billy",
  "Calvin",
  "Daniel",
  "Elly",
  "Finn",
  "Gavin",
  "Gary",
  "Gareth",
  "Hans"
]

function Root() {
  return (
    <div className="main">
      <Clock />
      <Tabs panes={ panes } />
      <Weather />
      <Autocomplete names={ names }/>
    </div>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root />, document.getElementById('root'));
});

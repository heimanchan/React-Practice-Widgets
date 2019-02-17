import React from 'react';
import ReactDOM from 'react-dom';

function Root() {
  return (
    <div>
      
    </div>
  );
}

document.addEventListener('DOMContectLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Root />, root);
})
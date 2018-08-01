import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import data from './data/data' //Making sure our data is available
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App data={data}/>, //passing the data into the App
  document.getElementById('root'));
registerServiceWorker();

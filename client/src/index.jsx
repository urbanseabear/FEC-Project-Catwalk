import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

const list = ['Dylan', 'Calvin', 'Justin', 'Salvatore'];

ReactDOM.render(<App names={list} />, document.getElementById('app'));

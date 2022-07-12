import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reducer, { initialState } from './reducer';
import { StateProvider } from './StateProvider';
import { ChakraProvider } from '@chakra-ui/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </StateProvider>
  </React.StrictMode>
);


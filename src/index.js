import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




// Provider is like a supervisor for your Redux store. It's a special component provided by the React Redux library that wraps around your entire React application. This Provider component ensures that all components inside your app can access the Redux store and its state without having to pass it down manually through component props.

// Providers in React Redux:
// The Provider in React Redux is a special component that wraps around your entire React application.
// It ensures that all components within your app have access to the Redux store without needing to pass it down manually through props.
// The Provider acts as a gateway or supervisor, granting access to the Redux store to any component that needs it.
// It simplifies the process of managing state in large React applications by centralizing access to the Redux store.
// By using the Provider, components can easily access and modify the state stored in Redux, making it easier to build and maintain complex applications.
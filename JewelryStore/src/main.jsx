import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import { UserProvider } from './redux/UserContext'; // Import the UserProvider
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Wrap your App component with UserProvider and Provider */}
    <UserProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </UserProvider>
  </React.StrictMode>
);
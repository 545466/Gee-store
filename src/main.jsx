import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import './index.css'
import { AuthContextProvider } from './Component/Context/AuthContext.jsx';
import { DataContextProvider } from './Component/Context/DataContext.jsx';
import { ShoppingCartProvider } from './Component/Context/ShoppingCartContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <ShoppingCartProvider>
      <DataContextProvider>
        <React.StrictMode>
            <App />
        </React.StrictMode>
      </DataContextProvider>
    </ShoppingCartProvider>
  </AuthContextProvider>
)

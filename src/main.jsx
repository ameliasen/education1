import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // ✅ Here
import App from './App';
import { UserProvider } from "./context/UserContext";

ReactDOM.createRoot(document.getElementById('root')).render(

    <BrowserRouter> {/* ✅ First Router */}


     <UserProvider>
  <App />
</UserProvider>

    </BrowserRouter>
 
);

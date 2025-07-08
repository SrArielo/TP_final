import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import MessagesContextProvider from './Context/MessagesContext.jsx'
import ContactContextProvider from './Context/ContactContext.jsx'
import ContactDetailContextProvider from './Context/ContactDetailContext.jsx' // 👈 FALTABA
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ContactContextProvider>
      <MessagesContextProvider>
        <ContactDetailContextProvider> {/* 👈 Agregado */}
          <App />
        </ContactDetailContextProvider>
      </MessagesContextProvider>
    </ContactContextProvider>
  </BrowserRouter>
)
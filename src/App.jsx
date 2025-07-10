import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import ContactScreen from './Screens/ContactScreen/ContactScreen';
import ContactDetailScreen from './Screens/ContactDetailScreen/ContactDetailScreen';

function App() {
  return (
    <div className="app-wrapper">
      <div className="app-container">
        <Routes>
          <Route path="/" element={<ContactScreen />} />
          <Route path="/contacts" element={<ContactScreen />} />
          <Route path="/contacts/:contact_id" element={<ContactDetailScreen />} />
          <Route path="/contacts/:contact_id/messages" element={<HomeScreen />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
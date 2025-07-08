import React from 'react'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import { Routes, Route } from 'react-router'
import ContactScreen from './Screens/ContactScreen/ContactScreen'
import ContactDetailScreen from './Screens/ContactDetailScreen/ContactDetailScreen'

function App() {
	return (
		<div className="app-wrapper">
			<div className="app-container">
				<Routes>
					<Route 
						path="/" 
						element={<ContactScreen />}
					/>
					<Route
						path="/contacts/:contact_id/messages" 
						element={<HomeScreen />} 
					/>
					<Route 
						path="/contacts" 
						element={<ContactScreen />}
					/>
					<Route
						path="/contacts/:contact_id/detail" 
						element={<ContactDetailScreen />} 
					/>
				</Routes>
		</div>
			</div>
	)
}

export default App
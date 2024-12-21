// src/App.tsx
import React from 'react';
import './assets/js/tailwind.js';
import Sidebar from './components/Sidebar';
import VideoFeed from './components/VideoFeed';
import TopNav from './components/TopNav';

function App() {
	return (
		<div className='flex flex-col h-screen'>
			<TopNav />
			<div className='flex flex-grow'>
				<Sidebar />
				<div className='flex-grow'>
					<VideoFeed />
				</div>
			</div>
		</div>
	);
}

export default App;
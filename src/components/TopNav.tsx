// src/components/TopNav.tsx
import React from 'react';

const TopNav = () => {
	return (
		<div className='w-full h-12 bg-gray-900 text-white flex items-center justify-between px-4'>
			<div className='text-xl font-bold'>TikTok Clone</div>
			<div>
				<input
					type='text'
					placeholder='Buscar'
					className='p-2 rounded bg-gray-700 text-white'
				/>
			</div>
			<div>
				<button className='p-2 bg-blue-500 rounded'>Subir</button>
			</div>
		</div>
	);
};

export default TopNav;
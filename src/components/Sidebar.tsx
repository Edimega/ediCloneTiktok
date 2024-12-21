// src/components/Sidebar.tsx
import React from 'react';

const Sidebar = () => {
	return (
		<div className='w-1/5 h-full bg-gray-800 text-white p-4'>
			<h2 className='text-xl font-bold'>TikTok Clone</h2>
			<ul>
				<li className='py-2'>Inicio</li>
				<li className='py-2'>Explorar</li>
				<li className='py-2'>Mensajes</li>
				<li className='py-2'>Perfil</li>
			</ul>
		</div>
	);
};

export default Sidebar;
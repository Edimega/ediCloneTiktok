import { useState } from 'react';
import IcoPlayVideo from '../../assets/img/icos/icoPlayVideo.tsx'

import videoFile from '../../assets/img/video01.mp4'

export default function VideoPlayer() {
	const [isPlaying, setIsPlaying] = useState(false);

	/* funcion para reproducir o pausar el video */
	const playVideo = () => {
		const video = document.querySelector('video');
		if (video) isPlaying ? video.pause() : video.play();
		setIsPlaying(!isPlaying);
	}

	return (
		<>
			<div className='relative w-screen h-screen md:w-auto md:h-auto'>
				<video src={videoFile} controls={false} loop />
				<div className='absolute top-0 left-0 w-full h-full grid justify-center content-center' onClick={playVideo}>
					{!isPlaying ? <IcoPlayVideo width={100} fill='white' /> : ''}
				</div>
			</div>
		</>
	);
}
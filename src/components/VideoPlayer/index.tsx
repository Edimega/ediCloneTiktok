import React from 'react';

const VideoPlayer = () => {
	return (
		<div className='aspect-[9/16] rounded-1 max-w-[375px] mb-4'>
			<video controls className='w-full h-full'>
				<source src='/asets/img/video.1.mp4' type='video/mp4' />
				Your browser does not support the video tag.
			</video>
		</div>
	);
};

export default VideoPlayer;
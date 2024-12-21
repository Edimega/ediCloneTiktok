// src/components/VideoFeed.tsx
import React from 'react';
import VideoPlayer from './VideoPlayer';

const VideoFeed = () => {
	return (
		<div className='flex flex-col items-center w-full h-full overflow-y-scroll'>
			<div className='aspect-[9/16] rounded-1 max-w-[375px] mb-4'>
				<VideoPlayer />
			</div>
			<div className='aspect-[9/16] rounded-1 max-w-[375px] mb-4'>
				<VideoPlayer />
			</div>
			<div className='aspect-[9/16] rounded-1 max-w-[375px] mb-4'>
				<VideoPlayer />
			</div>
		</div>
	);
};

export default VideoFeed;
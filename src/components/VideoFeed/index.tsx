import React from 'react';
import VideoPlayer from '../VideoPlayer';

const VideoFeed = () => {
	return (
		<div className='w-4/5 h-full overflow-y-scroll'>
			<VideoPlayer />
			<VideoPlayer />
			<VideoPlayer />
		</div>
	);
};

export default VideoFeed;
import React from 'react';

const VideoPage = () => {
  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Course Coming Soon!</h1>
      <div className="relative aspect-w-16 aspect-h-9">
        <video className="rounded-md shadow-md" controls>
          <source
            src=''
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoPage;

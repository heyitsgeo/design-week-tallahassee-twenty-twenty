import React from 'react';
import videoStyles from './video.module.css';

const Video = ({ videoSrcUrl, videoTitle, ...props }) => (
  <div className={videoStyles.video}>
    <iframe
      className={videoStyles.embeddedContent}
      src={videoSrcUrl}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>
)

export default Video;
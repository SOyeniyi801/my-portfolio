import React from 'react';
import data from '../../data/index.json';

function Videos() {
  return (
    <section className="videos-section" id="MyVideos">
      <div className="videos-container-box">
        <div className="videos-container">
          <h2 className="videos-section-heading">Video Editing</h2>
        </div>
      </div>
      <div className="videos-section-container">
        <div className="videos-grid">
          {data.videos.map(video => (
            <div key={video.id} className="video-card">
              <video controls>
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <h3>{video.title}</h3>
              <p>{video.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Videos;

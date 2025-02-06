import Plyr from 'plyr';
import 'plyr/dist/plyr.css';
import './VideoSection.css';
import { useEffect } from 'react';

const VideoSection = () => {
  useEffect(() => {
    const player = new Plyr('.movie-video iframe', {
      controls: ['play', 'progress', 'current-time', 'fullscreen'], // Customize controls
      settings: ['quality', 'speed'], // Optional settings
    });

    return () => {
      player.destroy();
    };
  }, []);

  return (
    <section className="moviesection">
      <div className="movie-container">
        <h2 className="movie-title">View Our Technology in Action</h2>
        <div className="movie-video">
          <iframe
            src="https://www.youtube.com/embed/sEaKrsNeLfQ?enablejsapi=1&modestbranding=1&rel=0&showinfo=0&controls=1"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

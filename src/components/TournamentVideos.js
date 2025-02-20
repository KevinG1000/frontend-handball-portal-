import React from 'react';
import './TournamentVideos.css';

function TournamentVideos() {
    return (
        <div className="videos-container">
            <div className="videos-header">
                <h1>Tournament Videos</h1>
            </div>

            <div className="main-content">
                <div className="featured-videos">
                    <div className="video-section">
                        <h2>Indoor Handball Tournament Finals</h2>
                        <div className="video-wrapper">
                            <iframe
                                src="https://www.youtube.com/embed/jcAEeytXt4w"
                                title="Indoor Handball Tournament Finals"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>

                        <h2>Big Annual Florida Tournament</h2>
                        <div className="video-wrapper">
                            <iframe
                                src="https://www.youtube.com/embed/Rac6kkH3X3Q"
                                title="Big Annual Florida Tournament"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>

                        <h2>Annual Long Island Open 4 Wall Tournament</h2>
                        <p>Coming Up on March 14th in LA Fitness</p>
                        <p>Here's a video of me playing against one of the top players, Jurell Bastidas:</p>
                        <div className="video-wrapper">
                            <iframe
                                src="https://www.youtube.com/embed/9uM017KTXWA?start=22796"
                                title="Match against Jurell Bastidas"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>

                        <h2>Last Year's Finals - California vs NYC</h2>
                        <div className="video-wrapper">
                            <iframe
                                src="https://www.youtube.com/embed/mGJKeMXVryM"
                                title="California vs NYC Finals"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>

                <div className="sidebar">
                    <h3>Top Handball Clips</h3>
                    <div className="clips-grid">
                        <div className="clip">
                            <iframe
                                src="https://www.youtube.com/embed/7vgo3KhnF38?autoplay=0&controls=1&showinfo=0&rel=0&modestbranding=1"
                                title="Handball Clip 1"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="clip">
                            <iframe
                                src="https://www.youtube.com/embed/ygd6KkmPolQ?autoplay=0&controls=1&showinfo=0&rel=0&modestbranding=1"
                                title="Handball Clip 2"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="clip">
                            <iframe
                                src="https://www.youtube.com/embed/NQVnSjQwUO4?autoplay=0&controls=1&showinfo=0&rel=0&modestbranding=1"
                                title="Handball Clip 3"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="clip">
                            <iframe
                                src="https://www.youtube.com/embed/qzA-4qfRtQY?autoplay=0&controls=1&showinfo=0&rel=0&modestbranding=1"
                                title="Handball Clip 4"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

                    <div className="tens-finest-section">
                        <h3>TensFinest Channel</h3>
                        <p>To learn more about handball and the tournament scene, check out my friend's YouTube channel, TensFinest.</p>
                        <p>He gets flown out to record tournaments in different parts of the world, covering regions like Europe, California, NYC, and more.</p>
                        <a href="https://www.youtube.com/@TensFinest" target="_blank" rel="noopener noreferrer" className="channel-link">
                            Visit TensFinest Channel
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TournamentVideos; 
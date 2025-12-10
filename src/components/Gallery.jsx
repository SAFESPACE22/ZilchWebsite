import React from 'react';
import './Gallery.css';

const releases = [
    { id: 1, title: 'Rythm that I like', year: '2025', color: 'linear-gradient(45deg, #ff00cc, #333399)' },
    { id: 2, title: 'Tequiero Olvier', year: '2024', color: 'linear-gradient(45deg, #000000, #434343)' },
    { id: 3, title: 'Meet Me Halfway', year: '2024', color: 'linear-gradient(45deg, #00dbde, #fc00ff)' },
    { id: 4, title: 'The Last', year: '2023', color: 'linear-gradient(45deg, #f857a6, #ff5858)' },
];

const Gallery = () => {
    return (
        <section id="music" className="section gallery-section">
            <h2 className="section-title">RELEASES</h2>
            <div className="gallery-grid">
                {releases.map((release) => (
                    <div key={release.id} className="release-card">
                        <div className="release-artwork" style={{ background: release.color }}>
                            <div className="release-overlay">
                                <button className="play-icon">▶</button>
                            </div>
                        </div>
                        <div className="release-info">
                            <h3 className="release-title">{release.title}</h3>
                            <span className="release-year">{release.year}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;

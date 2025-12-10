import React from 'react';
import './Bio.css';

const Bio = () => {
    return (
        <section className="section bio-section">
            <div className="bio-container">
                <div className="bio-image">
                    {/* Placeholder for bio image */}
                    <div className="bio-img-placeholder"></div>
                </div>
                <div className="bio-content">
                    <h2 className="bio-title">Z & Ro</h2>
                    <p className="bio-text">
                        ZILCH is more than a name; it's a sonic statement. Emerging from the underground,
                        Zilch blends industrial textures with hypnotic rhythms to create immersive auditory landscapes.
                    </p>
                    <p className="bio-text">
                        Refusing to be confined by genre, the brand represents a nullification of boundaries—starting
                        from zero and building a new sonic reality.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Bio;

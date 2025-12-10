import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-bg">
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
            </div>
            <div className="hero-content">
                <h1 className="hero-title glitch" data-text="ZILCH">ZILCH</h1>
                <p className="hero-subtitle">SONIC ARCHITECT</p>
                <button className="cta-button">LISTEN NOW</button>
            </div>
        </section>
    );
};

export default Hero;

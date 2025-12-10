import React, { useState, useEffect, useRef } from 'react';
import './AudioPlayer.css';

const AudioPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrack, setCurrentTrack] = useState(0);

    // Dummy playlist
    const playlist = [
        { title: "Neon Nights", artist: "ZILCH", duration: "3:45" },
        { title: "Bass Drop", artist: "ZILCH", duration: "4:20" },
        { title: "Ether", artist: "ZILCH", duration: "2:15" },
    ];

    const togglePlay = () => setIsPlaying(!isPlaying);
    const nextTrack = () => setCurrentTrack((prev) => (prev + 1) % playlist.length);
    const prevTrack = () => setCurrentTrack((prev) => (prev - 1 + playlist.length) % playlist.length);

    // visualizer bars dummy
    const bars = Array.from({ length: 40 }, (_, i) => i);

    return (
        <div className="audio-player">
            <div className="track-info">
                <h3 className="track-title">{playlist[currentTrack].title}</h3>
                <p className="track-artist">{playlist[currentTrack].artist}</p>
            </div>

            <div className="controls">
                <button onClick={prevTrack} className="ctrl-btn">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" /></svg>
                </button>
                <button onClick={togglePlay} className="ctrl-btn play-btn">
                    {isPlaying ? (
                        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
                    ) : (
                        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                    )}
                </button>
                <button onClick={nextTrack} className="ctrl-btn">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" /></svg>
                </button>
            </div>

            <div className="visualizer">
                {bars.map((i) => (
                    <div
                        key={i}
                        className={`bar ${isPlaying ? 'animating' : ''}`}
                        style={{
                            animationDelay: `${Math.random() * 0.5}s`,
                            height: `${20 + Math.random() * 80}%`
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default AudioPlayer;

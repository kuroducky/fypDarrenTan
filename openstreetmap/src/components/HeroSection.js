import React from 'react';
import './HeroSection.css';
import '../App.css';

export default function HeroSection() {
    return (
        <div className = 'hero-container'>
            <video src = "/videos/video-2.mp4" autoPlay loop muted />
            <h1>GeoMapper Tool</h1>
            <p>Your one stop solution for geolocation needs...</p>
        </div>
    )
}

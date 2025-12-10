import React from 'react';
import './TourDates.css';

const tours = [
    { id: 1, date: 'DEC 12', venue: 'The Basement', location: 'London, UK', status: 'Available' },
    { id: 2, date: 'DEC 15', venue: 'Fabric', location: 'London, UK', status: 'Sold Out' },
    { id: 3, date: 'DEC 22', venue: 'Berghain', location: 'Berlin, DE', status: 'Sold Out' },
    { id: 4, date: 'JAN 05', venue: 'Output', location: 'New York, USA', status: 'Available' },
];

const TourDates = () => {
    return (
        <section id="tour" className="section tour-section">
            <h2 className="section-title">TOUR DATES</h2>
            <div className="tour-list">
                {tours.map((tour) => (
                    <div key={tour.id} className="tour-item">
                        <div className="tour-date">{tour.date}</div>
                        <div className="tour-info">
                            <h3 className="tour-venue">{tour.venue}</h3>
                            <p className="tour-location">{tour.location}</p>
                        </div>
                        <div className="tour-action">
                            <button
                                className={`ticket-btn ${tour.status === 'Sold Out' ? 'sold-out' : ''}`}
                                disabled={tour.status === 'Sold Out'}
                            >
                                {tour.status === 'Sold Out' ? 'SOLD OUT' : 'TICKETS'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TourDates;

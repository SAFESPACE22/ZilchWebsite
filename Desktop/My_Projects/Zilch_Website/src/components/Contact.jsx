import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section contact-section">
            <h2 className="section-title">CONTACT</h2>
            <div className="contact-container">
                <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                        <input type="text" placeholder="NAME" className="form-input" required />
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="EMAIL" className="form-input" required />
                    </div>
                    <div className="form-group">
                        <textarea placeholder="MESSAGE" className="form-input form-textarea" rows="4" required></textarea>
                    </div>
                    <button type="submit" className="submit-btn">SEND MESSAGE</button>
                </form>

                <div className="contact-socials">
                    <p>BOOKING: MGMT@ZILCH.COM</p>
                    <div className="social-links">
                        <a href="#" className="social-link">INSTAGRAM</a>
                        <a href="#" className="social-link">SOUNDCLOUD</a>
                        <a href="#" className="social-link">SPOTIFY</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

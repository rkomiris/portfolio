import React, { useState } from 'react';
import resumeData from '../data/resumeData';
import emailjs from 'emailjs-com';
import './Contact.css';

function Contact() {
    const { email, phone, linkedin } = resumeData.personal;
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState({ loading: false, message: '', error: false });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const validateForm = () => {
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            setStatus({ loading: false, message: 'All fields are required.', error: true });
            return false;
        }

        // Updated regex
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!emailRegex.test(formData.email)) {
            setStatus({ loading: false, message: 'Please enter a valid email address.', error: true });
            return false;
        }

        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setStatus({ loading: true, message: '', error: false });

        emailjs.send(
            'service_cdmztpj',   // 🔧 replace with your EmailJS service ID
            'template_9cuedcq',  // 🔧 replace with your EmailJS template ID
            formData,
            'UJpcUWB5qBcZ7stOK'    // 🔧 replace with your EmailJS public key
        )
            .then(() => {
                setStatus({ loading: false, message: '✅ Message sent successfully!', error: false });
                setFormData({ name: '', email: '', message: '' });
            })
            .catch(() => {
                setStatus({ loading: false, message: '❌ Something went wrong. Please try again later.', error: true });
            });
    };

    return (
        <div className="contact-container">
            <h2>Contact</h2>
            <div className="contact-info">
                <p><strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a></p>
                <p><strong>Phone:</strong> {phone}</p>
                <p><strong>LinkedIn:</strong> <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        required
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="btn-submit"
                    disabled={status.loading}
                >
                    {status.loading ? 'Sending...' : 'Send Message'}
                </button>
            </form>

            {status.message && (
                <p className={`status-message ${status.error ? 'error' : 'success'}`}>
                    {status.message}
                </p>
            )}
        </div>
    );
}

export default Contact;
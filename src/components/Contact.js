import React, { useState } from 'react';
import resumeData from '../data/resumeData';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaSpinner, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
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
            'service_cdmztpj',
            'template_9cuedcq',
            formData,
            'UJpcUWB5qBcZ7stOK'
        )
            .then(() => {
                setStatus({ loading: false, message: 'Message sent successfully!', error: false });
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus({ loading: false, message: '', error: false }), 5000);
            })
            .catch(() => {
                setStatus({ loading: false, message: 'Something went wrong. Please try again later.', error: true });
            });
    };

    return (
        <div className="contact-container">
            <motion.div
                className="contact-content"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2>Get In Touch</h2>
                <div className="contact-wrapper">
                    <div className="contact-info">
                        <p className="contact-intro">
                            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>
                        <div className="contact-links">
                            <a href={`mailto:${email}`} className="contact-link">
                                <FaEnvelope /> {email}
                            </a>
                            <div className="contact-link">
                                <FaPhone /> {phone}
                            </div>
                            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
                                <FaLinkedin /> LinkedIn Profile
                            </a>
                        </div>
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
                                placeholder="Your Name"
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
                                placeholder="your.email@example.com"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="5"
                                placeholder="Hello, I'd like to talk about..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-submit"
                            disabled={status.loading}
                        >
                            {status.loading ? <FaSpinner className="spinner" /> : <><FaPaperPlane /> Send Message</>}
                        </button>

                        {status.message && (
                            <motion.div
                                className={`status-message ${status.error ? 'error' : 'success'}`}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                {status.message}
                            </motion.div>
                        )}
                    </form>
                </div>
            </motion.div>
        </div>
    );
}

export default Contact;
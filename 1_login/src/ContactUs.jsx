import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ContactUs.css';

function ContactUs() {
    const [formData, setFormData] = useState({
        nameContactUs: '',
        emailContactUs: '',
        messageContactUs: '',
      });

    const navigate = useNavigate(); // Initialize useNavigate

    const handleBackClick = () => {
        navigate(-1); // Navigate to the previous route
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    };

    return (
    <>
    <div>
        <div className="contact-us fade-in">
        <h1 className='title-contact-us'>
            Contact Us
        </h1>
        <form className="contact-us-form" onSubmit={handleSubmit}>
            <button className="back fade-in" onClick={handleBackClick}>✕</button>
            <InputFieldContactUs
                name="nameContactUs"
                placeholder="Name"
                value={formData.nameContactUs}
                onChange={handleInputChange}
            />
            <InputFieldContactUs
                name="emailContactUs"
                placeholder="Email"
                value={formData.nameContactUs}
                onChange={handleInputChange}
            />
            <MessageContactUsTextarea
                    name="messageContactUs"
                    placeholder="Message"
                    value={formData.messageContactUs}
                    onChange={handleInputChange}
                />
            <button type="submit" className="submit-contact-us-button">Submit ➔</button>
          </form>
    </div>
    </div>
    </>
    );
}

function InputFieldContactUs({ name, placeholder, value, onChange }) {
    return (
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="input-field-contact-us"
      />
    );
  }

function MessageContactUsTextarea({ name, placeholder, value, onChange }) {
    return (
        <textarea
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="textarea-field-contact-us"
        />
    );
}

export default ContactUs
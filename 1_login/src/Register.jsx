import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import axios from 'axios';

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    email: '',
    address: '',
    password: '',
    passportCopy: null,
    driversLicenseCopy: null,
    selfieWithPassportOrDriversLicenseCopy: null,
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleFileButtonClick = (name) => {
    document.getElementById(name).click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('address', formData.address);
    formDataToSend.append('password', formData.password);
    formDataToSend.append('passportCopy', formData.passportCopy);
    formDataToSend.append('driversLicenseCopy', formData.driversLicenseCopy);
    formDataToSend.append('selfieWithPassportOrDriversLicenseCopy', formData.selfieWithPassportOrDriversLicenseCopy);

    const response = await fetch('https://agent-api.anika-ai.tech/register', {
      method: 'POST',
      body: formDataToSend,
    });

    const data = await response.json();
    if (response.ok) {
      navigate('/');
    } else {
      alert(data.message);
    }
  };

  const goToMenu = () => {
    navigate('/mobile-menu');
  };

  return (
    <>
      <header className='header fade-in'>
        <div className="header-container">
          <div className="header-left">
            <img src="logo.png" alt="Logo" className="logo-image" />
          </div>
          <div>
            <p className='header-middle'>
              CTRL+V Demo
            </p>
          </div>
          <div className="header-right">
            <button className="header-button" onClick={goToMenu}>☰</button>
          </div>
        </div>
      </header>
      <div className="register-page fade-in-register">
        <h1 className="title">Register</h1>
        <p className="subtitle">Sign up and KYC to use the platform</p>
        <hr />
        <form className="register-form" onSubmit={handleSubmit}>
          <InputField2
            name="name"
            placeholder="Name on Passport (Required for Demo)"
            value={formData.name}
            onChange={handleInputChange}
          />
          <InputField2
            name="email"
            placeholder="Personal or Work Email Address (Required for Demo)"
            value={formData.email}
            onChange={handleInputChange}
          />
          <InputField2
            name="password"
            placeholder="Passwword"
            value={formData.password}
            onChange={handleInputChange}
          />
          <InputField2
            name="address"
            placeholder="Physical Personal or Work Address (optional)"
            value={formData.address}
            onChange={handleInputChange}
          />
          <FileButton
            name="passportCopy"
            placeholder="Passport Copy (optional)"
            onClick={handleFileButtonClick}
            file={formData.passportCopy}
            onChange={handleFileChange}
          />
          <FileButton
            name="driversLicenseCopy"
            placeholder="Drivers License Copy (optional)"
            onClick={handleFileButtonClick}
            file={formData.driversLicenseCopy}
            onChange={handleFileChange}
          />
          <FileButton
            name="selfieWithPassportOrDriversLicenseCopy"
            placeholder="Selfie with Passport or Drivers License Copy (optional)"
            onClick={handleFileButtonClick}
            file={formData.selfieWithPassportOrDriversLicenseCopy}
            onChange={handleFileChange}
          />
          <button type="submit" className="register-button">Register ➔</button>
        </form>
        <p className="endtext">
          Your information is never shared with 3rd parties and is secured with the highest encryption.
        </p>
        <hr />
        <p className="copyright">
          © 2024 ⎈+V
        </p>
        <p className='easteregg'>
          We only put this here to see if anyone would read it. If you are reading it, contact us to let us know how clever and detail oriented you are.
        </p>
      </div>
    </>
  );
}

function InputField2({ name, placeholder, value, onChange }) {
  return (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="input-field-register"
    />
  );
}

function FileButton({ name, placeholder, onClick, file, onChange }) {
  return (
    <div className="file-input-field">
      <input
        type="file"
        id={name}
        name={name}
        onChange={onChange}
        className="input-file-hidden"
      />
      <button type="button" onClick={() => onClick(name)} className="file-button">
        {file ? file.name : placeholder}
      </button>
    </div>
  );
}

export default Register;

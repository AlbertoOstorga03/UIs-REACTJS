import React, { useState } from 'react';
import './Register.css';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    passportCopy: null,
    licenseCopy: null,
    selfie: null,
  });

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
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuClosing, setMenuClosing] = useState(false);

  const toggleMenu = () => {
      setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    if (menuOpen) {
      setMenuClosing(true);
      setTimeout(() => {
        setMenuClosing(false);
        setMenuOpen(false);
      },500);
    } else {
      setMenuOpen(true);
    }
  };

  return (
    <div className="register-page fade-in-register">
        <header className='header'>
            <div className="header-container">
            <div className="header-left">
                <img src="logo.png" alt="Logo" className="logo-image" />
            </div>
            <div>
                CTRL+V Demo
            </div>
            <div className="header-right">
                <button className="header-button" onClick={toggleMenu}>☰</button>
            </div>
            </div>
        </header>

        {menuOpen && (
        <div className="overlay">
          <div className={`menu-centered ${menuClosing ? 'fade-out' : 'fade-in-register'}`}>
            <button className="close-button" onClick={closeMenu}>✕</button>
            <a href="#">Create Agent</a>
            <a href="#">Agent Library</a>
            <a href="#">Pre-Order</a>
            <a href="#">Partner</a>
            <a href="#">Invest</a>
            <a href="#">Contact</a>
          </div>
        </div>  
      )}

      <h1 className="title">Register</h1>
      <p className="subtitle">Sign up and KYC to use the platform</p>
      <hr />
      <form className="register-form">
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
        <hr2 />
        <p className="copyright">
            © 2024 ⎈+V
        </p>
        <p className='easteregg'>
            We only put this here to see if anyone would read it. If you are reading it, contact us to let us know how clever and detail oriented you are.
        </p>
    </div>
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
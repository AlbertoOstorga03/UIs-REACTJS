import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MobileMenu.css';

function MobileMenu() {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleBackClick = () => {
        navigate(-1); // Navigate to the previous route
    };
    const goToAgentLibrary = ()  => {
        navigate('/agent-library'); // Navigate to the route '/agent-library'
    }

    const goToCreateAgent = ()  => {
        navigate('/create-agent'); // Navigate to the route '/create-agent'
    }  

    const goToContactUs = ()  => {
        navigate('/contact-us'); // Navigate to the route '/contact-us'
    }

    return (
    <>
    <div>
        <button className="back fade-in" onClick={handleBackClick}>✕</button>
        <button className="action-button fade-in" onClick={goToCreateAgent}>Create Agent</button>
        <button className="action-button fade-in" onClick={goToAgentLibrary}>Agent Library</button>
        <button className="action-button fade-in" onClick={goToContactUs}>Pre-Order</button>
        <button className="action-button fade-in" onClick={goToContactUs}>Partner</button>
        <button className="action-button fade-in" onClick={goToContactUs}>Invest</button>
        <button className="action-button fade-in" onClick={goToContactUs}>Contact</button>
    </div>
    </>
    );
}

export default MobileMenu
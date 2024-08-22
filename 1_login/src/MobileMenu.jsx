import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MobileMenu.css';

function MobileMenu() {
    const navigate = useNavigate(); // Inicializa useNavigate

    const handleBackClick = () => {
        navigate(-1); // Navega a la ventana anterior en el historial
    };

    return (
    <>
    <div>
        <button className="back fade-in" onClick={handleBackClick}>✕</button>
        <button className="action-button fade-in">Create Agent</button>
        <button className="action-button fade-in">Agent Library</button>
        <button className="action-button fade-in">Pre-Order</button>
        <button className="action-button fade-in">Partner</button>
        <button className="action-button fade-in">Invest</button>
        <button className="action-button fade-in">Contact</button>
    </div>
    </>
    );
}

export default MobileMenu
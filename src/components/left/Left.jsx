import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Left.css';

function Left({ heading, text }) {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className='left'>
      <h2 className="head">{heading}</h2>
      <p className="text">{text}</p>
      <button className="btn" onClick={handleBackToHome}>
        BACK TO HOME
      </button>
    </div>
  );
}

export default Left;

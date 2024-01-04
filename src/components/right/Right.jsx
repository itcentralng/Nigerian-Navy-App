// Right.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Right.css';

import Topbar from '../topbar/Topbar';
import Card from '../card/Card';

function Right() {
  return (
    <div className='right'>
      <Topbar />
      <h1 className="heading">VICE</h1>
      <h1 className="heading">ADMIRAL</h1>
      <h1 className="heading">Ei OGALLA</h1>
      <p className='tittle'>AM GSS pcs fdc(+) BSc MSc</p>
      <div className='card-container'>
        
        <Link to="/about">
          <Card icon="info" label="ABOUT" isFirstCard path="/about" />
        </Link>

        <Link to="/objectives">
          <Card icon="bullseye" label="OBJECTIVES" path="/objectives" />
        </Link>

        <Link to="/departments">
          <Card icon="sitemap" label="DEPARTMENTS" path="/departments" />
        </Link>

        <Link to="/structures">
          <Card icon="building" label="STRUCTURES" path="/structures" />
        </Link>

        <Link to="/gallery">
          <Card icon="image" label="GALLERY" path="/gallery" />
        </Link>
        
      </div>
    </div>
  );
}

export default Right;

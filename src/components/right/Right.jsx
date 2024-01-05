import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Right.css';

import Topbar from '../topbar/Topbar';
import Card from '../card/Card';

function Right() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className='right'>
      <Topbar />
      <h1 className="heading">VICE</h1>
      <h1 className="heading">ADMIRAL</h1>
      <h1 className="heading">Ei OGALLA</h1>
      <p className='tittle'>AM GSS pcs fdc(+) BSc MSc</p>
      <div className='card-container'>
        <Link to="/about">
          <Card icon="info" label="ABOUT" isFirstCard={currentPath === '/about'} path="/about" />
        </Link>
        <Link to="/objectives">
          <Card icon="bullseye" label="OBJECTIVES" isFirstCard={currentPath === '/objectives'} path="/objectives" />
        </Link>
        <Link to="/departments">
          <Card icon="sitemap" label="DEPARTMENTS" isFirstCard={currentPath === '/departments'} path="/departments" />
        </Link>
        <Link to="/structures">
          <Card icon="building" label="STRUCTURES" isFirstCard={currentPath === '/structures'} path="/structures" />
        </Link>
        <Link to="/gallery">
          <Card icon="image" label="GALLERY" isFirstCard={currentPath === '/gallery'} path="/gallery" />
        </Link>
      </div>
    </div>
  );
}

export default Right;

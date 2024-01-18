import React from 'react'
import './DefaultCheif.css'
import Topbar from '../components/topbar/Topbar'

import { Link, useLocation } from 'react-router-dom';


import Card from '../components/card/Card';




function DefaultCheif() {

  const location = useLocation();
  const currentPath = location.pathname;

    const heading = "THE CHEIFOF NAVAL STAFF";

  return (
    <div className='dafaultChief'>
      <div className="top">
        <div className="left-side">
        <h2 className="head2">THE CHEIF</h2>
        <h2 className="head2">OF NAVAL STAFF</h2>
        <p className="text2">
        “A highly motivated professional naval force 
        </p>
        <p className="text2">
        capable of shaping the security outcomes within
        </p>
       
        <p className="text2">
        Nigeria’s maritime domain and the littorals
        </p>
        <p className="text2">
        including land-based engagements in fulfilment of
        </p>
        <p className="text2">
        Nigeria’s national interest.”
        </p>
        </div>

        <div className="right-side">

        <Link to="/about">
         <Topbar path="/about"/> 
        </Link>       
</div>

        </div>


<div className="bottom">
    <p className="text2" style={{textAlign: "right"}}>AM GSS pcs fdc(+) BSc MSc</p>
    <h1 className="head2" style={{textAlign: "right"}}>VICE ADMIRAL Ei OGALLA</h1>

    <div className='card-container2'>
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


      </div>
  
  )
}

export default DefaultCheif

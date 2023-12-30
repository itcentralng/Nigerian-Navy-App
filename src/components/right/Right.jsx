import React from 'react'
import './Right.css'

import Topbar from '../topbar/Topbar'
import Card from '../card/Card'

function Right() {
  return (
    <div className='right'>
        <Topbar />
        <h1 className="heading">VICE</h1>
        <h1 className="heading">ADMIRAL</h1>
        <h1 className="heading">Ei OGALLA</h1>
        <div className='card-container'>
          <Card icon="info" label="ABOUT" isFirstCard />
          <Card icon="bullseye" label="OBJECTIVES" />
          <Card icon="sitemap" label="DEPARTMENTS" />
          <Card icon="building" label="STRUCTURES" />
          <Card icon="image" label="GALLERY" />
        </div>
    </div>
  )
}

export default Right
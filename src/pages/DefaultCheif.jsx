import React from 'react'
import './DefaultCheif.css'
import Topbar from '../components/topbar/Topbar'

function DefaultCheif() {

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
<Topbar />        
</div>

        </div>


<div className="bottom">
    <p className="text2" style={{textAlign: "right"}}>AM GSS pcs fdc(+) BSc MSc</p>
    <h1 className="head2" style={{textAlign: "right"}}>VICE ADMIRAL Ei OGALLA</h1>
</div>
      </div>
  
  )
}

export default DefaultCheif

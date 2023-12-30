import React from 'react'

import './Page.css'
import Left from '../components/left/Left'
import Right from '../components/right/Right'

function Page1() {
  return (
    <div className='page'>
      <Left />
      <Right />
    </div>
  )
}

export default Page1
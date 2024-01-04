import React from 'react'

import './Page.css'
import Left from '../components/left/Left'
import Right from '../components/right/Right'

function About() {

  const dataText = "Ear Admiral Emmanuel Ikechukwu Ogalla was born on 20 December 1968 in Enugu Ezike Igbo Eze north LGA Enugu State, Nigeria. He obtained the WASC from the NMS Zaria in June 1987 where he graduated as the best boy in Sciences. He had A1 in all subjects except English language. He is a member of the 39 Regular Course Nigerian Defence Academy Kaduna graduated with a BSc in Maths and was awarded sword of honour as the best naval cadet in his course."

  return (
    <div className='page'>
      <Left heading={"BIODATA OF THE CHEIF OF NAVAL STAFF"} text={dataText} />
      <Right />
    </div>
  )
}

export default About
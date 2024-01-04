import React from 'react'
import Left from '../components/left/Left'
import Right from '../components/right/Right'

function Objectives() {

    const dataText = "He was commissioned Sub Lieutenant 16 September 1992 and rose to the rank of Rear Admiral on 16 September 2021. He completed the Sub Technical Course Nigerian Navy Ship (NNS) QUORRA, Basic Hydrography National Hydrographic School India in May 2000, Junior and Senior Staff Courses Armed Forces Command and Staff College (AFCSC) Jaji in November 2001 and July 2006 respectively. He was a participant of National Defence Course (NDC) Course 22 and was awarded fdc (fellow defence college) in August 2014. As part of the Course, he took part in the MSc Strategic Studies programme, University of Ibadan from 2014 to 2015."

  return (
    <div className='page'>
      <Left heading={"EDUCATIONAL HISTORY"}text={dataText}  />
      <Right isObjectives={true} />
    </div>
  )
}

export default Objectives

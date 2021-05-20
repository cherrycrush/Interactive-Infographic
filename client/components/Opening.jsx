import React from 'react'
import Fade from 'react-reveal/Fade'

export default function Opening () {
  return (
    <div className='opening'>
      <Fade top cascade delay={1500}>
        <h1>New Zealand</h1>
        <p>as a village of 100 people</p>
        <br></br>
        <p>2018 Census</p>
      </Fade>
    </div>
  )
}

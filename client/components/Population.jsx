import React from 'react'
import Bounce from 'react-reveal/Bounce'

export default function Population () {
  return (
    <div className='population'>
      <Bounce delay={3000}>
        <h1>Our population</h1>
        <p>4,699,755 is our census usually resident population count in 2018.
          In our village of 100, each person represents around 47,000 people.
        </p>
        <p>Of the 100 people in our village...</p>
      </Bounce>
    </div>
  )
}

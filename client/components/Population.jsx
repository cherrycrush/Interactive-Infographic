import React from 'react'
import Bounce from 'react-reveal/Bounce'
import Spin from 'react-reveal/Spin'
import Fade from 'react-reveal/Fade'

export default function Population () {
  return (
    <>
      <div className='population'>
        <Bounce delay={3200}>
          <h1 className='heading'>Our population</h1>
          <p>4,699,755 is our census usually resident population count in 2018.
            In our village of 100, each person represents around 47,000 people.
          </p>
          <p>Of the 100 people in our village...</p>
        </Bounce>
        <Fade delay={5000}>
          <div className='container'>
            <Spin delay={5500}>
              <div className='female'>51</div>
              <div className='male'>49</div>
              <div className='maori'>17</div>
            </Spin>
          </div>
        </Fade>
      </div>
    </>
  )
}

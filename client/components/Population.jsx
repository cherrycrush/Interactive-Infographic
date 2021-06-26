import React from 'react'
import Bounce from 'react-reveal/Bounce'
import Spin from 'react-reveal/Spin'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'

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
          <div className='description'>
            <p>are female</p>
            <p>are male</p>
            <p>people in the village are of Maori ethnicity</p>
          </div>
        </Fade>
        <br></br>
        <Zoom delay={7000}>
          <div className='box'>
            <p>Between 2013 and 2018, our population grew by 10.8%</p>
          </div>
          <div className='alt-box'>
            <p>The median age in our village is 37.4 years</p>
          </div>
        </Zoom>
      </div>
    </>
  )
}

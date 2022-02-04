import React from 'react'
import Flip from 'react-reveal/Flip'
import Slide from 'react-reveal/Slide'

export default function Birthplace () {
  return (
    <>
      <div className='birthplace'>
        <Flip delay={9000}>
          <h1 className='heading'>Birthplace</h1>
          <p>Of the 100 people in our village...</p>
        </Flip>
        <Slide delay={10000}>
          <div className='container'>
            <div className='nz'>73</div>
            <div className='overseas'>27</div>
          </div>
          <div className='description'>
            <p>were born in New Zealand</p>
            <p>were born overseas</p>
          </div>
          <div className='map'>
            <h1 className='heading'>Top 5 overseas birthplaces</h1>
            <p>For the census usually resident population count</p>
            <p>Of the 100 people in our village...</p>
          </div>
        </Slide>
      </div>
    </>
  )
}

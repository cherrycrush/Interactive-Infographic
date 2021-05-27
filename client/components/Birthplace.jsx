import React from 'react'
import Flip from 'react-reveal/Flip'

export default function Birthplace () {
  return (
    <>
      <div className='birthplace'>
        <Flip>
          <h1 className='heading'>Birthplace</h1>
          <p>Of the 100 people in our village...</p>
        </Flip>
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
      </div>
    </>
  )
}

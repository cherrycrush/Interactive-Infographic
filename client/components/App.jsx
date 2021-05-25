import React from 'react'
import Zoom from 'react-reveal/Zoom'
import Birthplace from './Birthplace'
import Opening from './Opening'
import Population from './Population'

const App = () => {
  return (
    <>
      <Zoom>
        <Opening />
      </Zoom>
      <Population />
      <Birthplace />
    </>
  )
}

export default App

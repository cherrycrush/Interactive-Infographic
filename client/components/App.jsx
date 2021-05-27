import React from 'react'
import Zoom from 'react-reveal/Zoom'
import Birthplace from './Birthplace'
import Ethnicgroups from './Ethnicgroups'
import Languages from './Languages'
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
      <Ethnicgroups />
      <Languages />
    </>
  )
}

export default App

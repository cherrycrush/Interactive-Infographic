import React from 'react'
import Zoom from 'react-reveal/Zoom'
import Bounce from 'react-reveal/Bounce'
import Birthplace from './Birthplace'
import Ethnicgroups from './Ethnicgroups'
import Footer from './Footer'
import Languages from './Languages'
import Opening from './Opening'
import Population from './Population'

const App = () => {
  return (
    <>
      <Zoom>
        <Opening />
      </Zoom>
      <Bounce>
        <Population />
      </Bounce>
      <Bounce>
        <Birthplace />
      </Bounce>
      <Ethnicgroups />
      <Languages />
      <Footer />
    </>
  )
}

export default App

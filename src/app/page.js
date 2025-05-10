import React from 'react'
import Heroes from './components/Heroes-section/Heroes'
import Home from './components/Home'
import AboutPage from './components/AboutPage'
import Ministries from './components/Ministries'
import Ending from './components/Ending'
import ChuchMinistries from './components/ChurchMinistries'


function page() {
  return (
    <div>
      <Heroes/>
      <Home/>
      <AboutPage/>
      <ChuchMinistries/>
      <Ministries/>
      <Ending/>
    </div>
  )
}

export default page

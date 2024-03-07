import React from 'react'

import PageTitle from './PageTitle'
import './css/main.css'
import Dashboard from './Dashboard'

function Main() {
  return (
    <div id='main' className='main'>
      <PageTitle  page="Dashboard"/>
      <Dashboard />
    </div>
  )
}

export default Main

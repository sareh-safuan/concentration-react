import React, { Fragment } from 'react'
import Sidenav from './Sidenav.jsx'
import Content from './Content.jsx'
import './index.css'

function App() {
  return (
    <Fragment>
      <Sidenav />
      <Content />
    </Fragment>
  )
}

export default App
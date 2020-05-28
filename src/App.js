import React, { Fragment } from 'react'
import Nav from './Nav.jsx'
import Content from './Content.jsx'
import './index.css'

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      start: false,
      timer: null
    }

    this.gameStart = this.gameStart.bind(this)
    this.gameFinish = this.gameFinish.bind(this)
  }

  gameStart() {
    const t = new Date()
    this.setState({
      start: true,
      timer: t.getDate()
    })
  }

  gameFinish() {
    this.setState({ start: false })
  }

  render() {
    const { start } = this.state

    return (
      <Fragment>
        <Nav gameStart={this.gameStart} />
        <Content start={start} gameFinish={this.gameFinish} />
      </Fragment>
    )
  }
}

export default App
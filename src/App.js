import React, { Component } from 'react'
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import "./index.css"
import HomePage from './components/Homepage/HomePage'
class App extends Component {
  render () {
    return (
      <div>
        <div>
          <Header/>
          <HomePage/>
          <Footer/>
        </div>
      </div>
      )
  }
}

export default App;

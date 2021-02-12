import React from 'react'
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom'

// import Nav from './Nav'

import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

import './styles/Styles.css'
import './styles/Tablet.css'
import './styles/Desktop.css'


const App = () => {


  return (
    <div>
      <BrowserRouter>


        <Switch>
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/about" component={About} />
          <Route exact path="/" component={Home} />
        </Switch>
      
      </BrowserRouter>
    </div>
  )
}

export default App;

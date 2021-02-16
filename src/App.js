import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// import Nav from './Nav'

import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import DesignProjects from './components/DesignProjects'

import ReactHome from './components/react-projects/ReactHome'
import YellingGreeter from './components/react-projects/YellingGreeter'
import HappyMessage from './components/react-projects/HappyMessage'
import BusinessCard from './components/react-projects/BusinessCard'
import CookieClicker from './components/react-projects/CookieClicker/CookieClicker'
import MovieList from './components/react-projects/MovieList'
import ToDoList from './components/react-projects/ToDoList'
import BillAndTip from './components/react-projects/BillAndTip'
import Tweeter from './components/react-projects/Tweeter/Tweeter'




import './styles/Styles.css'
import './styles/Tablet.css'
import './styles/Desktop.css'


const App = () => {


  return (
    <div>
      <BrowserRouter>


        <Switch>
          <Route exact path="/projects/react/BillAndTip" component={BillAndTip} />
          <Route exact path="/projects/react/todolist" component={ToDoList} />
          <Route exact path="/projects/react/tweeter" component={Tweeter} />
          <Route path="/projects/react/cookieClicker" component={CookieClicker} />
          <Route path="/projects/react/yellingGreeter" component={YellingGreeter} />
          <Route path="/projects/react/happyMessage" component={HappyMessage} />
          <Route path="/projects/react/businessCard" component={BusinessCard} />
          <Route path="/projects/react/movieList" component={MovieList} />
          <Route exact path="/projects/react" component={ReactHome} />
          <Route exact path="/projects/design" component={DesignProjects} />

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

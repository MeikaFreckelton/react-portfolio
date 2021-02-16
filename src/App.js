import React, { useEffect, useState } from 'react'
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

import AddTwoot from './components/react-projects/Tweeter/AddTwoot'
import EditTwoot from './components/react-projects/Tweeter/EditTwoot'
import Twoot from './components/react-projects/Tweeter/Twoot'
import Twoots from './components/react-projects/Tweeter/Twoots'
import blogData from './data/post_data'





import './styles/Styles.css'
import './styles/Tablet.css'
import './styles/Desktop.css'


const App = () => {

  const [twoots, setTwoots] = useState([])

  useEffect(() => {
    setTwoots(blogData)
  }, [])

  const addTwoot = (twoot) => {
    setTwoots([...twoots, twoot])
  }

  const nextId = () => {
    return twoots.reduce((acc, cur) => acc._id > cur._id ? acc : cur, {_id: 0 })._id + 1
  }

  const getTwootFromId = (id) => {
    return twoots.find((t) => t._id === parseInt(id))

  }

  const updateTwoot = (inTwoot) => {
    const updatedTwoots = twoots.map((t) => (t._id === inTwoot._id) ? inTwoot : t)
    setTwoots(updatedTwoots)
  }

  const deleteTwoot = (id) => {
    const updatedTwoots = twoots.filter((t) => t._id !== parseInt(id))
    setTwoots(updatedTwoots)
  }






  return (
    <div>
      <BrowserRouter>


        <Switch>

          <Route exact path="/projects/react/tweeter/twoot/new" render={(props) => <AddTwoot {...props} addTwoot={addTwoot} nextId={nextId()}/>} />
          <Route exact path="/projects/react/tweeter/twoot/edit/:id" render={(props) => <EditTwoot {...props} updateTwoot={updateTwoot} twoot={ getTwootFromId(props.match.params.id)}  />} />
          <Route exact path="/projects/react/tweeter/twoot/:id" render={(props) => <Twoot {...props} twoot={getTwootFromId(props.match.params.id)} showControls deleteTwoot={deleteTwoot} type="single"/>} />
          <Route exact path="/projects/react/tweeter" render={(props) => <Twoots {...props} twootsData={twoots} />} />


          <Route exact path="/projects/react/BillAndTip" component={BillAndTip} />
          <Route exact path="/projects/react/todolist" component={ToDoList} />
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

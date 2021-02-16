import React, {useState, useEffect} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Nav from './Navbar'
import AddTwoot from './AddTwoot'
import EditTwoot from './EditTwoot'
import Twoot from './Twoot'
import Twoots from './Twoots'
import blogData from './../../data/post_data'


const Tweeter = () => {

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

  const heading = {
    fontFamily: 'PT Sans',
    fontSize: "4rem",
    paddingLeft: '5%'
  }

  // const greyBg = {
  //   backgroundColor: "#f5f5f5",
  //   top: "0"
  // }

  return (
    <div >
      {/* <div style={greyBg}> */}
        <h1 style={heading}>Tweeter</h1>
      {/* </div> */}
      
      <BrowserRouter>
      <Nav />

      <Switch>
        
        <Route exact path="/tweeter/twoot/new" render={(props) => <AddTwoot {...props} addTwoot={addTwoot} nextId={nextId()}/>} />
        <Route exact path="/tweeter/twoot/edit/:id" render={(props) => <EditTwoot {...props} updateTwoot={updateTwoot} twoot={ getTwootFromId(props.match.params.id)}  />} />
        <Route exact path="/tweeter/twoot/:id" render={(props) => <Twoot {...props} twoot={getTwootFromId(props.match.params.id)} showControls deleteTwoot={deleteTwoot} />} />
        <Route exact path="/tweeter" render={(props) => <Twoots {...props} twootsData={twoots} />} />
      </Switch>
      
      </BrowserRouter>
    </div>
  )
}

export default Tweeter
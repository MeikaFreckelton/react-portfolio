import React from 'react'
import Twoot from './Twoot'
import ReactNav from './../ReactNav'
import Nav from './Navbar'


// Display all the Twoots

const Twoots = ({twootsData}) => {

    const heading = {
        fontFamily: 'PT Sans',
        fontSize: "4rem",
        paddingLeft: '5%'
      }

    return (
        <div>
            <ReactNav />

      
            <h1 style={heading}>Tweeter</h1>    
            <Nav />
            <div className="twoots">

                {
                    twootsData
                    .sort((a, b) => b.modified_date - a.modified_date)
                    .map((twoot) => <Twoot key={twoot._id} twoot={twoot} type="twoots" />)


                }
            </div>
        </div>
    )
}

export default Twoots
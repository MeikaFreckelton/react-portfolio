import React, { useEffect } from 'react' 
import { Link } from 'react-router-dom'

const Home = () => {
    


    return (
        <div id="homePage">
            <div className="typewriter">
                <h1 className="type">
                    MEIKA FRECKELTON
                
                </h1>
                <h2 className="type underline--magical">JUNIOR WEB DEV/DESIGNER</h2>
                
            </div>
            <div className="homeBottom">
                <Link to="/about"><h3 className="underline-transition">ABOUT ME</h3></Link>
                <Link to="/projects"><h3 className="underline-transition ">PROJECTS</h3></Link>
                <Link to="/contact"><h3 className="underline-transition">CONTACT ME</h3></Link>

            </div>

        </div>
    )
}

export default Home
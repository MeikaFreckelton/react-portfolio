import React, { useState } from 'react' 
import { Link } from 'react-router-dom'

const Nav = ({nav}) => {

    const [isClicked, setClicked] = useState(false)

    const toggleNav = () => {
        // (isClicked === false) ? (setClicked(true)) : (setClicked(false))
        const nav = document.querySelector('.nav')
        if (nav.style.display === "none" ){
            nav.style.display = "flex"
        } else {
            nav.style.display = "none"
        }

    }

    // let classToggle = isClicked ? "openNav" : "closedNav"


    

    
    return (
        <div id="navbarA">
            <div className="topBar">

                {
                    nav !== "about" && 
                    <div>
                        <Link to="/"><h1 id="navLogo">MEIKA FRECKELTON</h1></Link>
                    </div>
                }
                <div></div>
                <div className="navItem icon">
                    {/* <i class="far fa-eye" onClick={toggleNav}></i> */}
                    <i class="fas fa-hamburger" onClick={toggleNav}></i>
                </div>
            </div>

            <div className="nav">
                <div className="navItem item">
                    <Link to="/about">ABOUT</Link> 
                </div>
                <div className="navItem item">
                <Link to="/projects">PROJECTS</Link> 
                </div>
                <div className="navItem item">
                    <Link to="/contact">CONTACT ME</Link>
                </div>
            </div>
        </div>
    )
    
    

    // return (
    //     <div>
    //         <div id="nav">
    //             <div id="test">
    //                 hello
    //             </div>
    //             <div>
    //                 world
    //             </div>
    //         </div>

    //     </div>
    // )
}

export default Nav
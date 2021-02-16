import React from 'react'
import {Link} from 'react-router-dom'



const ReactNav = () => {

    

    const handleClick = (e) => {
        const nav = document.querySelector('.ulStyles')
        console.log(nav)
        if (nav && nav.style.display === "none" ){
            nav.style.display = "flex"
        } else if (nav) {
            nav.style.display = "none"
        }
    }
    


    return(
        <div>
            




            <div className="reactNav">
                <div className="showNav">
                    <h1>MEIKA FRECKELTON</h1>
                    <i class="fas fa-bars" onClick={handleClick}></i>

                </div>

                <ul className="ulStyles">
                
                
                    <Link to="/projects" className="liStyles"><li>Back to Projects</li></Link>
                    <Link to="/projects/react" className="liStyles"><li>Home</li></Link>
                    <Link to="/projects/react/yellingGreeter" className="liStyles"><li>Yelling Greeter</li></Link>
                    <Link to="/projects/react/happyMessage" className="liStyles"><li>Happy message</li></Link>
                    <Link to="/projects/react/businessCard" className="liStyles"><li>Business Card</li></Link>
                    <Link to="/projects/react/cookieClicker" className="liStyles"><li>Cookie Clicker</li></Link>
                    <Link to="/projects/react/tweeter" className="liStyles"><li>Tweeter</li></Link>
                    <Link to="/projects/react/todolist" className="liStyles"><li>To Do List</li></Link>
                    <Link to="/projects/react/billAndTip" className="liStyles"><li>Bill and Tip</li></Link>
                    <Link to="/projects/react/MovieList" className="liStyles" ><li>Movie List</li></Link>
                </ul>

            </div>
            
            
            
        </div>
    )
}


export default ReactNav
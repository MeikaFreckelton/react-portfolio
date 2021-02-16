import React from 'react'
import { Link } from 'react-router-dom' 
import Nav from './Nav'
import birthday from '../images/project-images/birthday.png'
import midnight from '../images/project-images/midnight-2.png'
import petplace from '../images/project-images/petplace.png'
import dotdev from '../images/project-images/dotdev.png'
import pong from '../images/project-images/pong.png'
import DesignProjects from './DesignProjects'


const Projects = () => {
    console.log(birthday)

    const projects = [
        {name: "Dot Developer", image: dotdev, 
            link: "https://dotdeveloper.herokuapp.com/", 
            description: "A social media for developers to encourage networking.", 
            languages: ["MongoDB", "Express", "React", "Node.js"] },
        {name: "Birthday Facts", image: birthday, 
            link: "https://birthday-facts.netlify.app/", 
            description: "A fact generator created during a hackathon, in which the user enters in a date and may choose to generate either a birth, death or event that occured on that date. ", 
            languages: ["JavaScript"] },
        {name: "Pet Marketplace", image: petplace, 
            link: "https://petmarketplace.herokuapp.com/", 
            description: "A two-sided marketplace to encourage the adoption of rescue animals in a safe manner.", 
            languages: ["Ruby", "Ruby on Rails"] },
        {name: "Ruby Terminal Game", image: midnight, 
            link: "https://github.com/MeikaFreckelton/MidnightSnack", 
            description: "A game to be played in your terminal where the user must assist a cat in finding a midnight snack and returning to bed.", 
            languages: ["Ruby"] },
        
        {name: "Halloween Pong", image: pong, 
            link: "https://hackathon-halloween-pong.herokuapp.com/", 
            description: "A recreation of the classic game, Pong made during a hackathon.", 
            languages: ["JavaScript", "Express"] },
        
    ]

   

    const displayProjects = ( name, image, link, description, languages ) => {

        return (
            
            <a href={link} target="_blank" rel="noreferrer" className="projectAnchor">
                <div className="projectCard">
                    <img src={image} alt={name} />
                    <div className="cardInfo">
                        <h2>{name.toUpperCase()}</h2>
                        <p>{description}</p>
                        <p className="createdWith" >Created using: { languages.join(', ')}</p>
                        
                        
                    </div>
            
                </div>
            </a>
            
           
        )
    }

    return (
        <div>
            <Nav />
            <div className="projectsPage">
                <div className="heading">
                    PROJECTS
                </div>
                <div className="reactProjects">
                    <Link to="/projects/react">React Projects</Link>
                </div>
                <div className="projectGallery">
                    {
                        projects.map((proj, index) => {
                            const { name, image, link, description, languages } = proj
                            return displayProjects(name, image, link, description, languages )
                        })
                    }

                    
                </div>
                <div className="olderProjects">
                    {/* <h1>Design Work</h1> */}
                    <DesignProjects />

                </div>
            </div>
        </div>
    )
}

export default Projects
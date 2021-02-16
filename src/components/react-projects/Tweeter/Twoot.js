import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import ReactNav from './../ReactNav'
import Nav from './Navbar'
// Display the one Twoot  - Remember to allow the passing of an id here


const Twoot = ({ history, twoot, deleteTwoot, showControls, type }) => {
    const lightHeartStyles = {
        fontSize: "1rem"
    }
    const darkHeartStyles = {
        fontSize: "1.35rem"
    }
    const [likes, setLikes] = useState(0)
    const [heart, setHeart] = useState("♡")
    const [heartStyles, setHeartStyles] = useState(lightHeartStyles)
    // ♡

    if (!twoot){
        return null
    } else {
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet"></link>
        const {title, category, content, modified_date} = twoot

        const linkStyles ={
            color: "#1e2182"
        }

        const divStyles={
            padding: '5%',
            backgroundColor: "#f5f5f5",
            margin: '2%',
            fontFamily: 'PT Sans',
            width: "80vw"


        }
        const categoryStyles = {
            color: "#6e6e6e",
            margin: "3% 0"
        }

        const divCentered = {
            display: 'flex',
            flexDirection: "column",
            justifyContent: 'center'
        }

        const handleDelete = (e) => {
            e.preventDefault()
            deleteTwoot(twoot._id)
            history.push("/projects/react/tweeter")
        }

        const handleEdit = (e) => {
            e.preventDefault()
            history.push(`/projects/react/tweeter/twoot/edit/${twoot._id}`)
        }
        

        const handleLikes = (e) => {
            e.preventDefault()
            if (likes === 0){
                setLikes(likes + 1)
                setHeart("♥")
                setHeartStyles(darkHeartStyles)
            } else {
                setLikes(likes - 1)
                setHeart("♡")
                setHeartStyles(lightHeartStyles)

            }
            

        }

        const likesStyles = {
            margin: "0",
            paddingRight: "2%",
            fontSize: "1.5rem"
            


        }
        const divLikesStyles = {
            display: "flex"

        }

        const contentStyles = {
            padding: "3% 0"
        }
        const heading = {
            fontFamily: 'PT Sans',
            fontSize: "4rem",
            paddingLeft: '5%'
        }

        
        

        

        


        return (
            <div style={divCentered}>
                {
                    type === "single" && 
                    <div>

                        <ReactNav />
                        <h1 style={heading}>Tweeter</h1>    
                        <Nav />
                    </div>


                }
                <div style={divStyles}>
                    <Link style={linkStyles} to={`/projects/react/tweeter/twoot/${twoot._id}`} >
                        <h1>{title}</h1>
                    </Link>
                    <h3 style={categoryStyles}>{category}</h3>
                    <h5>{modified_date.toLocaleString()}</h5>
                    <p style={contentStyles}>{content}</p>
                    <div style={divLikesStyles}>
                        <p style={likesStyles}>{likes}</p>
                        <button onClick={handleLikes} style={heartStyles}>{heart}</button>
                    </div>
                    
                    {showControls && <button onClick={handleDelete}>delete</button>}
                    {showControls && <button onClick={handleEdit}>edit</button>}
                </div>
            </div>
        )
    }

    
}

export default Twoot
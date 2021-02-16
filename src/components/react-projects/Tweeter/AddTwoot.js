import React, {useState} from 'react'
import ReactNav from './../ReactNav'
import Nav from './Navbar'

// Create a Twoot


const AddTwoot = ({history, nextId, addTwoot}) => {
    const divStyles = {
        // width: "100%",
        
    }
    const inputStyles = {
        width: "100%",
        margin: ".5em"

    }
    const labelStyles = {
        fontSize: "1.2em"
    }
    const textAreaStyles = {
        height: "200px",
        margin: ".5em",
        width: "100%"
    }

    const initialFormState = {
        title: "",
        category: "",
        content: ""
    }

    const [formState, setFormState] = useState(initialFormState)

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newTwoot = {
            _id: nextId,
            title: formState.title,
            category: formState.category || "general",
            modified_date: new Date(),
            content: formState.content
        }
        // console.log(newTwoot)
        addTwoot(newTwoot)
        history.push(`/tweeter/twoot/${nextId}`)
        // console.log(newTwoot)
    }
    console.log(formState)

    const heading = {
        fontFamily: 'PT Sans',
        fontSize: "4rem",
        paddingLeft: '5%'
    }

    
    

    return (
        <div id="newPostForm">
            <div>

                <ReactNav />
                <h1 style={heading}>Tweeter</h1>    
                <Nav />
            </div>
            <div className="heading">
                <h1>add twoot</h1>
            </div>
            
            <form onSubmit={handleSubmit} id="newTwootForm">
                <div >
                    <label style={labelStyles}>Title</label>
                    <input
                    type="text"
                    style={inputStyles}
                    required
                    name="title"
                    placeholder="title..."
                    onChange={handleChange}
                    />


                </div>
                <div >
                    <label style={labelStyles}>Category</label>
                    <input
                    type="text"
                    style={inputStyles}
                    required
                    name="category"
                    placeholder="category..."
                    onChange={handleChange}
                    />
                    

                </div>
                <div >
                    <label style={labelStyles}>Content</label>
                    <textarea
                    form="newPostForm"
                    style={textAreaStyles}
                    required
                    name="content"
                    placeholder="content..."
                    onChange={handleChange}
                    />
                    

                </div>
                <input type="submit" value="New Twoot"></input>


            </form>
        </div>
    )
}

export default AddTwoot
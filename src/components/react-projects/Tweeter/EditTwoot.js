import React, {useState, useEffect} from 'react'
import ReactNav from './../ReactNav'
import Nav from './Navbar'

// Edit the Twoot - Remember to allow the passing of an id here

const EditTwoot = ({history, updateTwoot, twoot, }) => {

    const [formState, setFormState] = useState({})

    // const divStyles = {
    //     display: "grid",
    //     // width: "100vw"
    // }
    const inputStyles = {
        width: "70vw",
        margin: ".5em"
    }
    const labelStyles = {
        fontSize: "1.2em"
    }
    const textAreaStyles = {
        height: "200px",
        margin: ".5em",
        width: "70vw"
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const updatedTwoot = {
            _id: twoot._id,
            title: formState.title,
            category: formState.category || "general",
            modified_date: new Date(),
            content: formState.content
        }
        updateTwoot(updatedTwoot)
        history.push(`/tweeter/twoot/${twoot._id}`)

    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormState({
            ...formState,
            [name]: value
        })
    }

    useEffect(() => {
        // Set the formState to the fields in the post after mount and when post changes
        twoot && setFormState({
            title: twoot.title,
            category: twoot.category,
            content: twoot.content
        })
    },[twoot])

    const heading = {
        fontFamily: 'PT Sans',
        fontSize: "4rem",
        paddingLeft: '5%'
    }

    return (
        <div>
            <div>

                <ReactNav />
                <h1 style={heading}>Tweeter</h1>    
                <Nav />
            </div>


            <div id="editPostForm">
                <h1>Edit Twoot</h1>

            {/* <h1>add twoot</h1> */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label style={labelStyles}>Title</label>
                    <input
                    type="text"
                    style={inputStyles}
                    required
                    name="title"
                    value={formState.title}
                    onChange={handleChange}
                    />


                </div>
                <div>
                    <label style={labelStyles}>Category</label>
                    <input
                    type="text"
                    style={inputStyles}
                    required
                    name="category"
                    value={formState.category}
                    onChange={handleChange}
                    />
                    

                </div>
                <div>
                    <label style={labelStyles}>Content</label>
                    <textarea
                    form="newPostForm"
                    style={textAreaStyles}
                    required
                    name="content"
                    value={formState.content}
                    onChange={handleChange}
                    />
                    

                </div>
                <input type="submit" value="Update Twoot"></input>


            </form>
        </div>
        </div>
    )
}


export default EditTwoot
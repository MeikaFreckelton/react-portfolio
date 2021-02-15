import React from 'react'
import Nav from './Nav'
import designData from '../data/design_projects'








const DesignProjects = () => {
    console.log(designData)

    const fashionData = {
        imagePath: "/images/daydream-nation.png",
        imageAlt: "type poster",
        downloadLink: "/images/pdf/daydream-nation.pdf",
        title: "Fashion brand Booklet",
        subtitle: "Fashion work, 2018",
        text: "A booklet I created during my fashion studies of a brand of my own creation, named, 'Daydream Nation'.",
    }


    const displayGraphic = (data) => {
        const { imagePath, imageAlt, downloadLink, title, subtitle, text } = data

        return (
            <div className="portfolioCard">
                <img src={imagePath} alt={imageAlt} ></img>
                <div className="cardDetails" key={data.id && data.id}>
                    <div className="cardTitle">
                        <h1>{title.toUpperCase()}</h1>
                        <a href={downloadLink} target="_blank" rel="noreferrer" download><i class="fas fa-download"></i></a>
                    </div>
                    <p>{subtitle}</p>
                    <p>{text}</p>
                    
                </div>


            </div>
        )
    }




    return (
        <div>
            <Nav />

            <div className="designPage">
                <div className="heading">
                    DESIGN PROJECTS
                </div>
                <div>
                    <h2>EQUINOX</h2>
                    <p>Brand design for an airline of my creation, 'Equinox' and its mobile booking system.</p>
                    <a href="https://invis.io/HYSC1JIVKTF" target="_blank" rel="noreferrer">View prototype</a>
                    <div>
                        <div className="designCard">
                            <img src={"/images/equinox-brief.png"} alt="equinox brief"></img>
                            <div className="designDetails">
                                <div className="designTitle">
                                    <h1>FORMAL BRIEF</h1>
                                    <a href="/images/pdf/equinox-brief.pdf" target="_blank" rel="noreferrer" download><i class="fas fa-download"></i></a>
                                </div>
                                <p>A formal brief document detailing the expected timeline, an overview of the proposal, the target audience and the proposed budget. </p>

                            </div>
                        </div>
                        <div className="designCard">
                            <img src={"/images/equinox-poster.png"} alt="equinox poster"></img>
                            <div className="designDetails">
                                <div className="designTitle">
                                    <h1>POSTER</h1>
                                    <a href="/images/pdf/equinox-poster.pdf" target="_blank" rel="noreferrer" download><i class="fas fa-download"></i></a>
                                </div>
                                <p>A poster describing the main control flow of the application and screen examples</p>

                            </div>
                        </div>
                        <div className="designCard">
                            <img src={"/images/qantas-analysis.png"} alt="equinox brief"></img>
                            <div className="designDetails">
                                <div className="designTitle">
                                    <h1>RESEARCH INTO COMPETITORS</h1>
                                    <a href="/images/pdf/qantas-analysis.pdf" target="_blank" rel="noreferrer" download><i class="fas fa-download"></i></a>
                                </div>
                                <p>A poster detailing my analysis and findings into Qantas and their app. </p>

                            </div>
                        </div>


                    </div>

                </div>
                <div>
                    <h2>GRAPHIC DESIGN</h2>
                    <div className="graphicCards">
                        {
                            designData.map((x) => {
                                return displayGraphic(x)
                            })
                        }

                    </div>
                </div>
                <div>
                    <h2>FASHION</h2>
                    <div className="graphicCards">
                        {
                            displayGraphic(fashionData)
                        }

                    </div>
                </div>
                


            </div>

        </div>
    )
}


export default DesignProjects
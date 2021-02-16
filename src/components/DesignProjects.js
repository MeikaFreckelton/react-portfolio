import React from 'react'
import designData from '../data/design_projects'








const DesignProjects = () => {

    const fashionData = [
        {
            imagePath: "/images/timeline.png",
            imageAlt: "timeline",
            downloadLink: "/images/timeline.png",
            title: "40s Fashion Timeline",
            subtitle: "Fashion work, 2018",
            text: "A poster detailing the basic timeline of fashion during the 1940s."
        },
        {
            imagePath: "/images/daydream-nation.png",
            imageAlt: "type poster",
            downloadLink: "/images/pdf/daydream-nation.pdf",
            title: "Fashion brand Booklet",
            subtitle: "Fashion work, 2018",
            text: "A booklet I created during my fashion studies of a brand of my own creation, named, 'Daydream Nation'."
        },
    ]
    console.log(fashionData)

        
    


    const displayGraphic = (data) => {
        const { imagePath, imageAlt, downloadLink, title, subtitle, text } = data

        return (
            <div className="portfolioCard col-3">
                <img src={imagePath} alt={imageAlt} ></img>
                <div className="cardDetails" key={data.id && data.id}>
                    <div className="cardTitle">
                        <h2>{title && title.toUpperCase()}</h2>
                        <a href={downloadLink} target="_blank" rel="noreferrer" download><i class="fas fa-download"></i></a>
                    </div>
                    <p>{text}</p>
                    <p className="sub">{subtitle}</p>

                    
                </div>


            </div>
        )
    }




    return (
        <div>
            {/* <Nav /> */}

            <div className="designPage">
                <div className="heading">
                    DESIGN PROJECTS
                </div>
                <div>
                    <div className="equinox">
                        <h1>EQUINOX</h1>
                        <p>Brand design for an airline of my creation, 'Equinox' and its mobile booking system.</p>
                        <a href="https://invis.io/HYSC1JIVKTF" target="_blank" rel="noreferrer">View prototype</a>
                    </div>

                    <div className="equinoxCards">
                        <div className="designCard">
                            <img src={"/images/equinox-brief.png"} alt="equinox brief"></img>
                            <div className="designDetails">
                                <div className="designTitle">
                                    <h2>FORMAL BRIEF</h2>
                                    <a href="/images/pdf/equinox-brief.pdf" target="_blank" rel="noreferrer" download><i class="fas fa-download"></i></a>
                                </div>
                                <p>A formal brief document detailing the expected timeline, an overview of the proposal, the target audience and the proposed budget. </p>

                            </div>
                        </div>
                        <div className="designCard">
                            <img src={"/images/equinox-poster.png"} alt="equinox poster"></img>
                            <div className="designDetails">
                                <div className="designTitle">
                                    <h2>POSTER</h2>
                                    <a href="/images/pdf/equinox-poster.pdf" target="_blank" rel="noreferrer" download><i class="fas fa-download"></i></a>
                                </div>
                                <p>A poster describing the main control flow of the application and screen examples</p>

                            </div>
                        </div>
                        <div className="designCard">
                            <img src={"/images/qantas-analysis.png"} alt="equinox brief"></img>
                            <div className="designDetails">
                                <div className="designTitle">
                                    <h2>RESEARCH INTO COMPETITORS</h2>
                                    <a href="/images/pdf/qantas-analysis.pdf" target="_blank" rel="noreferrer" download><i class="fas fa-download"></i></a>
                                </div>
                                <p>A poster detailing my analysis and findings into Qantas and their app. </p>

                            </div>
                        </div>


                    </div>

                </div>
                <div className="graphicWrapper">
                    <h1>GRAPHIC DESIGN</h1>
                    <div className="graphicCards">
                        {
                            designData.map((x) => {
                                return displayGraphic(x)
                            })
                        }

                    </div>
                </div>
                <div>
                    <h1>FASHION</h1>
                    <div className="graphicCards">
                        {
                            fashionData.map(x => {
                                return displayGraphic(x)
                            })
                            
                        }

                    </div>
                </div>
                


            </div>

        </div>
    )
}


export default DesignProjects
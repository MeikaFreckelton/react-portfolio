import React, {useState} from 'react'

const HappyMessage = () => {
    let messages = [
        "You always pass failure on the way to success", 
        "Positive anything is better than negative nothing", 
        "Great things never come from comfort zones.", 
        "Do something today that your future self will thank you for.", 
        "Your limitation—it’s only your imagination.",
        "You’re off to great places, today is your day. Your mountain is waiting, so get on your way.",
        "It always seems impossible until it is done.",
        "In every day, there are 1,440 minutes. That means we have 1,440 daily opportunities to make a positive impact.",
        "The only time you fail is when you fall down and stay down.",
        "When you are enthusiastic about what you do, you feel this positive energy. It’s very simple."
    ]

    const [random, setRandom] = useState("")

    const printMessage = (e) => {
        let randomMessage = messages[Math.floor(Math.random() * messages.length)]
        setRandom(randomMessage)
    }

    return (
        <div>
            <div className="heading">
                <h1>Click to receive a random happy message</h1>
            </div>
            
            
            <div id="happyMessage">
                <button onClick={printMessage} id="happyBtn" >Get a happy message</button>
                <div id="randomMessage">
                    <h2>{random}</h2>
                </div>
                
            </div>
            
        </div>
    )
}





export default HappyMessage
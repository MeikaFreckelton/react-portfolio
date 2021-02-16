import React, { useState } from 'react' 
import Nav from './Nav'
import emailjs from 'emailjs-com';


const Contact = () => {
    const [completion, setComplete] = useState("")
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_goyswth', 'template_59xcxad', e.target, 'user_Gkyj9G1XbWyt4jrJbxiOH')
          .then((result) => {
              console.log(result.text)
              setComplete({
                text: "Your message has been received!",
                class: "success"
              })
          }, (error) => {
              setComplete({
                text: "Oops there was an error! Please try again later.",
                class: "failed"
                })
              console.log(error.text);
          });
    }

    return (
        <div>
            <Nav />

            <div className="contactPage">
                <div className="heading">
                    CONTACT ME
                </div>
                <div className="socials">
                    <a href="https://www.linkedin.com/in/meika-freckelton-269741195/" target="_blank" rel="noreferrer">
                        <i class="fab fa-linkedin"></i> 
                    </a>
                    <a href="https://twitter.com/meikafreckelton" target="_blank" rel="noreferrer">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="https://github.com/MeikaFreckelton" target="_blank" rel="noreferrer">
                        <i class="fab fa-github-alt"></i>
                    </a>
                    <a href="tel:0452634523" target="_blank" rel="noreferrer">
                        <i class="fas fa-phone"></i>
                    </a>
                    <a href="mailto:meikafreckelton@gmail.com" target="_blank" rel="noreferrer">
                        <i class="far fa-envelope"></i>
                    </a>

                </div>
                {
                    completion && 
                    <h1 className={completion.class}>{completion.text}</h1>
                }
                <div>
                    <form id="contact-form" onSubmit={sendEmail}>
                        <input type="hidden" name="contact_number"/>
                        <div className="formFields">
                            <label>Name</label>
                            <input type="text" name="user_name"></input>
                        </div>
                        <div className="formFields">
                            <label>Email</label>
                            <input type="text" name="user_email"></input> 
                        </div>
                        <div className="formFields">
                            <label>Message</label>
                            <textarea name="message"></textarea>
                        </div>
                        <input type="submit" value="Send"></input>
                    </form>
                </div>
                
            </div>
        </div>
    )
}

export default Contact
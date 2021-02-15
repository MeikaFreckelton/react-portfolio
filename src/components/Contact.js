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
                {
                    completion && 
                    <h1 className={completion.class}>{completion.text}</h1>
                }
                <div>
                    <form id="contact-form" onSubmit={sendEmail}>
                        <input type="hidden" name="contact_number"/>
                        <div>
                            <label>Name</label>
                            <input type="text" name="user_name"></input>
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="text" name="user_email"></input> 
                        </div>
                        <div>
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
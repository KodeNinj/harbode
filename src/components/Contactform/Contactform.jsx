import React from 'react'
import formImg from '../../img/contactform.png'
const Contactform = () => {
  return (
    <section className="contactform">
        <div className="left">
            <h4>How Can We Help You Today?</h4>
            <p className='p'>Don't worry, we won't keep you waiting for long. The solution will drop into your mailbox in a jiffy. Three minutes max!</p>
            <form action="">
                <input type="email" name="mail" id="mail" placeholder='Enter your Email address *' required/>
                <input type="text" name="subject" id="subject" placeholder='Mail Subject *' required/>
                <textarea name="body" id="body" cols="50" rows="10" placeholder='Enter your text *' required ></textarea>
                <p className='upload'>Add screenshot <i class="fa-solid fa-cloud-arrow-up"></i></p>
                <input type="submit" value="Send Mail Now" id='submit' />

            </form>
        </div>
        <div className="right">
            <img src={formImg} alt="" />
        </div>
    </section>
  )
}

export default Contactform
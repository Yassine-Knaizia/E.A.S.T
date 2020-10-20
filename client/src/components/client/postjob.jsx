import React from "react"
import Footer from "../footer.jsx"
class PostJob extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
      return <div >
<div className="ashade-page-title-wrap">
        <h1 className="ashade-page-title">
            <span>We Make It EasY fOR You</span>
            Post A Job
        </h1>
    </div>
<form  method="post" className="PostJobForm">

					   			<div className="ashade-row ashade-small-gap">
									<div className="ashade-col col-4">
										<input type="text" id="name" name="name" placeholder="Your Name" required/>
                    <select name="Filed" id="selectFiled">
                  <option value="Designe">Designe</option>
                  <option value="Photography">Photography</option>
                  <option value="Audio">Audio</option>
                    </select> 
									</div>
									<div className="ashade-col col-4">
										<input type="email" id="YourEmail" name="email" placeholder="YourEmail" required/>
                    <input type="email" id="youraddress" name="address" placeholder="your address" required/>
									</div>
									<div className="ashade-col col-4">
										<input type="tel" id="YourPhoneNumber" name="phone" placeholder="YourPhoneNumber" required/>
                    <input type="tel" id="ImgAddress"  placeholder="Img Address" required/>
									</div>
								</div>
								<textarea name="message" id="message" placeholder="Job Description" required></textarea>
								<div className="ashade-contact-form__footer">
									<div className="ashade-contact-form__response"></div>
									<div className="ashade-contact-form__submit">
										<input type="submit" value="Send Message"/>
                    
									</div>
								</div>
                <Footer/>
							</form>
      </div>;
    }
  }

export default PostJob
import React from "react"
import Footer from "../footer.jsx"
class PostJob extends React.Component {
    constructor(props){
        super(props)
        this.state={
          defaultsrc:'img/services/thmb-nature.png',
          imgsrc:"",
          Name:"",
          Email:"",
          PhoneNumber:"",
          address:"",
          Field:""
        }
    }

    render() {
      return <div >
        <div className="ashade-home-background ashade-page-background is-video">
        <video src="video/home-bg.mp4" poster="img/bgs/bg-home01.png" muted autoPlay loop></video>
      </div>

      <div className="ashade-page-title-wrap">
        <h1 className="ashade-page-title">
            <span>We Make It EasY fOR You</span>
            Post A Job
        </h1>
      </div>
      
<form  method="post" className="PostJobForm">
<div className="ashade-service-card__head">
					<div className="imgpostjob">
						<img src={this.state.imgsrc.length?this.state.imgsrc:this.state.defaultsrc} />
					</div>
      </div>
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
                    <input type="address" id="youraddress" name="address" placeholder="your address" required/>
									</div>
									<div className="ashade-col col-4">
										<input type="tel" id="YourPhoneNumber" name="phone" placeholder="YourPhoneNumber" required onChange={(event=>{this.setState({PhoneNumber:event.target.value})})}/>
                    <input type="text" id="ImgAddress"  placeholder="Img Address" onChange={(event=>{this.setState({imgsrc:event.target.value})})} required/>
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
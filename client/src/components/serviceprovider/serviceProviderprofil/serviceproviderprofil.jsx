  
import React from "react";
import AboutMe from "./aboutMe.jsx";
import BackToTop from "./backToTop.jsx";
import Bio from "./bio.jsx";
import Studio from "./studio.jsx";
import ProfileInfo from "./profInfo.jsx";
import Feedbacks from "./feedbacks.jsx";
import axios from "axios";
class ProfileSP extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          user: []
        }
    }
    componentDidMount(){
      axios.get("/api/clients/serviceInfo")
      .then(response => {
        this.setState({user: response.data})
        console.log(response)
      })
    }


    render() {
      return  <div>
      <BackToTop />
      <AboutMe />
      <main className="ashade-content-wrap">
        <div className="ashade-content-scroll">
          <div className="ashade-content">
            <Bio typeuser={this.props.typeuser}/>
            <ProfileInfo />
            <Studio />
            <Feedbacks />

          </div>
        </div>
      </main>
    </div>
    }
  }

export default ProfileSP
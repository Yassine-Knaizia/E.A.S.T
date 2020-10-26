import React from "react"

class Home extends React.Component {
    constructor(props){
        super(props)
    }

    render() {    
      return  <div >
        <div className="ashade-page-title-wrap" >
        <h1 className="ashade-page-title">
            <span>EAST</span>
           we connect dots
        </h1>
    </div>
          <div className="ashade-home-background ashade-page-background is-video">
        <video src="video/home-bg.mp4" poster="img/bgs/bg-home01.png" muted autoPlay loop></video>
      </div>
      
      
      <div className="ashade-home-link--works ashade-home-link-wrap">
        <div className="ashade-home-link is-link">
          <span>MORE INFORMATION</span>
          <span>Guide</span>
        </div>
      </div>
      <div className="ashade-home-link--contacts ashade-home-link-wrap">
        <div className="ashade-home-link is-link">
        <span>FEEDBACK</span>
        <span>ABOUT US</span>
    
        </div>
      </div>
       
        <div className="ashade-page-title-wrap is-inactive ">
            <h1 className="ashade-page-title">&nbsp;</h1>
        </div>
        
        <div className="ashade-home-return ashade-back-wrap is-inactive">
            <div className="ashade-back is-home-return">
                <span>Return</span>
                <span>Back</span>
            </div>
        </div>
        
        <div className="ashade-home-block-overlay"></div>
        <div className="ashade-menu-overlay"></div>
        <div className="ashade-aside-overlay"></div>
        <div className="ashade-cursor is-inactive">
          <span className="ashade-cursor-circle"></span>
          <span className="ashade-cursor-slider"></span>
          <span className="ashade-cursor-close ashade-cursor-label">Close</span>
          <span className="ashade-cursor-zoom ashade-cursor-label">Zoom</span>
        </div>
      </div>
    }
  }
  
export default Home
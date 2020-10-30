import React from "react"
import About from  "../about.jsx"
class VisitorNavbar extends React.Component {
    constructor(props){
        super(props)
        this.state={
           navbar:null
        }
        this.handleclick=this.handleclick.bind(this)
    }
    handleclick(e){
        console.log(e.target.id)
if(e.target.id=="Home"){
    this.props.ChangeRoute("/")
    window.history.pushState({},null,"/")
}if(e.target.id=="About"){
    this.props.ChangeRoute("/About")
    window.history.pushState({},null,"/About")
}if(e.target.id=="offers"){
    this.props.ChangeRoute("/Market")
    window.history.pushState({},null,"/Offers")
}if(e.target.id=="Signup"){
    this.props.ChangeRoute("/Signup")
    window.history.pushState({},null,"/Signup")
}if(e.target.id=="L-Client"){
    this.props.ChangeRoute("/ClientLogin")
    window.history.pushState({},null,"/ClientLogin")
}if(e.target.id=="L-Freelancer"){
    this.props.ChangeRoute("/FreelancerLogin")
    window.history.pushState({},null,"/FreelancerLogin")
}if(e.target.id=="S-Client"){
    this.props.ChangeRoute("/ClientSignup")
    window.history.pushState({},null,"/ClientSignup")
}if(e.target.id=="S-Freelancer"){
    this.props.ChangeRoute("/FreelancerSignup")
    window.history.pushState({},null,"/FreelancerSignup")
}
    }
    render() {
      return <div>
        <header id="ashade-header">
        <div className="ashade-header-inner">
            <div className="ashade-logo-block">
                <a href="index.html" className="ashade-logo is-retina">
                	{/* <img src="img/logo.png" alt="Ashade Logo" width="128" height="110"/> */}
                </a>
            </div>
            <div className="ashade-nav-block">
                <nav className="ashade-nav">
                    <ul className="main-menu">
                        <li className="menu-item-has-children">
                        <a href="#" id="Home" onClick={this.handleclick}> Home</a>
    
                         
                        </li>
						<li className="menu-item-has-children">

                        <a href="#" id=""> JobOffers</a> 
                        <ul className="sub-menu">
                                    <li><a href="#" id="offers" onClick={this.handleclick}>Offers</a></li>
                          </ul>
                        </li>
						<li className="menu-item-has-children">
                            <a href="#" id="About" onClick={this.handleclick}>About</a>
                     
                        </li>
                        <li className="menu-item-has-children">
                            <a href="#" id="Login" onClick={this.handleclick}>Login</a>
                            <ul className="sub-menu">
                            <li><a href="#" id="L-Client" onClick={this.handleclick}>Client-Login</a></li>
                            <li><a href="#" id="L-Freelancer" onClick={this.handleclick}>Freelancer-Login</a></li>
                            </ul>
                            
                        </li>
                        <li>
                            <a href="#" id="Signup" >signup</a>
                        <ul className="sub-menu">
                            <li><a href="#" id="S-Client" onClick={this.handleclick}>Client-signup</a></li>
                            <li><a href="#" id="S-Freelancer" onClick={this.handleclick}>Freelancer-signup</a></li>
                            </ul>
                            </li>
                        <li>
							<a href="#" className="ashade-aside-toggler">
								<span className="ashade-aside-toggler__icon01"></span>
								<span className="ashade-aside-toggler__icon02"></span>
								<span className="ashade-aside-toggler__icon03"></span>
							</a>
                        </li>
                    </ul>
                </nav>
                <div className="ashade-mobile-header">
                <a className="ashade-aside-toggler" href="#" >
                    <span className="ashade-aside-toggler__icon01"></span>
                    <span className="ashade-aside-toggler__icon02"></span>
                    <span className="ashade-aside-toggler__icon03"></span>
                    </a></div>
            </div>
        </div>
    </header>
      </div>;
    }
  }
 

  
export default VisitorNavbar

import React from "react"
class FreeLancerNavbar extends React.Component {
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
}if(e.target.id=="Login"){
    this.props.ChangeRoute("/Login")
    window.history.pushState({},null,"/Login")
}if(e.target.id=="AppliedJobs"){
    this.props.ChangeRoute("/Jobsapplied")
    window.history.pushState({},null,"/offers/AppliedJobs")
}if(e.target.id=="Profile"){
    this.props.ChangeRoute("/Profile")
    window.history.pushState({},null,"/Account/Profile")
}if(e.target.id=="Logout"){
    this.props.ChangeRoute("/")
    window.history.pushState({},null,"/")
    window.location.reload();
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
                        <a  id="Home" onClick={this.handleclick}> Home</a>
    
                         
                    </li>
						<li className="menu-item-has-children">

                        <a href="#"> JobOffers</a> 
                         <ul className="sub-menu">
                                    <li><a  id="offers" onClick={this.handleclick}>Offers</a></li>
                                    <li><a  id="AppliedJobs" onClick={this.handleclick}>AppliedJobs</a></li>
                          </ul>
                        </li>
					<li className="menu-item-has-children">
                            <a href="#">Account</a>
                            <ul className="sub-menu">
                                        <li><a id="Profile" onClick={this.handleclick}>Profile</a></li>
                                    </ul>
                        </li>
                        <li className="menu-item-has-children">
                            <a href="#" id="About" onClick={this.handleclick}>About</a>
                            
                        </li>
                        <li><a id="Logout" onClick={this.handleclick}>Logout</a></li>
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
 

  
export default FreeLancerNavbar

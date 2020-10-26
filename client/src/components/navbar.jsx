import React from "react"
import {connect} from "react-redux"
import VisitorNavbar from "./NavBar/VisitorNavBar.jsx"
import ClientNavbar from "./NavBar/ClientNavBar.jsx"
import FreeLancerNavbar from "./NavBar/FreelancerNavBar.jsx"
class Navbar extends React.Component {
    constructor(props){
        super(props)
        this.state={
        NavBar:null
        }
    }
    static getDerivedStateFromProps(props, state){
        if(props.user){
          console.log(props.user)
            if(props.user==="visitor"){
                return {
                    NavBar:<VisitorNavbar ChangeRoute={props.routes}/>
                }
            }else if(props.user==="client"){
                return {
                    NavBar:<ClientNavbar ChangeRoute={props.routes}/>
                }
            }else if(props.user==="freelancer"){
                return {
                    NavBar:<FreeLancerNavbar ChangeRoute={props.routes}/>
                }
            }
            
        }return null
    }

    render() {
      return <div>
          {this.state.NavBar}
        {/* <header id="ashade-header">
        <div className="ashade-header-inner">
            <div className="ashade-logo-block">
                <a href="index.html" className="ashade-logo is-retina">
                	<img src="img/logo.png" alt="Ashade Logo" width="128" height="110"/>
                </a>
            </div>
            <div className="ashade-nav-block">
                <nav className="ashade-nav">
                    <ul className="main-menu">
                        <li className="menu-item-has-children">
                        <a href="#"> Home</a>
    
                         
                        </li>
						<li className="menu-item-has-children">
                        <a href="#">  Works</a> 
                            <ul className="sub-menu">
                                <li className="menu-item-has-children">
                                    <a href="#">Ribbon</a>
                                    <ul className="sub-menu">
                                        <li><a href="works-ribbon-large.html">Ribbon Large</a></li>
                                        <li><a href="works-ribbon-medium.html">Ribbon Medium</a></li>
                                        <li><a href="works-ribbon-vertical.html">Ribbon Vertical</a></li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children">
                                    <a href="#">Slider</a>
                                    <ul className="sub-menu">
                                        <li><a href="works-slider-parallax.html">Parallax Slider</a></li>
                                        <li><a href="works-slider-simple.html">Simple Slider</a></li>
                                        <li><a href="works-slider-fade.html">Fade Slider</a></li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children">
                                    <a href="#">Grid</a>
                                    <ul className="sub-menu">
                                        <li><a href="works-grid-2columns.html">2 Columns</a></li>
                                        <li><a href="works-grid-3columns.html">3 Columns</a></li>
                                        <li><a href="works-grid-4columns.html">4 Columns</a></li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children">
                                    <a href="#">Masonry</a>
                                    <ul className="sub-menu">
                                        <li><a href="works-masonry-2columns.html">2 Columns</a></li>
                                        <li><a href="works-masonry-3columns.html">3 Columns</a></li>
                                        <li><a href="works-masonry-4columns.html">4 Columns</a></li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children">
                                    <a href="#">Adjusted</a>
                                    <ul className="sub-menu">
                                        <li><a href="works-adjusted-2columns.html">2 Columns</a></li>
                                        <li><a href="works-adjusted-3columns.html">3 Columns</a></li>
                                        <li><a href="works-adjusted-4columns.html">4 Columns</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
						<li className="menu-item-has-children">
                            <a href="#">Showcase</a>
                            <ul className="sub-menu">
                                <li className="menu-item-has-children">
                                    <a href="#">Grid</a>
                                    <ul className="sub-menu">
                                        <li><a href="gallery-grid-2columns.html">2 Columns</a></li>
                                        <li><a href="gallery-grid-3columns.html">3 Columns</a></li>
                                        <li><a href="gallery-grid-4columns.html">4 Columns</a></li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children">
                                    <a href="#">Masonry</a>
                                    <ul className="sub-menu">
                                        <li><a href="gallery-masonry-2columns.html">2 Columns</a></li>
                                        <li><a href="gallery-masonry-3columns.html">3 Columns</a></li>
                                        <li><a href="gallery-masonry-4columns.html">4 Columns</a></li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children">
                                    <a href="#">Adjusted</a>
                                    <ul className="sub-menu">
                                        <li><a href="gallery-adjusted-2columns.html">2 Columns</a></li>
                                        <li><a href="gallery-adjusted-3columns.html">3 Columns</a></li>
                                        <li><a href="gallery-adjusted-4columns.html">4 Columns</a></li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children">
                                    <a href="#">Ribbon</a>
                                    <ul className="sub-menu">
                                        <li><a href="gallery-ribbon-large.html">Ribbon Large</a></li>
                                        <li><a href="gallery-ribbon-medium.html">Ribbon Medium</a></li>
                                        <li><a href="gallery-ribbon-vertical.html">Ribbon Vertical</a></li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children">
                                    <a href="#">Slider</a>
                                    <ul className="sub-menu">
                                        <li><a href="gallery-slider-parallax.html">Parallax Slider</a></li>
                                        <li><a href="gallery-slider-simple.html">Simple Slider</a></li>
                                        <li><a href="gallery-slider-fade.html">Fade Slider</a></li>
                                    </ul>
                                </li>
                                <li><a href="gallery-justified.html">Justified</a></li>
                                <li><a href="gallery-bricks-1x2.html">Bricks 1x2</a></li>
                                <li><a href="gallery-bricks-2x3.html">Bricks 2x3</a></li>
                            </ul>
                        </li>
                        <li className="menu-item-has-children">
                            <a href="#">Pages</a>
                            <ul className="sub-menu">
                                <li><a href="about.html">About Me</a></li>
                                <li className="current-menu-item"><a href="services.html">Services</a></li>
                                <li><a href="testimonials.html">Testimonials</a></li>
								<li><a href="typography.html">Typography</a></li>
                            </ul>
                        </li>
                        <li><a href="contacts.html">Contacts</a></li>
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
    </header> */}
      </div>;
    }
  }

  const mapStateToProps = (state, ownProps) => {
    return {
      visitorNavbar:state.visitorNavbar
    }
  }
 

  
export default connect(mapStateToProps)(Navbar)


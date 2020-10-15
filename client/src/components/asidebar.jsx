import React from "react"
class Asidebar extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
      return <div>
         <li className="menu-item-has-children" >
                            <a href="#">Home</a>
                            <ul className="sub-menu">
                                <li><a href="index.html">Home Video</a></li>
                                <li><a href="home02.html">Home Slider</a></li>
                                <li><a href="home03.html">Home Static</a></li>
                                <li><a href="maintenance.html">Maintenance</a></li>
                            </ul>
                        </li>
      </div>
    }
  }

export default Asidebar
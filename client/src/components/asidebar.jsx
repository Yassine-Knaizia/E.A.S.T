import React from "react"
class Asidebar extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
      return <div>
         <li className="menu-item-has-children" >
                            <a href="#">Home</a>
                        </li>
      </div>
    }
  }

export default Asidebar
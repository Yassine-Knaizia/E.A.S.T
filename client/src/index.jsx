import React from "react"
import ReactDOM from "react-dom"
import Market from "./components/market.jsx"
import Navbar from "./components/navbar.jsx"
import Asidebar from "./components/asidebar.jsx"
import SignupClient from "./components/client/SignupClient.jsx"
import SignupServiceProvider from "./components/serviceprovider/SignupServiceProvider.jsx"

class App extends React.Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    render() {
      return <div>
         <aside id="ashade-aside"> 
        <Asidebar/>
        </aside>
         <Navbar/> 
        {/* <SignupClient/> */}
        <SignupServiceProvider />
      </div>
    }
  }

ReactDOM.render(<App/>,document.getElementById('app'))
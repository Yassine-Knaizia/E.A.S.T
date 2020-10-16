import React from "react"
import ReactDOM from "react-dom"
import Market from "./components/market.jsx"
import Navbar from "./components/navbar.jsx"
import Asidebar from "./components/asidebar.jsx"
import SignupClient from "./components/client/SignupClient.jsx"
import SignupServiceProvider from "./components/serviceprovider/SignupServiceProvider.jsx"
import LoginClient from "./components/client/LoginClient.jsx"
import LoginServiceProvider from "./components/serviceprovider/LoginServiceProvider.jsx"

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
        {/* <LoginClient/> */}
        <LoginServiceProvider/>
        {/* <SignupServiceProvider /> */}
      </div>
    }
  }

ReactDOM.render(<App/>,document.getElementById('app'))
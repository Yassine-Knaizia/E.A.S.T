import React from "react"
import ReactDOM from "react-dom"
import Market from "./components/market.jsx"
import Navbar from "./components/navbar.jsx"
import Asidebar from "./components/asidebar.jsx"
import Home from "./components/home.jsx"
import Footer from "./components/footer.jsx"
import JobsPosted from "./components/client/jobsposted.jsx"
import Jobsapplied from "./components/serviceprovider/Jobsapplied.jsx"
import PostJob from "./components/client/postjob.jsx"
import ClientSignup from "./components/client/clientSignup.jsx"
import FreelancerSignup from "./components/serviceprovider/freelancerSignup.jsx"
import ClientLogin from "./components/client/clientLogin.jsx"
import FreelancerLogin from "./components/serviceprovider/freelancerlogin.jsx"
import ClientSecondSignup from "./components/client/clientsecondsignup.jsx"
import FreeLancerSecondSignup from "./components/serviceprovider/freelancersecondsignup.jsx"
import About from "./components/about.jsx"
import ProfileSP from "./components/serviceprovider/serviceProviderprofil/serviceproviderprofil.jsx"
import ClientProfile from "./components/client/clientprofile/clientprofil.jsx"
import JobDetails from "./components/jobdetails.jsx"
import EditClientProfile from "./components/client/clientprofile/editClientProfile.jsx"
import SeeAppliers from "./components/client/seeappliers.jsx"
              ////Redux///
import {Provider} from "react-redux"
import {createStore} from "redux"
import {rootReducer} from "../../Redux/redux"

class App extends React.Component {
    constructor(props){
        super(props)
        this.state={
    user:'visitor',
    page:''
        }
   this.ChangePage=this.ChangePage.bind(this)
   this.ChangeUser=this.ChangeUser.bind(this)
    }
    
     ChangeUser(user){
 this.setState({user})
     }
     
    ChangePage(pathname,data,profile){
     if(pathname==="/"){
      this.setState({page:<Home/>})
    }else if(pathname==="/About"){
      this.setState({page:<About/>})
    }else if(pathname==="/profile"){
      this.setState({page:<ClientProfile/>})
    }else if(pathname==="/Profile"){ //UpperCase P
      this.setState({page:<ProfileSP jobDetails={data} selectedprofile={profile} typeuser={this.state.user}/>})
    }else if(pathname==="/JobsPosted"){
      this.setState({page:<JobsPosted ChangePage={this.ChangePage}/>})
    }else if(pathname==="/Jobsapplied"){
      this.setState({page:<Jobsapplied/>})
    }else if(pathname==="/PostJob"){
      this.setState({page:<PostJob ChangePage={this.ChangePage}/>})
    }else if(pathname==="/Market"){
      this.setState({page:<Market ChangePage={this.ChangePage}/>})
    }else if(pathname==="/JobDetails"){
      this.setState({page:<JobDetails jobDetails={data} ChangePage={this.ChangePage}/>})
    }else if(pathname==="/ClientSignup"){
      this.setState({page:<ClientSignup ChangePage={this.ChangePage}/>})
    }else if(pathname==="/FreelancerSignup"){
      this.setState({page:<FreelancerSignup ChangePage={this.ChangePage}/>})
    }else if(pathname==="/ClientLogin"){
      this.setState({page:<ClientLogin ChangeUser={this.ChangeUser} ChangePage={this.ChangePage}/>})
    }else if(pathname==="/FreelancerLogin"){
      this.setState({page:<FreelancerLogin ChangeUser={this.ChangeUser} ChangePage={this.ChangePage}/>})
    }else if(pathname==="/ClientSecondSignup"){
      this.setState({page:<ClientSecondSignup ChangeUser={this.ChangeUser} ChangePage={this.ChangePage}/>})
    }else if(pathname==="/FreeLancerSecondSignup"){
      this.setState({page:<FreeLancerSecondSignup ChangeUser={this.ChangeUser} ChangePage={this.ChangePage}/>})
    }else if(pathname==="/profileEdit"){
      this.setState({page:<EditClientProfile/>})
    }else if(pathname==="/SeeAppliers"){
      this.setState({page:<SeeAppliers appliers={data} selectedprofile={profile} ChangePage={this.ChangePage}/>})
    }
    }

    componentDidMount(){
  var pathname = window.location.pathname;
  this.ChangePage(pathname)
    }
    
    render() {
      return <div>
      <Navbar routes={this.ChangePage} user={this.state.user}/>
        <aside id="ashade-aside">
         <Asidebar user={this.state.user} routes={this.ChangePage}/>
         </aside> 
        {this.state.page}
        
      </div>
    }
  }
const store=createStore(rootReducer)

ReactDOM.render(<Provider store={store}><App/></Provider>,document.getElementById('app'))


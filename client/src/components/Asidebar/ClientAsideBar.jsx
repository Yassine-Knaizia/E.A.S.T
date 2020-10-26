import React from "react"
class ClientAsidebar extends React.Component {
    constructor(props){
        super(props)
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
}if(e.target.id=="PostedJobs"){
    this.props.ChangeRoute("/JobsPosted")
    window.history.pushState({},null,"/offers/PostedJobs")
}if(e.target.id=="Profile"){
    this.props.ChangeRoute("/profile")
    window.history.pushState({},null,"/Account/Profile")
}if(e.target.id=="Logout"){
    this.props.ChangeRoute("/")
    window.history.pushState({},null,"/")
    window.location.reload();
}
    }
    render() {
      return <div>
    <div id="AsideBar">
          <div id="Home" onClick={this.handleclick}>Home</div>
         <br></br>
         <br></br>
          <div>JobOffers</div>
          <br></br>
          <div className="AsideBarAppliedJobs" id="offers" onClick={this.handleclick}>Offers</div>
          <br></br>
          <div className="AsideBarAppliedJobs" id="PostedJobs" onClick={this.handleclick}>Posted-Jobs</div>

         <br></br>
          <div>Account</div>
          <br></br>
          <div className="AsideBarAppliedJobs" id="Profile" onClick={this.handleclick}>Profile</div>
         
         <br></br>
          <div id="About" onClick={this.handleclick}>About</div>
          <br></br>
         <br></br>
          <div id="Logout" onClick={this.handleclick}>Logout</div>
    </div>
      </div>
    }
  }

export default ClientAsidebar

import React from "react"
class VisitorAsidebar extends React.Component {
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
          <div id="offers" onClick={this.handleclick} className="AsideBarAppliedJobs">Offers</div>
         <br></br>
          <div id="About" onClick={this.handleclick}>About</div>
          <br></br>
         <br></br>
          <div id="Login" onClick={this.handleclick}>Login</div>
          <br></br>
         <br></br>
          <div id="Signup" onClick={this.handleclick}>Signup</div>
    </div>
      </div>
    }
  }

export default VisitorAsidebar
visitorNavbar:["home","JobOffers-0","PostedJobs","Account","About","Logout"]
import React from "react"
import VisitorAsidebar from "./Asidebar/VisitorAsideBar.jsx"
import FreeLancerAsidebar from "./Asidebar/FreelancerAsideBar.jsx"
import ClientAsidebar from "./Asidebar/ClientAsideBar.jsx"
class Asidebar extends React.Component {
    constructor(props){
        super(props)
        this.state={
          AsideBar:null
        }
    }
    static getDerivedStateFromProps(props, state){
      if(props.user){
        console.log(props.user)
          if(props.user==='visitor'){
              return {
                  AsideBar:<VisitorAsidebar ChangeRoute={props.routes}/>
              }
          }else if(props.user==="client"){
              return {
                AsideBar:<ClientAsidebar ChangeRoute={props.routes}/>
              }
          }else if(props.user==="freelancer"){
              return {
                  AsideBar:<FreeLancerAsidebar ChangeRoute={props.routes}/>
              }
          }
          
      }return null
  }
    render() {
      return <div>
      {this.state.AsideBar}
      </div>
    }
  }

export default Asidebar
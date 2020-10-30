  
import React from "react";
import Footer from "../footer.jsx";
import axios from "axios";
import { connect } from "react-redux";
class SeeAppliers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
 this.checkprofile=this.checkprofile.bind(this)
  }
  checkprofile(e){
    console.log(e.target.id)
  
    var selectedprofile=null
    this.props.appliers.map((elem)=>{
  if(e.target.id==elem.id){
    selectedprofile=elem
    console.log("Elemmm==>>",elem)
    this.props.selectedprofile(elem)
  }
    })
    setTimeout(() => {
      this.props.ChangePage("/Profile",null,selectedprofile)
      window.history.pushState({},null,"/profile")
    }, 300);
  
  }

  render() {
    return (<div>
        <div className="ashade-col col-4" id='applierstitle'>
							<h2>
								Appliers
							</h2>
						</div>
         <div id="appliersList">    
         {this.props.appliers.map((elem,index)=>{
             return <div id="applierCard">
 <div id="shapeApplier">
         <div id="applierimg"></div>
 </div>
        <a id="appliercardtext" href="#" onClick={this.checkprofile}> <h3 className="applicationcardtitle" id={elem.id}>{elem.FirstName}-{elem.LastName}</h3></a>
 <h3 id="appliercardtext">{elem.Field}</h3>
         <p id="CardContent">{elem.content}</p>
</div>
         })}
             
     </div>
    </div>
     

    );
  }
}
const mapStateToProps = (state, ownProps) => {
    return {
      user:state.user
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
      selectedprofile: (value) => dispatch({
        type: 'selectedprofile',
        value
      }),
      unselect:() => dispatch({
        type: 'unselect',
      })
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(SeeAppliers)
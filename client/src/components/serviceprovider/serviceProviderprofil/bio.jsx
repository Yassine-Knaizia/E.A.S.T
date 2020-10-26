import React from "react";
import ReactDOM from "react-dom";
import {connect} from "react-redux"
class Bio extends React.Component {
  constructor(props) {
    super(props);
   
  }
  componentWillUnmount(){

  }
  render() {
    return (
      
        <section className="ashade-section">
          <div className="ashade-row ashade-row-fullheight exclude-header" style={{position: "relative", top: "80px"}}>
            <div className="ashade-col col-6">
              <h2>
                <span>Client Name</span>
                {this.props.user.FirstName}-{ this.props.user.LastName }
                
              </h2>
              <div className="ashade-col col-8">
							
							<h6>
								<span>Email</span>
								{this.props.user.Email}
							</h6>
              <h6>
								<span>Field</span>
								{this.props.user.Field}
							</h6>
              <h6>
								<span>Address</span>
								{this.props.user.Adresse}
							</h6>
              <h6>
								<span>Gender</span>
								{this.props.user.Gender}
							</h6>
             
              <h6>
								<span>Age</span>
								{this.props.user.Age}
							</h6>
						  <h6>
								<span>City</span>
								{this.props.user.City}
							</h6>
              
							
						
						</div>
              <div className="ashade-contact-form__submit">
										<input type="submit" value="Edit profile"/>
									</div>
              {/* <div className="align-right ashade-signature-wrap">
                <img
                  src="img/general/signature.png"
                  alt="Signature"
                  width="200"
                  height="116"
                />
              </div> */}
            </div>
            
            <div className="ashade-col col-6 align-bottom hide-on-tablet-port hide-on-phone">
              <img id="profileimg"
                src="https://img.pngio.com/client-customer-manager-profile-service-support-user-icon-client-service-png-480_512.png"
                // {this.props.profImage}
                 
                alt="profileImage"
                width="1240"
                height="1500"
              />
            </div>
          </div>
          {/* <!-- .ashade-row --> */}
         
        </section>
      
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  if(!Object.keys(state.selectedprofile).length){
    return {
      user:state.user
    }
  }else{
    return {
      user:state.selectedprofile
    }
  }



  
}

const mapDispatchToProps = (dispatch) => {
  return {
    update: (value) => dispatch({
      type: 'updatedata',
      value
    }),
    selectedprofile: (value) => dispatch({
      type: 'selectedprofile',
      value
    }),
    unselect:(value) => dispatch({
      type: 'unselect',
      value
    })
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Bio)

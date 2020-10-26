import React from "react";
import ReactDOM from "react-dom";
import {connect} from "react-redux"
class Bio extends React.Component {
  constructor(props) {
    super(props);
   this.state={
    selectedFile: "",
    defaultFile : "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    adress: "",
    password : "",
   }
   this.onFileChange = this.onFileChange.bind(this);
   this.handleChange = this.handleChange.bind(this);
  }

  onFileChange(event) {
    this.setState({ selectedFile: URL.createObjectURL(event.target.files[0]) });
};

handleChange(e) {
    var name = e.target.name;
    this.setState({
        [name]: e.target.value,
    });
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

							<div className="modal">
  <input id="modal__trigger" type="checkbox" />
  <label htmlFor="modal__trigger">Edit Profile</label>
  <div className="modal__overlay">
    <br/>
    <br/>
    <br/>
    <br/>
    <div className="modal__wrap" id="editprofilecontent">
      <label htmlFor="modal__trigger">&#10006;</label>
                            <img id="imgedit" src={this.state.selectedFile.length ? this.state.selectedFile : this.state.defaultSrc } />
                        <input className="file" type="file" onChange={this.onFileChange} />
                        <div className="row mt-3" id="inputContainer" onChange={this.handleChange}>
                                    <div className="col-md-12" id="imputsforedit"><input type="text" name="firstName" className="form-control" placeholder="Edit your First Name" />
                                  <input type="text" name="lastName" className="form-control" placeholder="Edit your Last Name" />
                                   <input type="text" name="password" className="form-control" placeholder="Edit your Password" />
                                    <input type="text" name="phoneNumber" className="form-control" placeholder="Edit your Phone Number" />
                                 <input type="text" name="adress" className="form-control" placeholder="Edit your Adress" /></div>
                                </div>
    </div>
  </div>
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
                src=" https://img.pngio.com/client-customer-manager-profile-service-support-user-icon-client-service-png-480_512.png"
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
  return {
    user:state.user
  }
}

export default connect(mapStateToProps)(Bio)
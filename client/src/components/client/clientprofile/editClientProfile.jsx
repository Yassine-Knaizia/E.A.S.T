import React from "react";
import axios from "axios";
import {connect} from "react-redux"
class EditClientProfile extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedFile: "",
            defaultFile : "",
            firstName: "",
            lastName: "",
            phoneNumber: "",
            adress: "",
            password : "",
        };

        this.editClientInformation = this.editClientInformation.bind(this);
        this.onFileChange = this.onFileChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    editClientInformation() {
        const formData = new FormData();
        const file = new Blob([
            this.state.selectedFile,
        ]);
        formData.append(
            "myFile", file
        );
        var data = {
            id:this.props.user.id,
            FirstName: this.state.firstName,
            LastName: this.state.lastName,
            Password: this.state.password,
            PhoneNumber: this.state.phoneNumber,
            Adresse: this.state.adress,
            ImgUrl: this.state.selectedFile,
        }
        axios({
            url: '/api/clients/editProfile',
            method: 'POST',
            data : data
        }).then(data => {
            data = data.data
            console.log(data)
        });
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
            <div className="profileContainer">
                <div className="container rounded bg-white mt-5 mb-5">
                    <div className="row">
                        <div className="col-md-3 border-right">
                            <img id="profilePicture" src={this.state.selectedFile.length ? this.state.selectedFile : this.state.defaultSrc } />
                        </div>
                        <form className="md-form">
                            <div className="file-field">
                                <div className="btn btn-primary btn-sm float-left">
                                    <input className="file" type="file" onChange={this.onFileChange} />
                                </div>
                                <div className="file-path-wrapper">
                                </div>
                            </div>
                        </form>
                        <div className="col-md-5 border-right">
                            <div className="p-3 py-5">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                </div>
                                <div className="row mt-3" id="inputContainer" onChange={this.handleChange}>
                                    <div className="col-md-12"><input type="text" name="firstName" className="form-control" placeholder="Edit your First Name" /></div>
                                    <div className="col-md-12"><input type="text" name="lastName" className="form-control" placeholder="Edit your Last Name" /></div>
                                    <div className="col-md-12"><input type="text" name="password" className="form-control" placeholder="Edit your Password" /></div>
                                    <div className="col-md-12"><input type="text" name="phoneNumber" className="form-control" placeholder="Edit your Phone Number" /></div>
                                    <div className="col-md-12"><input type="text" name="adress" className="form-control" placeholder="Edit your Adress" /></div>
                                </div>
                                <div className="mt-5 text-center"><button className="btn btn-primary profile-button" id="editButton" type="button" onClick={this.editClientInformation} >Edit</button></div>
                            </div>
                        </div>
                        {/* <div>
                            <img className="gif" src="https://media4.giphy.com/media/5wWf7HapUvpOumiXZRK/giphy.gif" />
                        </div> */}
                        <div className="col-md-4">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
      user:state.user
    }
  }
export default connect(mapStateToProps)(EditClientProfile);
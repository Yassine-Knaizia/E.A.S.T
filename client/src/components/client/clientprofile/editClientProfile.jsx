
import React from "react";

class EditClientProfile extends React.Component {
    constructor() {
        super();
        this.editClientInformation = this.editClientInformation.bind(this);
    }

    editClientInformation() {
        console.log('heyy')
        axios({
            url: '/api/clients/editProfile',
            method: 'post',
            data: {
                FirstName: this.state.firstName,
                LastName: this.state.lastName,
                PhoneNumber: this.state.phoneNumber,
                Adresse: this.state.adress
            }
        }).then(data => {
            data = data.data
            console.log(data)
        });
    }

    render() {
        return (
            <div className="profileContainer">
                <div className="container rounded bg-white mt-5 mb-5">
                    <div className="row">
                        <div className="col-md-3 border-right">
                            <img className="profilePicture" src="https://images.unsplash.com/photo-1573935146153-f6322e84d1e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" />
                        </div>
                        <form className="md-form">
                            <div className="file-field">
                                <div className="btn btn-primary btn-sm float-left">
                                    <input className="file" type="file" />
                                </div>
                                <div className="file-path-wrapper">
                                </div>
                            </div>
                        </form>
                        <div className="col-md-5 border-right">
                            <div className="p-3 py-5">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h4 className="text-right" id="profileSetting">Edit Profile</h4>
                                </div>
                                <div className="row mt-3" id="inputContainer">
                                    <div className="col-md-12"><input type="text" className="form-control" placeholder="Edit your First Name" /></div>
                                    <div className="col-md-12"><input type="text" className="form-control" placeholder="Edit your Last Name" /></div>
                                    <div className="col-md-12"><input type="text" className="form-control" placeholder="Edit your Phone Number" /></div>
                                    <div className="col-md-12"><input type="text" className="form-control" placeholder="Edit your Adress" /></div>
                                </div>
                                <div className="mt-5 text-center"><button className="btn btn-primary profile-button" id="editButton" type="button">Edit</button></div>
                            </div>
                        </div>
                        <div>
                            <img className="gif" src="https://media4.giphy.com/media/5wWf7HapUvpOumiXZRK/giphy.gif" />
                        </div>
                        <div className="col-md-4">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditClientProfile;
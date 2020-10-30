import React from "react";

class Bio extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="portfoliocard">
        <div className="coverphoto">
        </div>
        <div className="profile_picture">
          <img src={this.props.imgsrc}/>
        </div>
        <div className="left_col">
          <div className="followers">
            <div className="follow_count">
            1999
            </div>
    Followers
  </div>
          <div className="following">
            <div className="follow_count">
            8
            </div>
    Jobs Posting
  </div>
        </div>
        <div className="right_col">
          <h2 className="name">{this.props.firstName}-{this.props.lastName}</h2>
          <h3 className="location">{this.props.city}</h3>
          <ul className="contact_information">
            <li className="mail">{this.props.email}</li>
            <li className="mail">{this.props.jobDescription}</li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Bio;
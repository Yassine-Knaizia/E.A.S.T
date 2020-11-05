import React from "react";

class JobOffersProf extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="flex-container">
        <figure className="snip1336">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg" alt="sample87" />
          <figcaption>
            <img src={this.props.imgsrc} alt="profile-sample4" className="profile" />
            <h2>{this.props.firstName}-{this.props.lastName}<span>{this.props.adresse}</span></h2>
            <p>{this.props.jobDescription}</p>
            <a href="#" className="follow">Follow</a>
            <a href="#" className="info">More Info</a>
          </figcaption>
        </figure>
      </div>
    );
  }
}
export default JobOffersProf;
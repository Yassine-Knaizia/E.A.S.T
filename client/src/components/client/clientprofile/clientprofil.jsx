import React from "react";
import AboutMe from "./aboutMe.jsx";
import BackToTop from "./backToTop.jsx";
import Bio from "./bio.jsx";
import JobOffersProf from "./jobOffers.jsx";
import { connect } from "react-redux"
import axios from "axios";

class ClientProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      jobs: [],
    };
  };

  componentDidMount() {
    let client_id = this.props.user.id;
    axios.post(`/api/clients/PostedJob/${client_id}`)
      .then(response => {
        this.setState({ jobs: response.data })
        console.log(this.state)
      });
  }

  render() {
    return <div>
      <BackToTop />
      <AboutMe />
      <Bio
        imgsrc={this.props.user.imgsrc}
        firstName={this.props.user.FirstName}
        lastName={this.props.user.LastName}
        city={this.props.user.City}
        email={this.props.user.Email}
      />
      <h1 className="previousOffers">Previous offers posted</h1>
      {this.state.jobs.map((element, key) => {
        return <JobOffersProf
          key={key}
          imgsrc={element.imgUrl}
          firstName={this.state.user.FirstName}
          lastName={this.state.user.LastName}
          adresse={this.state.user.City}
          jobDescription={element.jobDescription}
        />
      })};
          </div>
  };
};
const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};


export default connect(mapStateToProps)(ClientProfile)
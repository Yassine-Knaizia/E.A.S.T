  
import React from "react";
import Footer from "../footer.jsx";
import axios from "axios";
import { connect } from "react-redux";

class PostJob extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultUrl: "../img/services/thmb-nature.png",
      imgUrl: "",
      jobTitle: "",
      fields: "",
      jobDescription: "",
      user: this.props.user,
      budget:""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    console.log(this.state.user);
    e.preventDefault();
    var jobData = {
      client_id: this.state.user.id,
      jobTitle: this.state.jobTitle,
      fields: this.state.fields,
      imgUrl: this.state.imgUrl,
      jobDescription: this.state.jobDescription,
      budget:this.state.budget
    };
    axios
      .post("/api/clients/postJob", jobData)
      .then((data) => {
        console.log(data);
        this.setState({
          jobTitle: "",
          fields: "",
          imgUrl: "../img/services/thmb-nature.png",
          jobDescription: "",
          
        }); 
        this.props.ChangePage("/Market")
        window.history.pushState({},null,"/Market")
      })
      .catch((e) => {
        console.error(e);
      });
  }
  handleChange(e) {
    var name = e.target.name;
    this.setState({
      [name]: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <div className="ashade-home-background ashade-page-background is-video">
          <video
            src="video/home-bg.mp4"
            poster="img/bgs/bg-home01.png"
            muted
            autoPlay
            loop
          ></video>
        </div>

        <div className="ashade-page-title-wrap">
          <h1 className="ashade-page-title">
            <span>We Make It EasY fOR You</span>
            Post A Job
          </h1>
        </div>

        <form
          method="post"
          className="PostJobForm"
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        >
          <div className="ashade-service-card__head">
            <div className="imgpostjob">
              <img
                src={
                  this.state.imgUrl.length
                    ? this.state.imgUrl
                    : this.state.defaultUrl
                }
              />
            </div>
          </div>
          <div className="ashade-row ashade-small-gap">
            <div className="ashade-col col-4">
              <input
                type="text"
                id="name"
                name="jobTitle"
                placeholder="Job Title"
                required
              />
            </div>
            <div className="ashade-col col-4">
              <select name="fields" id="selectFiled">
                <option hidden name="choose" value="select Field">
                  Select your Field
                </option>

                <option name="Design" value="Design">
                  Design
                </option>
                <option name="Photography" value="Photography">
                  Photography
                </option>
                <option name="Audio" value="Audio">
                  Audio
                </option>
                <option name="Djing" value="Djing">
                  Djing
                </option>
                <option name="Music" value="Music">
                  Music
                </option>
              </select>
            </div>
            <div className="ashade-col col-4">
              <input
                type="text"
                id="ImgAddress"
                name="imgUrl"
                placeholder="Image Address"
                required
              />
            </div>
            <div className="ashade-col col-4">
              <input
                type="number"
                id="budget"
                name="budget"
                placeholder="budget"
                required
              />
            </div>
          </div>
          <textarea
            name="message"
            id="message"
            name="jobDescription"
            placeholder="Job Description"
            required
          ></textarea>
          <div className="ashade-contact-form__footer">
            <div className="ashade-contact-form__response"></div>
            <div className="ashade-contact-form__submit">
              <input type="submit" value="Post Job Offer" />
            </div>
          </div>
          <Footer />
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    user:state.user
  }
}

export default connect(mapStateToProps)(PostJob);
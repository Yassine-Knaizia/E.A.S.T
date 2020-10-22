import React from "react"
import { connect } from "react-redux"
import Footer from "./footer.jsx"

class JobDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user : this.props.user,
        }
    }

    render() {
        console.log(this.state)
        return <div id="detailblock">
            <div className="ashade-service-card__head">
                <div id="detailjobimg">
                    <img src={this.props.imgUrl} />
                </div>
            </div>
            <cite id="detailcite"><a>{this.props.clientName}</a></cite>
            <div className="ashade-page-title-wrap">
                <h1 className="ashade-page-title">
                    <span>don't miss this opportunity</span>
            it came once
        </h1>
            </div>
            <div className="ashade-col col-4" id="DetailJobTitle">
                <h2>
                    <span>{this.props.jobField}</span>
                    {this.props.jobTitle}
                </h2>
            </div>
            <section className="ashade-section" id="DetailJobdescription">
                <div className="ashade-row">
                    <div className="ashade-col col-4">
                    </div>
                    <div className="ashade-col col-8">
                        <p className="is-dropcap">
                            {this.props.jobDescription}
                        </p>
                    </div>
                </div>
            </section>
            <div className="ashade-contact-form__submit" id="detailsubmitbtn">
                <div className="modal">
                    <input id="modal__trigger" type="checkbox" />
                    <label htmlFor="modal__trigger">Apply Now</label>
                    <div className="modal__overlay">
                        <div className="modal__wrap">
                            <label htmlFor="modal__trigger">&#10006;</label>
                            <h2>Application</h2>
                            <div >Convince me</div>
                            <textarea name="" id="" cols="30" rows="10" id="detailtextarea"></textarea>
                            <button id='modalbutton'>Apply</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
      user:state.user
    }
  }

export default connect(mapStateToProps)(JobDetails)
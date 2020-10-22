import React from "react"
import Footer from "../footer.jsx"
import BackToTop from "./clientprofile/backToTop.jsx"
import PostedJob from "./jobposted.jsx"
import axios from "axios"


class PostedJobs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      view : "PostedJob"
    }
  }

  componentDidMount() {
    axios({
      url: 'api/Clients/postedJobs',
      method: 'Get',
    }).then(data => {
      this.setState({
        jobs: data.data
      });
    }).catch(error => {
      console.log(error)
    });
  }

  // changeView(view) {
  //   this.setState({
  //     view: view
  //   });
  // }

  render() {
    return <div>
      <div className="ashade-page-title-wrap">
        <h1 className="ashade-page-title">
          <span>Check Your posts</span>
                Posted Jobs
            </h1>
      </div>
      {/* <!-- .Service Description --> */}
      <main className="ashade-content-wrap" id="paddingtop">
        <div className="ashade-content-scroll">
          <div className="ashade-content">
            <section className="ashade-section">
              <div className="ashade-row">
                <div className="ashade-col col-12">
                  <p className="ashade-intro">I offer my clients a wide range of services in various directions. Someone thinks that a professional photographer should be focused on one type of photography, but for my practice I have gained enough experience to feel confident in several different directions.</p>
                </div>
              </div>
              {/* <!-- .Card Group --> */}
            </section>
            <section className="ashade-section">
              <div className="ashade-row">
                <div className="ashade-col col-12">
                  <div className="ashade-service-card-grid">
                    {/* <!-- Service Card --> */}
                    {this.state.jobs.map((element, key) => {
                      return (
                        <PostedJob
                          key={key}
                          jobImageUrl={element.imgUrl}
                          jobField={element.fields}
                          jobTitle={element.jobTitle}
                          jobDescription={element.jobDescription}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      {/* <!-- Back Top --> */}
      <BackToTop />
      {/* <!-- Footer --> */}
      <Footer />
    </div>
  }
}

export default PostedJobs


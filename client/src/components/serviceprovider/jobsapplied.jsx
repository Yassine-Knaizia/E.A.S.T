import React from "react"
import Footer from "../footer.jsx"
class Jobsapplied extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
      return <div>
       <div className="ashade-page-title-wrap">
        <h1 className="ashade-page-title">
            <span>What I'm offering</span>
            My Services
        </h1>
    </div>
        <main className="ashade-content-wrap" id="paddingtop">
        <div className="ashade-content-scroll">
          <div className="ashade-content">
            <section className="ashade-section">
              <div className="ashade-row">
                <div className="ashade-col col-12">
                  <p className="ashade-intro">I offer my clients a wide range of services in various directions. Someone thinks that a professional photographer should be focused on one type of photography, but for my practice I have gained enough experience to feel confident in several different directions.</p>
                </div>
                        </div>
                        {/* <!-- .ashade-row --> */}
            </section>
            
            <section className="ashade-section">
              <div className="ashade-row">
                            <div className="ashade-col col-12">
                  <div className="ashade-service-card-grid">
                                          {/* <!-- .ashade-service-card --> */}
                                    <div className="ashade-service-card">
                      <div className="ashade-service-card__head">
                        <div className="ashade-service-card__image">
                          <img src="img/services/thmb-nature.png" />
                        </div>
                        <div className="ashade-service-card__label">
                          <h4>
                            <span>Photos of wild nature</span>
                            Service Title
                          </h4>
                        </div>
                                        </div>
                                        {/* <!-- .ashade-service-card__head --> */}
                      <div className="ashade-service-card__content">
                        <p>Job description Here</p>
                        <div className="align-right">
                          <a href="gallery-masonry-4columns.html" className="ashade-learn-more">Read More</a>
                        </div>
                      </div>
                    </div>
                                </div>
                            </div>         
                        </div>                    
            </section>
                 {/* <!-- Footer --> */}
          <Footer/>
            </div>
           </div>
        </main>
        
        <div className="ashade-to-top-wrap ashade-back-wrap">
            <div className="ashade-back is-to-top">
                <span>Back to</span>
                <span>Top</span>
            </div>
        </div>      
          </div>
    }
  }

export default Jobsapplied
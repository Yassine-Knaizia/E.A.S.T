import React from "react";
import AboutMe from "./aboutMe.jsx";
import BackToTop from "./backToTop.jsx";
import Bio from "./bio.jsx";
import JobOffersProf from "./jobOffers.jsx";
import ProfileStats from "./profIStats.jsx";
class ClientProfile extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
      return   <div>
      <BackToTop />
      <AboutMe />
      <main className="ashade-content-wrap">
        <div className="ashade-content-scroll">
          <div className="ashade-content">
            <Bio />
            <ProfileStats />
            <JobOffersProf />
          </div>
        </div>
      </main>
    </div>
    }
  }

export default ClientProfile
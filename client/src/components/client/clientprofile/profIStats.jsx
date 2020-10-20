import React from "react";
class ProfileStats extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <section className="ashade-section">
        <div className="ashade-row ashade-keep-on-tablet">
          <div className="ashade-col col-3">
            <div className="ashade-counter-item" data-delay="3000">
              <span className="ashade-counter-label">Awards Won</span>
              <span className="ashade-counter-value">25</span>
            </div>
          </div>
          {/* <!-- .ashade-col --> */}
          <div className="ashade-col col-3">
            <div className="ashade-counter-item" data-delay="3000">
              <span className="ashade-counter-label">Projects Done</span>
              <span className="ashade-counter-value">67</span>
            </div>
          </div>
          {/* <!-- .ashade-col --> */}
          <div className="ashade-col col-3">
            <div className="ashade-counter-item" data-delay="3000">
              <span className="ashade-counter-label">Happy Clients</span>
              <span className="ashade-counter-value">211</span>
            </div>
          </div>
          {/* <!-- .ashade-col --> */}
          <div className="ashade-col col-3">
            <div className="ashade-counter-item" data-delay="2000">
              <span className="ashade-counter-label">Greatest Shots</span>
              <span className="ashade-counter-value">5896</span>
            </div>
          </div>
          {/* <!-- .ashade-col --> */}
        </div>
        {/* <!-- .ashade-row --> */}
      </section>
    );
  }
}
export default ProfileStats;
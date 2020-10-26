import React from "react";
import axios from "axios";
class ProfileStats extends React.Component {
  constructor() {
    super();
    this.state = {
      Clients: []
    }
  }

  componentDidMount () {
    axios.get
  }
  render() {
    return (
      <section className="ashade-section">
        <div className="ashade-row ashade-keep-on-tablet">
          <div className="ashade-col col-3">
            <div className="ashade-counter-item" data-delay="3000">
              <span className="ashade-counter-label">jobs Posted</span>
              <span className="ashade-counter-value">25</span>
            </div>
          </div>
          
          
        </div>
        
      </section>
    );
  }
}
export default ProfileStats;
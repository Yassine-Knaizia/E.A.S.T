import React from "react";
class ProfileInfo extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
        <section className="ashade-section">
      <div className="ashade-row">
        <div className="ashade-col col-12 align-center">
          <h3>
            <span>According to Successfully Projects</span>
            My Skills Level
          </h3>
          <div className="ashade-row ashade-keep-on-tablet">
            <div className="ashade-col col-3">
              <div
                className="ashade-progress-item"
                data-delay="3000"
                data-percent="92"
              >
                <span className="ashade-progress-label">Personal Sessions {this.props.skill1}</span>
              </div>
            </div>
            <div className="ashade-col col-3">
              <div
                className="ashade-progress-item"
                data-delay="3000"
                data-percent="78"
              >
                <span className="ashade-progress-label">Love Stories{this.props.skill2}</span>
              </div>
            </div>
            <div className="ashade-col col-3">
              <div
                className="ashade-progress-item"
                data-delay="3000"
                data-percent="65"
              >
                <span className="ashade-progress-label">Weddings and Events{this.props.skill3}</span>
              </div>
            </div>
            <div className="ashade-col col-3">
              <div
                className="ashade-progress-item"
                data-delay="3000"
                data-percent="87"
              >
                <span className="ashade-progress-label">
                  Commercial Photography{this.props.skill4}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
  }
}
export default ProfileInfo;
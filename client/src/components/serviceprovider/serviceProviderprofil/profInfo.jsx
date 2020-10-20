import React from "react";
class ProfileInfo extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
        <section class="ashade-section">
      <div class="ashade-row">
        <div class="ashade-col col-12 align-center">
          <h3>
            <span>According to Successfully Projects</span>
            My Skills Level
          </h3>
          <div class="ashade-row ashade-keep-on-tablet">
            <div class="ashade-col col-3">
              <div
                class="ashade-progress-item"
                data-delay="3000"
                data-percent="92"
              >
                <span class="ashade-progress-label">Personal Sessions{this.props.skill1}</span>
              </div>
            </div>
            <div class="ashade-col col-3">
              <div
                class="ashade-progress-item"
                data-delay="3000"
                data-percent="78"
              >
                <span class="ashade-progress-label">Love Stories{this.props.skill2}</span>
              </div>
            </div>
            <div class="ashade-col col-3">
              <div
                class="ashade-progress-item"
                data-delay="3000"
                data-percent="65"
              >
                <span class="ashade-progress-label">Weddings and Events{this.props.skill3}</span>
              </div>
            </div>
            <div class="ashade-col col-3">
              <div
                class="ashade-progress-item"
                data-delay="3000"
                data-percent="87"
              >
                <span class="ashade-progress-label">
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
import React from "react";
class Studio extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <section class="ashade-section">
        <div class="ashade-row">
          <div class="ashade-col col-12 align-center">
            <h3>
              <span>Where magic is happening</span>
              My Work
            </h3>
            <p class="ashade-intro">
              {" "}
              This is the place, where I can work with lights and shadows to
              create something brilliant. I'm talking about my photo studio that
              is located at 1250 Welton St, Denver. Here we can discuss and
              create your photo portfolio in comfortable and professional
              atmosphere.{this.props.studioDescription}
            </p>
          </div>
          {/* <!-- .ashade-col --> */}
        </div>
        {/* <!-- .ashade-row --> */}
        <div class="ashade-row">
          <div class="ashade-col col-12">
            <div
              class="ashade-before-after"
              data-img-before="https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png"
              data-img-after="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg"
            >
              <img
                src="img/general/before.png"
                alt="Photo Processing"
                width="1920"
                height="1280"
              />
            </div>
            
            
            {/* <!-- .ashade-before-after --> */}
          </div>
          {/* <!-- .ashade-col --> */}
        </div>
        {/* <!-- .ashade-row --> */}
      </section>
    );
  }
}
export default Studio;
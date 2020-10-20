import React from "react";
class Feedbacks extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <section className="ashade-section">
        <div className="ashade-row">
          <div className="ashade-col col-12 align-center">
            <h3>
              <span>What My Clients Say About Me</span>
              Feedbacks
            </h3>
            <div className="ashade-row">
              <div className="ashade-col col-2"></div>
              <div className="ashade-col col-8">
                <div className="ashade-testimonials-carousel">
                    <div className="ashade-testimonials-item align-center swiper-slide">
                      <div className="ashade-testimonials-item__content">
                        <p>
                          I'm not a professional model, but i like good photos,
                          i like to look pretty on my instagram channel and also
                          i like to earn some money on stock photos. Andrew
                          helps me in all of this and much more. Fantastic
                          professional. Lot of thanks!{this.props.feedbacks}
                        </p>
                      </div>
                      <div className="ashade-testimonials-item__author">
                        <div className="ashade-testimonials-item__author--image">
                          <img
                            src={this.props.profileImage}
                            alt={this.props.username}
                          />
                        </div>
                        <div className="ashade-testimonials-item__author--name">
                          <h6>
                            <span>Instagram Model{this.props.job}</span>
                            Elizabeth Shown{this.props.username}
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="ashade-testimonials-item align-center swiper-slide">
                      <div className="ashade-testimonials-item__content">
                        <p>
                          I am a web developer. And, as known, good clipart is a
                          half of successful web design. Today is not so easy to
                          find realy good photos for website. And one day I have
                          ordered a clipart for my new project and his works are
                          fit just amazing!
                        </p>
                      </div>
                      <div className="ashade-testimonials-item__author">
                        <div className="ashade-testimonials-item__author--image">
                          <img
                            src="img/avatars/testimonial02.png"
                            alt="Tony Norton"
                          />
                        </div>
                        <div className="ashade-testimonials-item__author--name">
                          <h6>
                            <span>Web Designer</span>
                            Tony Norton
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="ashade-testimonials-item align-center swiper-slide">
                      <div className="ashade-testimonials-item__content">
                        <p>
                          Andrew was our wedding photographer. He was help us to
                          save our brightest moment of life in fantastic photos!
                          And it looks brilliant. He managed to clearly convey
                          all the emotions of the event in his photos. Thank
                          you, Andrew!
                        </p>
                      </div>
                      <div className="ashade-testimonials-item__author">
                        <div className="ashade-testimonials-item__author--image">
                          <img
                            src="img/avatars/testimonial03.png"
                            alt="Traci Harden"
                          />
                        </div>
                        <div className="ashade-testimonials-item__author--name">
                          <h6>
                            <span>Happy Wife</span>
                            Traci Harden
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="ashade-testimonials-item align-center swiper-slide">
                      <div className="ashade-testimonials-item__content">
                        <p>
                          I am a beginner model. Since childhood I dreamed of
                          becoming a photo model. Andrew helped me make a
                          gorgeous portfolio photo and now I receive many offers
                          from well-known agencies. I am very grateful to Andrew
                          for his work.
                        </p>
                      </div>
                      <div className="ashade-testimonials-item__author">
                        <div className="ashade-testimonials-item__author--image">
                          <img
                            src="img/avatars/testimonial04.png"
                            alt="Nelle Niles"
                          />
                        </div>
                        <div className="ashade-testimonials-item__author--name">
                          <h6>
                            <span>Beginner Model</span>
                            Nelle Niles
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="ashade-testimonials-item align-center swiper-slide">
                      <div className="ashade-testimonials-item__content">
                        <p>
                          Andrew work for our agency When I only became to be a
                          model. He is my first experience and my first
                          professional photographer. That was a long time ago
                          and now I sometimes appeal to Andrew for private photo
                          shoots.
                        </p>
                      </div>
                      <div className="ashade-testimonials-item__author">
                        <div className="ashade-testimonials-item__author--image">
                          <img
                            src="img/avatars/testimonial05.png"
                            alt="Betty Janson"
                          />
                        </div>
                        <div className="ashade-testimonials-item__author--name">
                          <h6>
                            <span>Agency Manager</span>
                            Betty Janson
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ashade-testimonials-nav"></div>
                </div>
              </div>
              <div className="ashade-col col-2"></div>
            </div>
          </div>
       
      </section>
    );
  }
}
export default Feedbacks;
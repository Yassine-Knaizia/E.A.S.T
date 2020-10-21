import React from "react"

class PostedJob extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="ashade-service-card">
        <div className="ashade-service-card__head">
          <div className="ashade-service-card__image">
            <img src={this.props.jobImageUrl} />
          </div>
          <div className="ashade-service-card__label">
            <h4>
              <span>{this.props.jobField}</span>
              {this.props.jobTitle}
            </h4>
          </div>
        </div>
        {/* <!-- .ashade-service-card__head --> */}
        <div className="ashade-service-card__content">
          <p>{this.props.jobDescription}</p>
          <div className="align-right">
            <a href="gallery-masonry-4columns.html" className="ashade-learn-more">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default PostedJob

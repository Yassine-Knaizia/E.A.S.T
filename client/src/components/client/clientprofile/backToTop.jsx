import React from "react";
import ReactDOM from "react-dom";
class BackToTop extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
   
        <div className="ashade-to-top-wrap ashade-back-wrap">
          <div className="ashade-back is-to-top">
            <span>Back to</span>
            <span>Top</span>
          </div>
        </div>
  
    );
  }
}
export default BackToTop;
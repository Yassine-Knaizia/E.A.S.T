import React from "react";
class JobOffersProf extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="ashade-section">
        <div className="ashade-row">
          <div className="ashade-col col-12 align-center">
            <section className="ashade-section">       		
					<div className="ashade-row">
						<div className="ashade-col col-4">
						
						</div>
						<div className="ashade-col col-8">
							
							<h4>
								<span>Posts</span>
								{this.props.posts}
							</h4>
						
						</div>
					</div>
				</section>
              </div>
              
            
          </div>
       
      </section>
    );
  }
}
export default JobOffersProf;
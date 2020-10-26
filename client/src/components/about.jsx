import React from "react"
class About extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
      return (
        <div>
          {/* <div className="ashade-page-title-wrap">
        <h1 className="ashade-page-title">
            <span>Who we are?</span>
            About US
        </h1>
    </div> */}

    <main className="ashade-content-wrap">
      
		<div className="ashade-content-scroll">
       
			<div className="ashade-content">
			
				<section className="ashade-section">
					<div className="ashade-row ashade-row-fullheight exclude-header">
						<div className="ashade-col col-6">
							<h2>
								<span>About Platform</span>
								E.A.S.T
							</h2>
							<p>Discription of the plateform</p>
							<p>Other discrip</p>
						
						</div>
						<div className="ashade-col col-6 align-bottom hide-on-tablet-port hide-on-phone">
							<img src="img/general/covid-19-symptome.jpg" alt="Andrew Shade" width="1240" height="1500"/>
						</div>
					</div>
				</section>

				<section className="ashade-section">
					<div className="ashade-row ashade-keep-on-tablet">
						<div className="ashade-col col-3">
							<div className="ashade-counter-item" data-delay="3000">
								<span className="ashade-counter-label">FreeLancers-signed-in</span>
								<span className="ashade-counter-value">25</span>
							</div>
						</div>
						<div className="ashade-col col-3">
							<div className="ashade-counter-item" data-delay="3000">
								<span className="ashade-counter-label">Clients-Signed-in</span>
								<span className="ashade-counter-value">67</span>
							</div>
						</div>
						<div className="ashade-col col-3">
							<div className="ashade-counter-item" data-delay="3000">
								<span className="ashade-counter-label">Visitors</span>
								<span className="ashade-counter-value">211</span>
							</div>
						</div>
						<div className="ashade-col col-3">
							<div className="ashade-counter-item" data-delay="2000">
								<span className="ashade-counter-label">Jobs-Posted</span>
								<span className="ashade-counter-value">5896</span>
							</div>
						</div>
					</div>
				</section> 

				<section className="ashade-section">
					<div className="ashade-row">
                     <div className="ashade-col col-12 align-center">
                   	<h3>
                 		<span>Where magic is happening</span>
               		Development team
                	</h3>
                <p className="ashade-intro">The development team .....</p>
            </div>
                    </div>
					<div className="ashade-row">
                        <div className="ashade-col col-12">
                            <div className="ashade-grid ashade-grid-4cols">
								<div className="ashade-grid-item">
									<a href="img/general/ala.png"  data-size="1160x920">
										<img src="img/general/ala.png"   alt="My Studio" width="1160" height="920"/>
									</a>
								</div>
								<div className="ashade-grid-item">
									<a href="img/general/malek.png"  data-size="1160x920">
										<img src="img/general/malek.png"   alt="My Studio" width="1160" height="920"/>
									</a>
								</div>
								<div className="ashade-grid-item">
									<a href="img/general/yassin.png"  data-size="1160x920">
										<img src="img/general/yassin.png"   alt="My Studio" width="1160" height="920"/>
									</a>
								</div>
								<div className="ashade-grid-item">
									<a href="img/general/firas.png" data-size="1160x920">
										<img src="img/general/firas.png"   alt="My Studio" width="1160" height="920"/>
									</a>
								</div>
                            </div>
                        </div>
                    </div>
				</section>


				<section className="ashade-section">
					<div className="ashade-row">
                        <div className="ashade-col col-12 align-center">
                        	<h3>
                        		<span>How do it work</span>
                        		how ?
                        	</h3>
                            <p className="ashade-intro">other explanation</p>
                        </div>
                    </div>
					<div className="ashade-row">
                        <div className="ashade-col col-12">
                        
                        </div>
                    </div>
				</section>
				<section className="ashade-section">
					<div className="ashade-row">
                        <div className="ashade-col col-12 align-center">
                        	<h3>
                        		<span>2020 Product</span>
                        		E.A.S.T
                        	</h3>
							
                        </div>
                    </div>
				</section>
			</div>
		</div>
	</main> 
    
    <div className="ashade-to-top-wrap ashade-back-wrap">
        <div className="ashade-back is-to-top">
            <span>Back to</span>
            <span>Top</span>
        </div>
    </div>

    <div className="ashade-menu-overlay"></div>
    <div className="ashade-aside-overlay"></div>
    <div className="ashade-cursor is-inactive">
    	<span className="ashade-cursor-circle"></span>
    	<span className="ashade-cursor-slider"></span>
    	<span className="ashade-cursor-close ashade-cursor-label">Close</span>
    	<span className="ashade-cursor-zoom ashade-cursor-label">Zoom</span>
    </div> 

        </div>
      )
        
      
    }
  }

export default About
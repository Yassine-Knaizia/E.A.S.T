import React from "react"
class Footer extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
      return <div>
          <footer id="ashade-footer">
				<div className="ashade-footer-inner">
					<div className="ashade-footer__socials">
						<ul className="ashade-socials">
							<li><a href="#">Fb</a></li>
							<li><a href="#">Tw</a></li>
							<li><a href="#">In</a></li>
							<li><a href="#">Yt</a></li>
						</ul>
					</div>
					<div className="ashade-footer__copyright">
						Copyright &copy; 2020. All Rights Reserved.
					</div>
				</div>
			</footer>
      </div>
    }
  }

export default Footer
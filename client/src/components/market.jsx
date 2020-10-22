import React from "react"
import Footer from "./footer.jsx"

class Card extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
    <div class="card__title card__title--3">
                <i class="fas fa-rocket" aria-hidden="true"></i>
                <h4 class="card__heading">Pro</h4>
            </div>
            <div class="card__details">
                <ul>
                  <li>Includes Plus Plan Features</li>
                  <li>High Performance</li>
                  <li>2 Spam Experts</li>
                  <li>Free SSL Certificate</li>
                  <li>Domain Privacy</li>
                  <li>Site Backup - CodeGuard Basic</li>
                </ul>
              </div>
            </div>    
        )
    }
}

class Market extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div>
            <div className="ashade-page-title-wrap">
                <h1 className="ashade-page-title">
                    <span>What We are offering</span>
            Job Market
        </h1>
            </div>
            <section className="ashade-section">
                <div className="ashade-row">
                    <div className="ashade-col col-12">
                        <p className="ashade-intro">I offer my clients a wide range of services in various directions. Someone thinks that a professional photographer should be focused on one type of photography, but for my practice I have gained enough experience to feel confident in several different directions.</p>
                    </div>
                </div>
                {/* <!-- .Card Group --> */}
            </section>
            <div>
                <ul class="shop">
                    <li class="elements"><a>Photography</a></li>
                    <li class="elements"><a>Audio Visual</a></li>
                </ul>
            </div>
            {/* <!-- Footer --> */}
            {/* <Footer /> */}
            <Card />
        </div>;
    }
}


export default Market
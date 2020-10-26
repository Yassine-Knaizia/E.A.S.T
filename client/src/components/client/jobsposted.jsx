import React from "react"
import Footer from "../footer.jsx"
import {connect} from "react-redux"
import axios from "axios"
class JobsPosted extends React.Component {
    constructor(props){
        super(props)
        this.state={
          postedJobs:[]
        }
        this.ReadMore=this.ReadMore.bind(this)
    }
  ReadMore(e){
    var jobdetail=null
    for(var i=0;i<this.state.postedJobs.length;i++){
        if(this.state.postedJobs[i].id==e.target.id){
            jobdetail=this.state.postedJobs[i]
        }
    }
    this.props.ChangePage("/JobDetails",jobdetail)
    window.history.pushState({},null,"/PostedJobs/JobDetails")
  }
    

componentDidMount(){
  
  axios({
    url: '/api/clients/PostedJob',
    method: 'post',
    data:{userid:this.props.user.id}
  }).then(data=>{
    console.log(data.data)
    this.setState({postedJobs:data.data})
  })
}
    render() {
      return <div>
      {/* <div className="ashade-page-title-wrap">
            <h1 className="ashade-page-title">
                <span>Check Your posts</span>
                Posted Jobs
            </h1>
        </div> */}
    
        <main className="ashade-content-wrap" id="paddingtop">
        <div className="ashade-content-scroll">
          <div className="ashade-content">
            <section className="ashade-section">
              <div className="ashade-row">
                <div className="ashade-col col-12">
                  <p className="ashade-intro">I offer my clients a wide range of services in various directions. Someone thinks that a professional photographer should be focused on one type of photography, but for my practice I have gained enough experience to feel confident in several different directions.</p>
                </div>
                        </div>
                        {/* <!-- .ashade-row --> */}
            </section>
            
            <section className="ashade-section">
              <div className="ashade-row">
                            <div className="ashade-col col-12">
                  <div className="ashade-service-card-grid">
                                          {/* <!-- .ashade-service-card --> */}
                                  {this.state.postedJobs.map((elem,index)=>{
                                    return   <div className="ashade-service-card" key={index}>
                                    <div className="ashade-service-card__head">
                                      <div className="ashade-service-card__image">
                                        <img src={elem.imgUrl}/>
                                      </div>
                                      <div className="ashade-service-card__label">
                                        <h4>
                                  <span>{elem.fields}</span>
                                          {elem.jobTitle}
                                        </h4>
                                      </div>
                                                      </div>
                                                      {/* <!-- .ashade-service-card__head --> */}
                                    <div className="ashade-service-card__content">
                                      <p>Budget :{elem.budget}TND</p>
                                      <div className="align-right">
                                        <a href="#" className="ashade-learn-more" id={elem.id} onClick={this.ReadMore}>Read More</a>
                                      </div>
                                    </div>
                                  </div>
                                  })}
                                </div>
                            </div>         
                        </div>                    
            </section>
                 {/* <!-- Footer --> */}
          <Footer/>
            </div>
           </div>
        </main>
        
        <div className="ashade-to-top-wrap ashade-back-wrap">
            <div className="ashade-back is-to-top">
                <span>Back to</span>
                <span>Top</span>
            </div>
        </div>      
          </div>
    }
  }
  const mapStateToProps = (state, ownProps) => {
    return {
      user:state.user
    }
  }
export default connect(mapStateToProps)(JobsPosted)
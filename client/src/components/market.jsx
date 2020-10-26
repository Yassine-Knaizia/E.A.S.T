import React from "react"
import Footer from "./footer.jsx"
import axios from "axios"
class Market extends React.Component {
    constructor(props){
        super(props)
        this.state={
            jobs:[],
            alljobs:[],
            field:'all'
        }
        this.readmore=this.readmore.bind(this)
        this.changeField=this.changeField.bind(this)
    }
 changeField(e){
  var filter=[]
  var field=e.target.value
  if(e.target.value=="all"){
    setTimeout(() => {
      this.setState({field:field,jobs:this.state.alljobs})
    }, 100);
  }else{
    var filter = this.state.alljobs.filter((elem)=>{
      return  elem.fields==e.target.value
      })
      setTimeout(() => {
  this.setState({field:field,jobs:filter})
}, 100);
  }

    }
    readmore(e){
        var jobdetail=null
        for(var i=0;i<this.state.jobs.length;i++){
            if(this.state.jobs[i].id==e.target.id){
                jobdetail=this.state.jobs[i]
            }
        }
this.props.ChangePage("/JobDetails",jobdetail)
window.history.pushState({},null,"/Offers/JobDetails")
    }

    componentDidMount() {
        axios({
          url: '/api/offers',
          method: 'get',
        }).then(data => {
          this.setState({
            jobs: data.data,
            alljobs:data.data
          });
        }).catch(error => {
          console.log(error)
        });
      }
    render() {
      return <div>
    {/* <div className="ashade-page-title-wrap">
        <h1 className="ashade-page-title">
            <span>What We are offering</span>
            Job Market
        </h1>
    </div> */}
<div className="ashade-home-background ashade-page-background is-video">
        <video src="video/home-bg.mp4" poster="img/bgs/bg-home01.png" muted autoPlay loop></video>
      </div>
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
				<div className="ashade-col col-4">
              <select name="fields" id="selectFiled" className="filteroffer" onChange={this.changeField}>
                <option hidden name="choose" value="select Field">
                  Select a Field
                </option>
                <option  name="all" value="all">
                  all
                </option>
                <option name="Design" value="Design">
                  Design
                </option>
                <option name="Photography" value="Photography">
                  Photography
                </option>
                <option name="Audio" value="Audio">
                  Audio
                </option>
                <option name="Djing" value="Djing">
                  Djing
                </option>
              </select>
            </div>
				<section className="ashade-section">
					<div className="ashade-row">
                        <div className="ashade-col col-12">
							<div className="ashade-service-card-grid">
								{/* <!-- .ashade-service-card --> */}
                             {this.state.jobs.map((elem,index)=>{
                                 console.log(this.state.field=='all')
                               if(this.state.field=='all'){
                               
                                return <div className="ashade-service-card" key={index}>
                                <div className="ashade-service-card__head">
                                    <div className="ashade-service-card__image">
                                        <img src={elem.imgUrl} id="fixmarketimg"/>
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
                                    <p>Budget :{elem.budget}</p>
                                    <div className="align-right">
                                        <a href="#" id={elem.id} onClick={this.readmore}>Read More</a>
                                    </div>
                                </div>
                                </div>
                               }else { if(elem.fields==this.state.field){
                                return <div className="ashade-service-card" key={index}>
                                <div className="ashade-service-card__head">
                                    <div className="ashade-service-card__image">
                                        <img src={elem.imgUrl} id="fixmarketimg"/>
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
                                    <p>Budget :{elem.budget}</p>
                                    <div className="align-right">
                                        <a href="#" id={elem.id} onClick={this.readmore}>Read More</a>
                                    </div>
                                </div>
                                </div>
                               }
                                 
                               }
                                 
                             })}
                                
                                	
                            </div>
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
      		
			{/* <!-- Footer --> */}
			<Footer/>
      </div>;
    }
  }

export default Market

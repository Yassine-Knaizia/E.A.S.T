import React from "react"
import Footer from "./footer.jsx"
import axios from "axios"
import {connect} from "react-redux"
class JobDetails extends React.Component {
    constructor(props){
        super(props)
        this.state={
         PosterData:{},
         apllication:false,
         applicationtext:"",
         Appliers:false,
         FreelancersApplied:[]
        }
        this.getposter=this.getposter.bind(this)
        this.apply=this.apply.bind(this)
        this.retriveAppliers=this.retriveAppliers.bind(this)
        this.checkprofile=this.checkprofile.bind(this)
    }

checkprofile(e){
  console.log(e.target.id)

  var selectedprofile=null
  this.state.FreelancersApplied.map((elem)=>{
if(e.target.id==elem.id){
  selectedprofile=elem
  console.log("Elemmm==>>",elem)
  this.props.selectedprofile(elem)
}
  })
  setTimeout(() => {
    this.props.ChangePage("/Profile",this.props.jobDetails,selectedprofile)
    window.history.pushState({},null,"/profile")
  }, 300);

}

  retriveAppliers(){
   
axios({
        url: '/api/Clients/appliers',
        method: 'post',
        data:{postid:this.props.jobDetails.id}
      }).then(data=>{
        if(data.data){
          // this.setState({FreelancersApplied:data.data})
          console.log(data.data)
          this.props.ChangePage("/SeeAppliers",data.data)
          window.history.pushState({},null,"PostedJobs/JobDetails/Appliers")
        }
      })
  }

    apply(){
      axios({
        url: '/api/freeLancers/Jobdetail/application',
        method: 'post',
        data:{postid:this.props.jobDetails.id,text:this.state.applicationtext,freelancer:this.props.user.id}
      }).then(data=>{
       
      })
    }
    getposter(prop){
      axios({
        url: '/api/clients/name',
        method: 'post',
        data:{userid:prop.jobDetails.client_id}
      }).then(data=>{
        console.log(data.data)
        this.setState({PosterData:data.data})
      })
    }

    componentDidMount(){
      var pathname = window.location.pathname;
      this.getposter(this.props)
   if(this.props.user.type=="freelancer"){
this.setState({apllication:true})
   }if(pathname=="/PostedJobs/JobDetails"){
    this.setState({Appliers:true})
   }
    }
    render() {
      return <div id="detailblock">
          <div className="ashade-service-card__head">
					<div id="detailjobimg">
						<img src={this.props.jobDetails.imgUrl?this.props.jobDetails.imgUrl:"img/avatars/testimonial01.png"} id="imgdet"/>
					</div>
                    
      </div>
    <cite id="detailcite">{this.state.PosterData.FirstName}-{this.state.PosterData.LastName}</cite>
<div className="ashade-page-title-wrap">
        <h1 className="ashade-page-title">
            <span>don't miss this opportunity</span>
            it came once
        </h1>
    </div>
         <div className="ashade-col col-4" id="DetailJobTitle">
				<h2>
					<span>{this.props.jobDetails.fields}</span>
						{this.props.jobDetails.jobTitle}
				</h2>
		</div>

      <section className="ashade-section" id="DetailJobdescription">
					<div className="ashade-row">
						<div className="ashade-col col-4">
							<h2>
								<span>Job</span>
								 description
							</h2>
						</div>
						<div className="ashade-col col-8" id="borderdetail">
							<p className="is-dropcap">
							{this.props.jobDetails.jobDescription}
							</p>
						</div>
					</div>
				</section>
        <br/>
        <section className="ashade-section" id="DetailJobdescription">
					<div className="ashade-row">
						<div className="ashade-col col-4">
							<h2>
								<span>Job</span>
								Budget
							</h2>
						</div>
						<div className="ashade-col col-8" id="borderdetail">
              <br/>
							<p id="budgetP">
							{this.props.jobDetails.budget} TnD
							</p>
						</div>
					</div>
				</section>
                  <div className="ashade-contact-form__submit" id="detailsubmitbtn">  
                  {this.state.apllication?<div className="modal">
  <input id="modal__trigger" type="checkbox" />
  <label htmlFor="modal__trigger">Apply Now</label>
  <div className="modal__overlay">
    <div className="modal__wrap">
      <label htmlFor="modal__trigger">&#10006;</label>
      <h2>Application</h2>
     <div >Convince me</div> 
     <textarea name="" id="" cols="30" rows="10" id="detailtextarea" onChange={e=>{this.setState({applicationtext:e.target.value})}}></textarea>
     <button id='modalbutton' onClick={this.apply}>Apply</button>
    </div>
  </div>
</div>:null}
{this.state.Appliers? <div className="modal">
  <input id="modal__trigger" type="checkbox" />
  <label htmlFor="modal__trigger" onClick={this.retriveAppliers}>See Applies</label>
  <div className="modal__overlay">
    <div className="modal__wrap">
      <label htmlFor="modal__trigger">&#10006;</label>
<div id="applierslist">
  {this.state.FreelancersApplied.map((elem,index)=>{
return <div className="listitem">
<div id="ApplierEmail">Name:{elem.FirstName}-{elem.LastName}</div>

<button className="hirebutton" >hire</button>
<button className="hirebutton" id={elem.id} onClick={this.checkprofile}>Check Profile</button>
</div>   
  })}
   
</div>

    </div>
  </div>
</div>:null}
                 <br/> 
                 <br/>
<Footer/>
				  </div>
         
          </div>
    }
  }
  const mapStateToProps = (state, ownProps) => {
    return {
      user:state.user
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
      selectedprofile: (value) => dispatch({
        type: 'selectedprofile',
        value
      }),
      unselect:() => dispatch({
        type: 'unselect',
      })
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(JobDetails)
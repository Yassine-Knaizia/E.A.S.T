import React from "react"
import Footer from "./footer.jsx"
class Signup extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            client:true,
            serviceprovider:false,
            Registration:"Register as a client"
        }
   this.serviceprovider=this.serviceprovider.bind(this)
   this.client=this.client.bind(this)
    }
   serviceprovider(){
    this.setState({client:false,serviceprovider:true,Registration:"Register as a service-provider"})
   }

   
   client(){
    this.setState({client:true,serviceprovider:false,Registration:"Register as a client"})
   }
    render() {
        return <div>
       
       <div className="col-md-6 signup-form-1">
       <h3>{this.state.Registration}</h3>
       <button className="SwitchConsumer" id="switchbtn1" onClick={this.serviceprovider}>FreeLancer</button> <button className="SwitchConsumer" id="switchbtn2" onClick={this.client}>Client</button>
       {this.state.serviceprovider?<div id="testeststst">
       <div className="form-group">
           <input type="text" className="form-control" placeholder="Your First Name " />
       </div>
       <div className="form-group">
           <input type="text" className="form-control" placeholder="Your Last Name " />
       </div>
       <div className="form-group">
           <input type="text" className="form-control" placeholder="Your Email " />
       </div>
       <div className="form-group">
           <input type="password" className="form-control" placeholder="Your Password " />
       </div>
       <div className="form-group">
           <input type="password" className="form-control" placeholder="Confirm Your Password " />
       </div>
       <div className="form-group">
           <input type="text" className="form-control" placeholder="Your Age " />
       </div>
       <label htmlFor="Your Gender">Your Gender</label>
       <select className="select" className="LoginSignupInp" name="Your Gender">

                 <option value="male">male</option>
                 <option value="female">female</option>
                   </select>
       <div className="form-group">
           <input type="text" className="form-control" placeholder="Your City " />
       </div>

       <label htmlFor="Your Field">Your Field</label>
       <select className="select" className="LoginSignupInp" name="Your Field">
                 <option value="Designer">3D Designer</option>
                 <option value="Designer">Graphic Designer</option>
                 <option value="Photographer">Photographer</option>
                 <option value="Audio Visual">Audio-visual</option>
                   </select>
       <div className="form-group">
           <input type="submit" className="btnSubmit"  value="Signup" />           <input type="submit" className="btnSubmit"  value="Login" />
       </div></div>:null}
       
       
  {this.state.client?<div>
  <div className="form-group">
      <input type="text" className="form-control" placeholder="Your First Name " />
  </div>
  <div className="form-group">
      <input type="text" className="form-control" placeholder="Your Last Name " />
  </div>
  <div className="form-group">
      <input type="text" className="form-control" placeholder="Your Email " />
  </div>
  <div className="form-group">
      <input type="password" className="form-control" placeholder="Your Password " />
  </div>
  <div className="form-group">
      <input type="password" className="form-control" placeholder="Confirm Your Password " />
  </div>
  <div className="form-group">
      <input type="text" className="form-control" placeholder="Your Age " />
  </div>
  <label htmlFor="Your Gender">Your Gender</label>
  <select className="select" name="Your Gender" className="LoginSignupInp" >
            <option value="male">male</option>
            <option value="female">female</option>
              </select>
  <div className="form-group">
      <input type="text" className="form-control" placeholder="Your City " />
  </div>

  <div className="form-group">
  <input type="submit" className="btnSubmit"  value="Signup" />       <input type="submit" className="btnSubmit"  value="Login" />
  </div>
</div>:null}

</div>
<Footer/>
        </div>
        
    }
}

export default Signup
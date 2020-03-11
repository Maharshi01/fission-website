import React from 'react'  
import{Container,Row, Col, Form} from 'react-bootstrap';
import './Contact.css';
import './Home.css';
import EmailSection from './EmailBottomSection/EmailSection';


class Contact extends React.Component {

  constructor(props){
    super(props);

    this.state = {

      fields: {},
      errors: {},
      validemail:false,
      validname:false,
      validphone:false,
      valid:false,
      res:false 
    }
  }
 
  
  

 save_contact(){
   console.log("Getting for Api",this.state.fields.email)
   if(this.state.fields.name && this.state.fields.email && this.state.fields.mobileno){
   var reg = /^([A-Za-z0-9-.])+@([A-Za-z0-9-.])+.([A-Za-z]{2,4})$/;
   var reg1=/^[0-9]{10}$/
    if (reg.test(this.state.fields.email)) {
    if(reg1.test(this.state.fields.mobileno)){
  let formdata = new FormData();
  formdata.append("name",this.state.fields.name)
  formdata.append("email",this.state.fields.email)
  formdata.append("phone",this.state.fields.mobileno)
  formdata.append("message",this.state.fields.message?this.state.fields.message:"")
  console.log("Formdata",formdata.values())
  fetch('https://v5.fission.it/RestApi/emp_details/sendmail',{
  method: 'post',
  body: formdata
  })
  .then(response => {
    console.log("Details Sent",response)

    let fields=this.state.fields
    fields["name"]=""
    fields["email"]=""
    fields["mobileno"]=""
    this.setState({
     fields,
     res:true
    })
    
  })
  .catch(err => {
    console.log("DetailsError",err)
  })  
}
else{
   
  this.setState({
    validphone:true
  })
}
}//end of if validating phone
else{
   
  this.setState({
    validemail:true
  })
}
   }
   else{
     
     this.setState({
      valid:true
     })
    
    
   }
 }

 componentWillMount=()=>{
  window.scroll({
    top: 0,
    left: 0,
   
  });
 }
 
  handleValidation(){
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Name
    if(!fields["name"]){
      formIsValid = false;
      errors["name"] = "*Please enter your Name.";
    }

    if(typeof fields["name"] !== "undefined"){
      if(!fields["name"].match(/^[a-zA-Z]+$/)){
        formIsValid = false;
        errors["name"] = "Only letters";
      }      	
    }

    //Email
    if(!fields["email"]){
      formIsValid = false;
      errors["email"] = "*Please enter your Email.";
    }

    
//Moblie
if (!fields["mobileno"]) {
    formIsValid = false;
     errors["mobileno"] = "*Please enter your mobile no.";
   }

   if (typeof fields["mobileno"] !== "undefined") {
     if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
       formIsValid = false;
     errors["mobileno"] = "*Please enter valid mobile no.";

      }
    }
//message


    this.setState({errors: errors});
    return formIsValid;
  }

  contactSubmit(e){
    e.preventDefault();
    if(this.handleValidation()){
      // alert("Form submitted");
      console.log("Form submitted")
    }else{
      console.log("Form has errors.")
    } 

  }

  handleChange(field, e){   
    if(e.target.value!=""){
      this.setState({
        valid:false
      })
    }
    if(field=="email"){

    
    var reg = /^([A-Za-z0-9-.])+@([A-Za-z0-9-.])+.([A-Za-z]{2,4})$/;

    if (reg.test(e.target.value)) {
         this.setState({
           validemail:false
         })
  }
}
  if(field=="name"){
    if(e.target.value!=""){
      this.setState({
        validname:false,
        valid:false
      })
    }
  }
  //   else{
  //     this.setState({
  //       validname:false
  //     })
  //   }
  // }
  if(field=="mobileno"){
    var reg1=/^[0-9]{10}$/
    if(reg1.test(e.target.value)){
      this.setState({
        validphone:false
      })
    }
  }
    let fields = this.state.fields;
    fields[field] = e.target.value;        
    this.setState({fields});
  }


 


  render() {  
    return (<div>
<Container>
<Row>
  <Col xs={12} sm={12} md={12} lg={12}>
    <div className="contact">
      <h1>Contact us</h1>
      <p>If you are ready to work with people who can exceed your expectation, don’t hesitate- Contact now</p>
    </div>
  </Col>
</Row>


  <div className="Contact-section">
  <Row>
    <Col xs={12} sm={12} md={4} lg={4}>
      <div className="section">
        <img src="https://fissioncdn.nyc3.digitaloceanspaces.com/Skype.svg"/>
        <h2>SKYPE</h2>
        <p>fissioninfo.tech</p>
      </div>
    </Col>
    <Col xs={12} sm={12} md={4} lg={4}>
      <div className="section">
      <img src="https://fissioncdn.nyc3.digitaloceanspaces.com/Phone.svg"/>
        <h2>PHONE</h2>
        <p>USA: +1 (650) 285-3738</p>
        <p>IND: +91 (40) 43464555</p>
      </div>
    </Col>
    <Col xs={12} sm={12} md={4} lg={4}>
      <div className="section">
      <img src="https://fissioncdn.nyc3.digitaloceanspaces.com/email.svg"/>
        <h2>EMAIL</h2>
        <p>info@fission.it</p>
      </div>
    </Col>
    </Row>
  </div>

<div className="get">
  <Row>
    <Col xs={12} sm={12} md={12} lg={12}>
      <div className="touch">
        <h2>GET IN TOUCH</h2>
      </div>
      <div className="size">
        <p>Size doesn’t matter, you may be a large, medium, small or even a individual entrepreneur- Got a question shoot us, we love to answer. Let us show you how outsourcing can take care of your business needs.</p>
      </div>
    </Col>
  </Row>
</div>

<div className="form-area">
<div className="text-form">        	
        <form name="contactform" className="contactform" onSubmit= {this.contactSubmit.bind(this)}>
         
            <fieldset>
              <Row>
            <div className="col-md-4">
              <input ref="name" type="text" size="30" placeholder="Name*" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]}  className="fileds-input"/>
              <br/>
              <span className="error">{this.state.validname?<p>Enter valid Name</p>:""}</span>
              <span className="error">{this.state.valid?<p>Enter All Details</p>:""}</span>
            </div>
            <div className="col-md-4">
              <input refs="email" type="text" size="30" placeholder="Email*" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]} className="fileds-input"/>
              <br/>
              <span className="error">{this.state.validemail?<p>Enter Valid Email</p>:""}</span>
            </div>
            <div className="col-md-4">
            <input refs="phone" type="text" size="30" placeholder="Phone*" onChange={this.handleChange.bind(this, "mobileno")} value={this.state.fields["mobileno"]} className="fileds-input"/>
            <span className="error">{this.state.validphone?<p>Enter Valid Phone</p>:""}</span>
             </div>
              <br/>
              </Row>
            </fieldset>
            <Row>
          <div className="col-md-12">
            <fieldset>
              <textarea refs="message" 
                className="comments" placeholder="Message" onChange={this.handleChange.bind(this, "message")} value={this.state.fields["message"]} className="fileds-input"/>
            <span className="error">{this.state.errors["message"]}</span>
            
            </fieldset>
          </div>
          </Row>
          <div className="col-md-12">
            <fieldset>
            {/* <a class="sub_btn"><span class="sub_text"><p class="Sub_text">Send</p></span></a>  */}
            {this.state.res?<p className="subted">Form Submitted Successfully</p>:""}
              <button className="btn btn-lg pro" id="submit" value="Submit" onClick={this.save_contact.bind(this)} > <a class="sub_btn"><span class="sub_text"><p class="Sub_text">Send</p></span></a> </button>
            </fieldset>
          </div>
        </form>
      </div>
</div>


<div className="idea">
  <Col xs={12} sm={12} md={12} lg={12}>
    <div className="we">
      <h1>WE TURN IDEAS INTO ART</h1>
    </div>
    <div className="art">
      <p>You maybe having the craziest idea with an out of the world design for your brand that borders on outrageous. Just explain to us, we will turn it into a piece of art.</p>
    </div>
    <Row>
    <Col xs={12} sm={12} md={6} lg={6}>
      <div className="us">
      <h2>USA</h2>
      <h4>FISSION INC</h4>
      <p>4730 S Fort Apache Rd,<br/> Suite 300,Las Vegas, <br/>Nevada 89147.</p>
      </div>
    </Col>
    <Col xs={12} sm={12} md={6} lg={6}>
    <div className="india">
      <h2>INDIA</h2>
      <h4>Nasuja building</h4>
      <p>H. No. 1 - 89 / G / 36,<br/> Plot No. 36 Shilpi Valley, Madhapur, <br/>Hyderabad - 500081.</p>
      </div>
    </Col>
    </Row>
  </Col>
</div>

{/* <div className="crazine02">
      <Container>
 
          <div className="pointer01">
          <Row>
            <Col xs={12}  col sm={12} col md={8} col lg={8}>
          <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Enter your email to get a SNEAK PEAK OF OUR CRAZINESS" />
  </Form.Group>
  </Form>
  </Col>
  <Col xs={12}  col sm={12} col md={4} col lg={4}>
    <div className="submit">
    <a class="none_btn"><span class="next_text"><p class="next_text">SUBMIT</p></span></a> 
    </div>
    </Col>
    </Row>
    </div>
   
      </Container>
    </div> */}

</Container>
<EmailSection />
    </div>)
   
  }  
}  
export default Contact; 
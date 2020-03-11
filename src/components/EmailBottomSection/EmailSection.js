import React from 'react';
import './EmailSection.css';

class EmailSection extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
          email: '',
          errors: false,
          errors1:false,
          errors2:false
        }
      }


      save_email(){
        console.log("iNSIDE sAVE eMAILL")
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if(reg.test(this.state.email))
        {
         
          // console.log("Details Sent",response)
          this.setState({
            errors:false,
            errors1:false,
            errors2:true
          })

          // alert("Form submitted");
        }
         
       else if(this.state.email=="" && this.state.email==reg ){
this.setState({
errors:true,
erros1:false
})

        }

      
    
else if(this.state.email!=reg)
{
  this.setState({
    errors1:true
    })
          //alert("Enter Your Emailid")}
  }

  // else if(this.state.email==reg)
  // {
  //   this.setState({
  //     errors1:false
  //     })
  //           //alert("Enter Your Emailid")}
  //   }
      if(this.state.email){
        console.log("Getting for Api",this.state.email)
        let formdata = new FormData();
        formdata.append("email",this.state.email)
        
        console.log("Formdata",formdata.values())
        fetch('https://v5.fission.it/RestApi/emp_details/emailsend',{
        method: 'post',
        body: formdata
        })
       
        
        .then(response => {
          console.log("Details Sent",response)
          
        })
        .catch(err => {
          console.log("DetailsError",err)
          alert("Form has errors");
          
        })  
      }
      else{
        console.log("Email Not given")
      }
       
      }
    render() {
        return(
            <div>
               <div className="enter_email_block">
                    <div className="email_text">
                        <input type="email" name="email" className="email_field" onChange={(e)=>this.setState({
                          errors:false,
                          errors1:false,
                            email:e.target.value
                        })} placeholder="Enter your email to get a sneak peak of our craziness" 
                        onKeyPress={(e)=>{
                          if(e.target.value!=""){
                            var code = e.keyCode || e.which;
                            if (code === 13) {
                              //13 is the enter keycode
                              console.log("Enter Pressed");
                              this.save_email();
                            }
                          }
                        }} />
                        <br/>
                        {this.state.errors==true?
                        
                      <p className="errorMes">Enter valid email id</p>:<p></p>
                      }

{this.state.errors2==true?
                        
                        <p className="successMes">Form Submitted</p>:<p></p>
                        }

{this.state.errors1==true?
                        
                        <p className="errorMes">Enter valid email id</p>:<p></p>
                        }
              {/* <span className="error">{this.state.errors["email"]}</span> */}
                    </div>
                    <div className="email_submit_btn">
                        <a className="sub_btn01" onClick={
                          
                          this.save_email.bind(this)
                        
                         
                          
                          } ><span className="sub_text01"><p className="Sub_text01"  variant="outline-info">SUBMIT</p></span></a>
                    </div>
                </div>  
            </div>
        )
    }
}

export default EmailSection;
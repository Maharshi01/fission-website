import React, { useState,useEffect } from 'react';
import './Careers.css';
import Career_bg from '../images/download.jpg';
import {Container, Row, Col, Collapse, Form} from 'react-bootstrap';
import EmailSection from './EmailBottomSection/EmailSection';
import './Home.css';
import { FaAngleRight,FaAngleDown} from "react-icons/fa";
import { AlertAddAlert } from 'material-ui/svg-icons';
import Buttons from "./Buttons"

// import EmailSection from '../EmailBottomSection/EmailSection';

var bannerStyle = {
  width: "100%",
  height: "430px",
  backgroundImage: `url(${Career_bg})`,
  backgroundSize: 'cover',
  // backgroundImage: linear-gradient(rgba(230, 230, 230, 0.4), rgba(230, 230, 230, 0.75)),
}

export default function Careers(props) {
  const[mid,setMid]=useState(1)
  const [filemsg1,setFileMsg1]=useState("")
  const [filemsg2,setFileMsg2]=useState("")
  const [filemsg3,setFileMsg3]=useState("")
  const [filemsg4,setFileMsg4]=useState("")
  const [filemsg5,setFileMsg5]=useState("")
  const [filemsg6,setFileMsg6]=useState("")
  const [filemsg7,setFileMsg7]=useState("")
  const [filemsg8,setFileMsg8]=useState("")
  // Toggle div functionality starts here
    const [angularOpen, setAngularOpen] = useState(false);
    const [reactOpen, setReactOpen] = useState(false);
    const [mongoOpen, setMongoOpen] = useState(false);
    const [analystOpen, setAnalystOpen] = useState(false);
    const [nodeOpen, setNodeOpen] = useState(false);
    const [devopsOpen, setDevopsOpen] = useState(false);
    const [businessOpen, setBusinessOpen] = useState(false);
    const [securityOpen, setSecurityOpen] = useState(false);
    useEffect(() => {
      window.scroll({
        top: 0,
        left: 0,
       
      });
    }, []);
    const save_file1=(file)=>{
      console.log("save_file1")
      let formdata = new FormData();
      formdata.append("file",file)
      console.log("Formdata",file)
      fetch('https://v5.fission.it/RestApi/emp_details/fileupload',{
        method: 'post',
        body: formdata
      })
      .then(response => {
        console.log("FILE Sent",response)
        if(response.status==200){
          localStorage.setItem("Msg","Your file Uploaded")
          // setFileMsg1("Your File Uploaded Successfully!!")     
          const successmessages0=document.getElementById("one")
          successmessages0.textContent="Your Profile Uploaded Succesfully!!"
          const successmessages1=document.getElementById("two")
          successmessages1.textContent=""
          const successmessages2=document.getElementById("three")
          successmessages2.textContent=""
          const successmessages3=document.getElementById("four")
          successmessages3.textContent=""
          const successmessages4=document.getElementById("five")
          successmessages4.textContent=""
          const successmessages5=document.getElementById("six")
          successmessages5.textContent=""
          const successmessages6=document.getElementById("seven")
          successmessages6.textContent=""
          const successmessages7=document.getElementById("eight")
          successmessages7.textContent=""
        }
        
  
      })
      
      .catch(err => {
        console.log("DetailsError",err)
      })  
     }
     const save_file2=(file)=>{
      console.log("save_file2")
      let formdata = new FormData();
      formdata.append("file",file)
      console.log("Formdata",file)
      fetch('https://v5.fission.it/RestApi/emp_details/fileupload',{
      method: 'post',
      body: formdata
      })
      .then(response => {
        console.log("FILE Sent",response)
        if(response.status==200){
          localStorage.setItem("Msg","Your file Uploaded")
          // setFileMsg2("Your File Uploaded Successfully!!")   
          const successmessages0=document.getElementById("one")
          successmessages0.textContent=""
          const successmessages1=document.getElementById("two")
          successmessages1.textContent="Your Profile Uploaded Succesfully!!"
          const successmessages2=document.getElementById("three")
          successmessages2.textContent=""
          const successmessages3=document.getElementById("four")
          successmessages3.textContent=""
          const successmessages4=document.getElementById("five")
          successmessages4.textContent=""
          const successmessages5=document.getElementById("six")
          successmessages5.textContent=""
          const successmessages6=document.getElementById("seven")
          successmessages6.textContent=""
          const successmessages7=document.getElementById("eight")
          successmessages7.textContent=""
        }
        
  
      })
      
      .catch(err => {
        console.log("DetailsError",err)
      })  
     }
     const save_file3=(file)=>{
      console.log("save_file3")
      let formdata = new FormData();
      formdata.append("file",file)
      
      console.log("Formdata",file)
      fetch('https://v5.fission.it/RestApi/emp_details/fileupload',{
      method: 'post',
      body: formdata
      })
      .then(response => {
        console.log("FILE Sent",response)
        if(response.status==200){
          localStorage.setItem("Msg","Your file Uploaded")
          const successmessages0=document.getElementById("one")
          successmessages0.textContent=""
          const successmessages1=document.getElementById("two")
          successmessages1.textContent=""
          const successmessages2=document.getElementById("three")
          successmessages2.textContent="Your Profile Uploaded Succesfully!!"
          const successmessages3=document.getElementById("four")
          successmessages3.textContent=""
          const successmessages4=document.getElementById("five")
          successmessages4.textContent=""
          const successmessages5=document.getElementById("six")
          successmessages5.textContent=""
          const successmessages6=document.getElementById("seven")
          successmessages6.textContent=""
          const successmessages7=document.getElementById("eight")
          successmessages7.textContent=""
          // setFileMsg3("Your File Uploaded Successfully!!")     
        }
        
  
      })
      
      .catch(err => {
        console.log("DetailsError",err)
      })  
     }
     const save_file4=(file)=>{
      console.log("save_file4")
      let formdata = new FormData();
      formdata.append("file",file)
      
      console.log("Formdata",file)
      fetch('https://v5.fission.it/RestApi/emp_details/fileupload',{
      method: 'post',
      body: formdata
      })
      .then(response => {
        console.log("FILE Sent",response)
        if(response.status==200){
          localStorage.setItem("Msg","Your file Uploaded")
          const successmessages0=document.getElementById("one")
          successmessages0.textContent=""
          const successmessages1=document.getElementById("two")
          successmessages1.textContent=""
          const successmessages2=document.getElementById("three")
          successmessages2.textContent=""
          const successmessages3=document.getElementById("four")
          successmessages3.textContent="Your Profile Uploaded Succesfully!!"
          const successmessages4=document.getElementById("five")
          successmessages4.textContent=""
          const successmessages5=document.getElementById("six")
          successmessages5.textContent=""
          const successmessages6=document.getElementById("seven")
          successmessages6.textContent=""
          const successmessages7=document.getElementById("eight")
          successmessages7.textContent=""
          // setFileMsg4("Your File Uploaded Successfully!!")     
        }
        
  
      })
      
      .catch(err => {
        console.log("DetailsError",err)
      })  
     }
     const save_file5=(file)=>{
      console.log("save_file5")
      let formdata = new FormData();
      formdata.append("file",file)
      
      console.log("Formdata",file)
      fetch('https://v5.fission.it/RestApi/emp_details/fileupload',{
      method: 'post',
      body: formdata
      })
      .then(response => {
        console.log("FILE Sent",response)
        if(response.status==200){
          localStorage.setItem("Msg","Your file Uploaded")
          const successmessages0=document.getElementById("one")
          successmessages0.textContent=""
          const successmessages1=document.getElementById("two")
          successmessages1.textContent=""
          const successmessages2=document.getElementById("three")
          successmessages2.textContent=""
          const successmessages3=document.getElementById("four")
          successmessages3.textContent=""
          const successmessages4=document.getElementById("five")
          successmessages4.textContent="Your Profile Uploaded Succesfully!!"
          const successmessages5=document.getElementById("six")
          successmessages5.textContent=""
          const successmessages6=document.getElementById("seven")
          successmessages6.textContent=""
          const successmessages7=document.getElementById("eight")
          successmessages7.textContent=""
          // setFileMsg5("Your File Uploaded Successfully!!")     
        }
        
  
      })
      
      .catch(err => {
        console.log("DetailsError",err)
      })  
     }
     const save_file6=(file)=>{
      console.log("save_file6")
      let formdata = new FormData();
      formdata.append("file",file)
      
      console.log("Formdata",file)
      fetch('https://v5.fission.it/RestApi/emp_details/fileupload',{
      method: 'post',
      body: formdata
      })
      .then(response => {
        console.log("FILE Sent",response)
        if(response.status==200){
          localStorage.setItem("Msg","Your file Uploaded")
          const successmessages0=document.getElementById("one")
          successmessages0.textContent=""
          const successmessages1=document.getElementById("two")
          successmessages1.textContent=""
          const successmessages2=document.getElementById("three")
          successmessages2.textContent=""
          const successmessages3=document.getElementById("four")
          successmessages3.textContent=""
          const successmessages4=document.getElementById("five")
          successmessages4.textContent=""
          const successmessages5=document.getElementById("six")
          successmessages5.textContent="Your Profile Uploaded Succesfully!!"
          const successmessages6=document.getElementById("seven")
          successmessages6.textContent=""
          const successmessages7=document.getElementById("eight")
          successmessages7.textContent=""
          // setFileMsg6("Your File Uploaded Successfully!!")     
        }
        
  
      })
      
      .catch(err => {
        console.log("DetailsError",err)
      })  
     }
     const save_file7=(file)=>{
      console.log("save_file7")
      let formdata = new FormData();
      formdata.append("file",file)
      
      console.log("Formdata",file)
      fetch('https://v5.fission.it/RestApi/emp_details/fileupload',{
      method: 'post',
      body: formdata
      })
      .then(response => {
        console.log("FILE Sent",response)
        if(response.status==200){
          localStorage.setItem("Msg","Your file Uploaded")
          const successmessages0=document.getElementById("one")
          successmessages0.textContent=""
          const successmessages1=document.getElementById("two")
          successmessages1.textContent=""
          const successmessages2=document.getElementById("three")
          successmessages2.textContent=""
          const successmessages3=document.getElementById("four")
          successmessages3.textContent=""
          const successmessages4=document.getElementById("five")
          successmessages4.textContent=""
          const successmessages5=document.getElementById("six")
          successmessages5.textContent=""
          const successmessages6=document.getElementById("seven")
          successmessages6.textContent="Your Profile Uploaded Succesfully!!"
          const successmessages7=document.getElementById("eight")
          successmessages7.textContent=""
          // setFileMsg7("Your File Uploaded Successfully!!")     
        }
        
  
      })
      
      .catch(err => {
        console.log("DetailsError",err)
      })  
     }
     const save_file8=(file)=>{
      console.log("save_file8")
      let formdata = new FormData();
      formdata.append("file",file)
      
      console.log("Formdata",file)
      fetch('https://v5.fission.it/RestApi/emp_details/fileupload',{
      method: 'post',
      body: formdata
      })
      .then(response => {
        console.log("FILE Sent",response)
        if(response.status==200){
          localStorage.setItem("Msg","Your file Uploaded")
          const successmessages0=document.getElementById("one")
          successmessages0.textContent=""
          const successmessages1=document.getElementById("two")
          successmessages1.textContent=""
          const successmessages2=document.getElementById("three")
          successmessages2.textContent=""
          const successmessages3=document.getElementById("four")
          successmessages3.textContent=""
          const successmessages4=document.getElementById("five")
          successmessages4.textContent=""
          const successmessages5=document.getElementById("six")
          successmessages5.textContent=""
          const successmessages6=document.getElementById("seven")
          successmessages6.textContent=""
          const successmessages7=document.getElementById("eight")
          successmessages7.textContent="Your Profile Uploaded Succesfully!!"
          // setFileMsg8("Your File Uploaded Successfully!!")     
        }
        
  
      })
      
      .catch(err => {
        console.log("DetailsError",err)
      })  
     }

    function description1(){ 
      setAngularOpen(!angularOpen); 
      setReactOpen(false);
      setMongoOpen(false);
      setAnalystOpen(false);
      setNodeOpen(false);
      setDevopsOpen(false);
      setBusinessOpen(false);
      setSecurityOpen(false);
    }
   
    function description2(){ 
      setReactOpen(!reactOpen);
      setAngularOpen(false);
      setMongoOpen(false);
      setAnalystOpen(false);
      setNodeOpen(false);
      setDevopsOpen(false);
      setBusinessOpen(false);
      setSecurityOpen(false);
    }
    function description3(){ 
      setMongoOpen(!mongoOpen);
      setReactOpen(false);
      setAngularOpen(false);
      setAnalystOpen(false);
      setNodeOpen(false);
      setDevopsOpen(false);
      setBusinessOpen(false);
      setSecurityOpen(false);
    }
    function description4(){ 
      setAnalystOpen(!analystOpen);
      setReactOpen(false);
      setMongoOpen(false);
      setAngularOpen(false);
      setNodeOpen(false);
      setDevopsOpen(false);
      setBusinessOpen(false);
      setSecurityOpen(false);
    }
    function description5(){ 
      setNodeOpen(!nodeOpen);
      setReactOpen(false);
      setMongoOpen(false);
      setAnalystOpen(false);
      setAngularOpen(false);
      setDevopsOpen(false);
      setBusinessOpen(false);
      setSecurityOpen(false);
    }
    function description6(){ 
      setDevopsOpen(!devopsOpen);
      setReactOpen(false);
      setMongoOpen(false);
      setAnalystOpen(false);
      setNodeOpen(false);
      setAngularOpen(false);
      setBusinessOpen(false);
      setSecurityOpen(false);
    }
    function description7(){ 
      setBusinessOpen(!businessOpen);
      setReactOpen(false);
      setMongoOpen(false);
      setAnalystOpen(false);
      setNodeOpen(false);
      setDevopsOpen(false);
      setAngularOpen(false);
      setSecurityOpen(false);
    }
    function description8(){ 
      setSecurityOpen(!securityOpen);
      setReactOpen(false);
      setMongoOpen(false);
      setAnalystOpen(false);
      setNodeOpen(false);
      setDevopsOpen(false);
      setBusinessOpen(false);
      setAngularOpen(false);
    }  // Toggle div functionality ends here
   
    // Read more text functionality starts here
    const [showOppText, setShowOppText] = useState(false);
    const [showOppMoreBtn, setShowOppMoreBtn] = useState(true);
    const [showOppLessBtn, setShowOppLessBtn] = useState(false);
    const [showTeamText, setShowTeamText] = useState(false);
    const [showTeamMoreBtn, setShowTeamMoreBtn] = useState(true); 
    const [showTeamLessBtn, setShowTeamLessBtn] = useState(false); 
    const [showCultureText, setShowCultureText] = useState(false);
    const [showCultureMoreBtn, setShowCultureMoreBtn] = useState(true); 
    const [showCultureLessBtn, setShowCultureLessBtn] = useState(false); 
    
    function opportunity() {
      setShowOppText(!showOppText);
      setShowOppMoreBtn(!showOppMoreBtn);
      setShowOppLessBtn(!showOppLessBtn);
    }
    
    function opportunityLess() {
      setShowOppText(false);
      setShowOppMoreBtn(true);
      setShowOppLessBtn(false);
    }
    function team() {
      setShowTeamText(!showTeamText);
      setShowTeamMoreBtn(!showTeamMoreBtn);
      setShowTeamLessBtn(!showTeamLessBtn);
    }
    function teamLess() {
      setShowTeamText(false);
      setShowTeamMoreBtn(true);
      setShowTeamLessBtn(false);
    }
    function culture() {
      setShowCultureText(!showCultureText);
      setShowCultureMoreBtn(!showCultureMoreBtn);
      setShowCultureLessBtn(!showCultureLessBtn);
    } 
    function cultureLess() {
      setShowCultureText(false);
      setShowCultureMoreBtn(true);
      setShowCultureLessBtn(false);
    }// Read more text functionality ends here


    // const[anglestate1,setanglestate1] =useState(false);
    // const[anglestate2,setanglestate2] =useState(false);
    // const[anglestate3,setanglestate3] =useState(false);
    // const[anglestate4,setanglestate4] =useState(false);
    // const[anglestate5,setanglestate5] =useState(false);
    // const[anglestate6,setanglestate6] =useState(false);
    // const[anglestate7,setanglestate7] =useState(false);
    // const[anglestate8,setanglestate8] =useState(false);

    // function angleRight1(){
    //   setanglestate1(!anglestate1);
    //   setanglestate2(false);
    //   setanglestate3(false);
    //   setanglestate4(false);
    //   setanglestate5(false);
    //   setanglestate6(false);
    //   setanglestate7(false);
    //   setanglestate8(false);
    // }
    // function angleRight2(){
    //   setanglestate2(!anglestate2);
    //   setanglestate1(false);
    //   setanglestate3(false);
    //   setanglestate4(false);
    //   setanglestate5(false);
    //   setanglestate6(false);
    //   setanglestate7(false);
    //   setanglestate8(false);
    // }
    // function angleRight3(){
    //   setanglestate3(!anglestate3);
    //   setanglestate2(false);
    //   setanglestate1(false);
    //   setanglestate4(false);
    //   setanglestate5(false);
    //   setanglestate6(false);
    //   setanglestate7(false);
    //   setanglestate8(false);
    // }
    // function angleRight4(){
    //   setanglestate4(!anglestate4);
    //   setanglestate2(false);
    //   setanglestate3(false);
    //   setanglestate1(false);
    //   setanglestate5(false);
    //   setanglestate6(false);
    //   setanglestate7(false);
    //   setanglestate8(false);
    // }
    // function angleRight5(){
    //   setanglestate5(!anglestate5);
    //   setanglestate2(false);
    //   setanglestate3(false);
    //   setanglestate4(false);
    //   setanglestate1(false);
    //   setanglestate6(false);
    //   setanglestate7(false);
    //   setanglestate8(false);
    // }
    // function angleRight6(){
    //   setanglestate6(!anglestate6);
    //   setanglestate2(false);
    //   setanglestate3(false);
    //   setanglestate4(false);
    //   setanglestate5(false);
    //   setanglestate1(false);
    //   setanglestate7(false);
    //   setanglestate8(false);
    // }
    // function angleRight7(){
    //   setanglestate7(!anglestate7);
    //   setanglestate2(false);
    //   setanglestate3(false);
    //   setanglestate4(false);
    //   setanglestate5(false);
    //   setanglestate6(false);
    //   setanglestate1(false);
    //   setanglestate8(false);
    // }
    // function angleRight8(){
    //   setanglestate8(!anglestate8);
    //   setanglestate2(false);
    //   setanglestate3(false);
    //   setanglestate4(false);
    //   setanglestate5(false);
    //   setanglestate6(false);
    //   setanglestate7(false);
    //   setanglestate1(false);
    // }

 
      return (

        <div className="careers_page">

          {/* careers banner starts here */}
          <div style={bannerStyle} className="careers_banner">
            <div className="careers_banner_text"> 
            <div className="careers_banner_text01">
                <h1>jobs at fission</h1>
                <p>Fission hire the best emerging talent from across the nation. 
                  We look for bright young minds and give them world-class training 
                  to further equip them with the tools required to excel in their chosen domain. 
                  If you consider yourself to be innovative then a career at Fission is just for you. 
                  Check for openings in the Engineering vertical.</p>
    
              </div>
            </div>
          </div>
          {/* careers banner ends here */}


          
          <Container>

            {/* JOBS block starts here */}

            <div className="careers_jobs">
              <h2>Jobs</h2>
              <div className="jobsBlock">
                <h3>ui developer</h3>
                <div className="jobsBlock_heading">
                  <h5>Angular UI Developer</h5>
                  <h5>Hyderabad</h5>
                </div>
                <div className="job_description">
      <p onClick={description1} aria-controls="Angular-collapse-text" aria-expanded={angularOpen}>Description<span> {angularOpen==false?<FaAngleRight onClick={description1} />:<FaAngleDown onClick={description1}/>}</span></p>
                  <Collapse in={angularOpen}>
                    <div id="Angular-collapse-text">
                      <div>
                        <ul>
                          <li>Should have experience on Angular2/4</li>
                          <li>Strong Angular Security with – CSRF, XSS etc.</li>  
                          <li>Depth knowledge on Session Management & data flow architectures – Redux</li> 
                          <li>Angular Testing Frameworks – Jasmine & Karma</li>
                        </ul>
                        <div>
           <div className="job_btns_div">
             <input type="file" style={{display:"none"}}  id="file1" onChange={(e)=>{
              
              save_file1(e.target.files[0])}} className="" />
             <label for="file1" >
             {/* <button >Upload</button> */}
   
             <p  className="upload-btn">Upload</p>
          
           <p id="one"></p>
             </label>
             {/* <button className="send_btn">Send</button> */}
           </div>
          
           <p className="note_text">Note: Upload only pdf, doc, docx files</p>
           {/* {filemsg && 
           <p className="note_text" style={{ color:'green'}}>Your Profile Uploaded Succesfully!!</p>
           } */}
                        <p style={{ color:"green", textAlign:"center"}}>{filemsg1}</p>
         </div>

                       
                      </div>
                    </div>
                  </Collapse>
                </div>

                <div className="jobsBlock_heading">
                  <h5>React UI Developer</h5>
                  <h5>Hyderabad</h5>
                </div>
                <div className="job_description">
                  <p onClick={description2} aria-controls="React-collapse-text" aria-expanded={reactOpen}>Description<span> {reactOpen==false?<FaAngleRight onClick={description2} />:<FaAngleDown onClick={description2}/>}</span></p>
                  <Collapse in={reactOpen}>
                    <div id="React-collapse-text">
                      <div>
                        <ul>
                          <li>Developing new user-facing features using React.js and React Native</li>
                          <li>Building reusable components and front-end libraries for future use</li>  
                          <li>Translating designs and wireframes into high quality code</li> 
                          <li>Optimizing components for maximum performance across a vast array of web-capable devices and browsers</li>
                        </ul>
                        <div>
           <div className="job_btns_div">
             <input type="file" style={{display:"none"}}  id="file2"  onChange={(e)=>{
              
              save_file2(e.target.files[0])}} className="" />
             <label for="file2" >
             {/* <button >Upload</button> */}
   
             <p  className="upload-btn">Upload</p>
          
           <p id="two"></p>
             </label>
             {/* <button className="send_btn">Send</button> */}
           </div>
          
           <p className="note_text">Note: Upload only pdf, doc, docx files</p>
           {/* {filemsg && 
           <p className="note_text" style={{ color:'green'}}>Your Profile Uploaded Succesfully!!</p>
           } */}
         </div>
                      <p style={{ color:"green", textAlign:"center"}}>{filemsg2}</p>
                      </div>
                    </div>
                  </Collapse>
                </div>
              </div>

              <div className="jobsBlock">
                <h3>data base</h3>
                <div className="jobsBlock_heading">
                  <h5>Mongo DB</h5>
                  <h5>Hyderabad</h5>
                </div>
                <div className="job_description">
                <p onClick={description3} aria-controls="React-collapse-text" aria-expanded={mongoOpen}>Description<span> {mongoOpen==false?<FaAngleRight onClick={description3} />:<FaAngleDown onClick={description3}/>}</span></p>
                  <Collapse in={mongoOpen}>
                    <div id="React-collapse-text">
                      <div>
                        <ul>
                          <li>Install, deploy and manage MongoDB on physical and virtual machines.</li>
                          <li>Create, configure and monitor large-scale, secure, MongoDB sharded clusters.</li>  
                          <li>Support MongoDB in a high availability, multi-data center environment.</li> 
                          <li>Administer MongoDB Ops Manager monitoring, backups and automation.</li>
                        </ul>
                        <div>
                          <p>REQUIRED SKILLS</p>
                          <ul>
                            <li>3+ years supporting MongoDB in a production environment</li>
                            <li>3+ years Linux OS experience in a production environment.</li>
                            <li>Some MongoDB Ops Manager experience</li>
                          </ul>
                        </div>
                        {/*
                         <Buttons setFileMsg={save_file3} mid={mid} /> */}
                         <div>
           <div className="job_btns_div">
             <input type="file" style={{display:"none"}}  id="file3"   onChange={(e)=>{
              
              save_file3(e.target.files[0])
              
              
              }} className="" />
             <label for="file3" >
             {/* <button >Upload</button> */}
   
             <p  className="upload-btn">Upload</p>
          
           <p id="three"></p>
             </label>
             {/* <button className="send_btn">Send</button> */}
           </div>
          
           <p className="note_text">Note: Upload only pdf, doc, docx files</p>
        
           {/* {filemsg && 
           <p className="note_text" style={{ color:'green'}}>Your Profile Uploaded Succesfully!!</p>
           } */}
         </div>
                        <p style={{ color:"green", textAlign:"center"}}>{filemsg3}</p>  
                      </div>
                    </div>
                  </Collapse>
                </div>
              </div>

              <div className="jobsBlock">
                <h3>QUALITY ANALYST</h3>
                <div className="jobsBlock_heading">
                  <h5>Application Analyst</h5>
                  <h5>Hyderabad</h5>
                </div>
                <div className="job_description">
                <p onClick={description4} aria-controls="React-collapse-text" aria-expanded={analystOpen}>Description<span> {analystOpen==false?<FaAngleRight onClick={description4} />:<FaAngleDown onClick={description4}/>}</span></p>
                  <Collapse in={analystOpen}>
                    <div id="React-collapse-text">
                      <div>
                        <ul>
                          <li>Desired candidate must have at least 4 - 6 years of automation experience in QA</li>
                          <li>Experience in bug tracking systems (BTS), issue life cycle and reporting best practices</li>  
                          <li>Will be actively involved in hands on test case design & development, test case execution, 
                            test automation development, reviews of requirements, and other project artifacts</li> 
                          <li>Quantify and track automation test coverage</li>
                        </ul>
                        {/* <Buttons setFileMsg={save_file4}  />  
                         */}
                         <div>
           <div className="job_btns_div">
             <input type="file" style={{display:"none"}}  id="file4"   onChange={(e)=>{
              
              save_file4(e.target.files[0])}} className="" />
             <label for="file4" >
             {/* <button >Upload</button> */}
   
             <p  className="upload-btn">Upload</p>
          
           <p id="four"></p>
             </label>
             {/* <button className="send_btn">Send</button> */}
           </div>
          
           <p className="note_text">Note: Upload only pdf, doc, docx files</p>
           {/* {filemsg && 
           <p className="note_text" style={{ color:'green'}}>Your Profile Uploaded Succesfully!!</p>
           } */}
         </div>
                        <p style={{ color:"green", textAlign:"center"}}>{filemsg4}</p>
                      </div>
                    </div>
                  </Collapse>
                </div>
              </div>

              <div className="jobsBlock">
                <h3>MIDDLEWARE</h3>
                <div className="jobsBlock_heading">
                  <h5>Node JS</h5>
                  <h5>Hyderabad</h5>
                </div>
                <div className="job_description">
                <p onClick={description5} aria-controls="React-collapse-text" aria-expanded={nodeOpen}>Description<span> {nodeOpen==false?<FaAngleRight onClick={description5} />:<FaAngleDown onClick={description5}/>}</span></p>
                  <Collapse in={nodeOpen}>
                    <div id="React-collapse-text">
                      <div>
                        <ul>
                          <li>Have at least 5+ years of experience in scalable backend REST API Development with Web 2.0, 
                            node.js and its ecosystem (Express V4, NPM, and Typescript etc.)</li>
                          <li>Responsible for Design, develop, test, deploy, maintain and improve Backend APIs as per business needs.</li>  
                          <li>Experience working in an agile environment, and are comfortable to accommodate ever changing business needs.</li> 
                          <li>Should have extensive knowledge with NoSQL backend systems, preferably MongoDB (replication, Sharding, 
                            administration, SSL security etc.)</li>
                        </ul>
                        {/* <Buttons setFileMsg={save_file5}  />   */}
                        <div>
           <div className="job_btns_div">
             <input type="file" style={{display:"none"}}   id="file5"   onChange={(e)=>{
              
              save_file5(e.target.files[0])}} className="" />
             <label for="file5" >
             {/* <button >Upload</button> */}
   
             <p  className="upload-btn">Upload</p>
          
           <p id="five"></p>
             </label>
             {/* <button className="send_btn">Send</button> */}
           </div>
          
           <p className="note_text">Note: Upload only pdf, doc, docx files</p>
           {/* {filemsg && 
           <p className="note_text" style={{ color:'green'}}>Your Profile Uploaded Succesfully!!</p>
           } */}
         </div>
                        <p style={{ color:"green", textAlign:"center"}}>{filemsg5}</p>
                      </div>
                    </div>
                  </Collapse>
                </div>
              </div>

              <div className="jobsBlock">
                <h3>CLOUD</h3>
                <div className="jobsBlock_heading">
                  <h5>Devops</h5>
                  <h5>Hyderabad</h5>
                </div>
                <div className="job_description">
                <p onClick={description6} aria-controls="React-collapse-text" aria-expanded={devopsOpen}>Description<span> {devopsOpen==false?<FaAngleRight onClick={description6} />:<FaAngleDown onClick={description6}/>}</span></p>
                  <Collapse in={devopsOpen}>
                    <div id="React-collapse-text">
                      <div>
                        <ul>
                          <li>Minimum 4-6 years of good hand-on experience with AWS foundation services related to compute, network, storage, 
                            content delivery, administration and security, deployment and management, automation technologies</li>
                          <li>Strong architecture & design experience of Deploying Enterprise applications on AWS, monitoring and 
                            performance tuning of deployed applications on AWS</li>  
                          <li>Expertise in Infra capacity sizing, costing of AWS services to drive optimized solution architecture, 
                            leading to optimal infra investment vs performance and scale.</li> 
                          <li>Expertise in articulating architectural choices within various AWS services and solution methodologies</li>
                        </ul>
                        <div>
                          <p>GOOD TO HAVE</p>
                          <ul>
                            <li>Great understanding of data and application security best practices</li>
                            <li>Experience in profiling, debugging & troubleshooting Node.js processes</li>
                            <li>Experience building a backend API to be consumed by multiple applications</li>
                            <li>Experience with full-stack JavaScript, and building single-page applications (Product is in MEAN stack, MERN)</li>
                            <li>Experience working with web infrastructure-as-code, using tools like Terraform</li>
                            <li>Experience with automated deployments of web applications, using tools like Capistrano</li>
                            <li>Experience working at a startup</li>
                          </ul>
                        </div>
                        {/* <Buttons setFileMsg={save_file6}  />   */}
                        <div>
           <div className="job_btns_div">
             <input type="file" style={{display:"none"}}  id="file6"   onChange={(e)=>{
              
              save_file6(e.target.files[0])}} className="" />
             <label for="file6" >
             {/* <button >Upload</button> */}
   
             <p  className="upload-btn">Upload</p>
          
           <p id="six"></p>
             </label>
             {/* <button className="send_btn">Send</button> */}
           </div>
          
           <p className="note_text">Note: Upload only pdf, doc, docx files</p>
           {/* {filemsg && 
           <p className="note_text" style={{ color:'green'}}>Your Profile Uploaded Succesfully!!</p>
           } */}
         </div>
                        <p style={{ color:"green", textAlign:"center"}}>{filemsg6}</p>
                      </div>
                    </div>
                  </Collapse>
                </div>
              </div>

              <div className="jobsBlock">
                <h3>BUSINESS DEVELOPMENT</h3>
                <div className="jobsBlock_heading">
                  <h5>Business Development Executive</h5>
                  <h5>Hyderabad</h5>
                </div>
                <div className="job_description">
                <p onClick={description7} aria-controls="React-collapse-text" aria-expanded={businessOpen}>Description<span> {businessOpen==false?<FaAngleRight onClick={description7} />:<FaAngleDown onClick={description7}/>}</span></p>
                  <Collapse in={businessOpen}>
                    <div id="React-collapse-text">
                      <div>
                        <ul>
                          <li>Will be responsible for market research, data mining, and account mining in international Markets.</li>
                          <li>B2B sales business development in assigned territory</li>  
                          <li>Meeting planned sales goals</li> 
                          <li>Coordinating with team on lead generation.</li>
                        </ul>
                        {/* <Buttons setFileMsg={save_file7}  />   */}
                        <div>
           <div className="job_btns_div">
             <input type="file" style={{display:"none"}}  id="file7"   onChange={(e)=>{
              
              save_file7(e.target.files[0])}} className="" />
             <label for="file7" >
             {/* <button >Upload</button> */}
   
             <p  className="upload-btn">Upload</p>
          
           <p id="seven"></p>
             </label>
             {/* <button className="send_btn">Send</button> */}
           </div>
          
           <p className="note_text">Note: Upload only pdf, doc, docx files</p>
           {/* {filemsg && 
           <p className="note_text" style={{ color:'green'}}>Your Profile Uploaded Succesfully!!</p>
           } */}
         </div>
                        <p style={{ color:"green", textAlign:"center"}}>{filemsg7}</p>
                      </div>
                    </div>
                  </Collapse>
                </div>
              </div>

              <div className="jobsBlock">
                <h3>SECURITY</h3>
                <div className="jobsBlock_heading">
                  <h5>Application Security</h5>
                  <h5>Hyderabad</h5>
                </div>
                <div className="job_description">
                <p onClick={description8} aria-controls="React-collapse-text" aria-expanded={securityOpen}>Description<span> {securityOpen==false?<FaAngleRight onClick={description8} />:<FaAngleDown onClick={description8}/>}</span></p>
                  <Collapse in={securityOpen}>
                    <div id="React-collapse-text">
                      <div>
                        <ul>
                          <li>5-7 years of experience in end to end application security</li>
                          <li>Identify potential security risks in application architecture and 
                            proactively suggest standards for a fault tolerant and high available product</li>  
                          <li>Scan and report vulnerabilities with a minimum of false positives and false negatives</li> 
                          <li>Support a centralized security policy management so all scans use established policies</li>
                          <li>Should have sound understanding on security related attacks:<br />
                          - Code Injection attacks<br />
                          - Database/SQL injection attacks<br />
                          - Shell Injection attacks<br />
                          - Session hijacking<br />
                          - Man in the middle attack, DOS attacks<br />
                          - CORS, CSRF, XSS etc.</li>
                        </ul>
                        {/* <Buttons setFileMsg={save_file8}  />   */}
                        <div>
             <p id="eight"></p>
           <div className="job_btns_div">
             <input type="file" style={{display:"none"}}  id="file8"   onChange={(e)=>{
              
              save_file8(e.target.files[0])}} className="" />
             <label for="file8" >
             {/* <button >Upload</button> */}
   
             <p  className="upload-btn">Upload</p>
          
             </label>
             {/* <button className="send_btn">Send</button> */}
           </div>
          
           <p className="note_text">Note: Upload only pdf, doc, docx files</p>
           {/* {filemsg && 
           <p className="note_text" style={{ color:'green'}}>Your Profile Uploaded Succesfully!!</p>
           } */}
         </div>
                        <p style={{ color:"green", textAlign:"center"}}>{filemsg8}</p>
                      </div>
                    </div>
                  </Collapse>
                </div>
              </div>
            </div>
            {/* JOBS block ends here */}      



             {/* GET TO KNOW block starts here */}
             <div className="get_to_know">
              <p className="top_color_bar"></p>
              <h2>Get to know</h2>
              <Row>
                <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                  <div>
                    <div className="media_image">
                      <img src="https://fissioncdn.nyc3.digitaloceanspaces.com/Hire experts.svg"/>
                    </div>
                    <div className="media_body">
                      <h5>OUR OPPORTUNITIES</h5>
                      <p>Fission provides people the unique opportunity of working with the best minds of the industry, 
                        be it your colleagues or the clients. The opportunity to learn  
                        { showOppText && 
                          <span className="highly animated rotateIn"> from your peers, mentors and 
                          getting a hand’s on experience is what you get at Fission.</span>
                        }
                      </p>
                      <div className="care-btn">
                        { showOppMoreBtn && 
                          <a className="sub_btn" onClick={opportunity}>
                            <span className="sub_text"><p className="Sub_text">More</p></span>
                          </a>
                        }
                        { showOppLessBtn && 
                          <a className="sub_btn" onClick={opportunityLess}>
                            <span className="sub_text"><p className="Sub_text">Less</p></span>
                          </a>
                        }
                      </div>
                    </div>
                  </div>
                </Col>

                <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                  <div>
                    <div className="media_image">
                      <img src="https://fissioncdn.nyc3.digitaloceanspaces.com/Cost effective.svg" />
                    </div>
                    <div className="media_body">
                      <h5>OUR TEAM</h5>
                      <p>We are a team of part time dreamers and full-time innovators. At Fission you get to meet people 
                        of varied skillsets and expertise ranging from web design,  
                        { showTeamText &&
                          <span className="highly animated rotateIn"> programming, digital marketing and strategy. The rag tag nature of our team is what makes 
                            working at Fission awesome.</span>
                        }
                      </p>
                        <div className="care-btn">
                          { showTeamMoreBtn &&
                            <a className="sub_btn" onClick={team}>
                              <span className="sub_text"><p className="Sub_text">More</p></span>
                            </a>
                          }
                          { showTeamLessBtn &&
                            <a className="sub_btn" onClick={teamLess}>
                              <span className="sub_text"><p className="Sub_text">Less</p></span>
                            </a>
                          }
                        </div>
                    </div>
                  </div>
                </Col>

                <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                  <div>
                    <div className="media_image">
                      <img src="https://fissioncdn.nyc3.digitaloceanspaces.com/adaptable.svg" />
                    </div>
                    <div className="media_body">
                      <h5>OUR CULTURE</h5>
                      <p>Being an open door, having a flat communication amongst teams and the management is the greatest 
                        trength of Fission. We believe transparency 
                        { showCultureText &&
                          <span className="highly animated rotateIn"> is the key for innovation and free thinking, 
                          so we can say we are loud and extroverts by nature.</span>
                        }
                      </p>
                        <div className="care-btn">
                          { showCultureMoreBtn &&
                            <a className="sub_btn" onClick={culture}>
                              <span className="sub_text"><p className="Sub_text">More</p></span>
                            </a>
                          }
                           { showCultureLessBtn &&
                            <a className="sub_btn" onClick={cultureLess}>
                              <span className="sub_text"><p className="Sub_text">Less</p></span>
                            </a>
                          }
                        </div>
                    </div>
                  </div>
                </Col>
              </Row> 
            </div>
            {/* GET TO KNOW block ends here */}


           


            {/* <div className="crazine04">
  <Container>
  <div className="pointer">
  <Row>
   <Col xs={12}  col sm={12} col md={8} col lg={8}>
   <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Enter your email to get a SNEAK PEAK OF OUR CRAZINESS"/>
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

           {/* Email block starts here */}
           <div>
              {<EmailSection />}
            </div>
            {/* Email block ends here */}
            
         
        </div>

        );
    }



// Jobs upload button component




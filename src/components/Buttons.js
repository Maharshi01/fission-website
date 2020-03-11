import React, { useState,useEffect } from 'react';
import './Careers.css';
import Career_bg from '../images/download.jpg';
import {Container, Row, Col, Collapse, Form} from 'react-bootstrap';
import EmailSection from './EmailBottomSection/EmailSection';
import './Home.css';
import { FaAngleRight,FaAngleDown} from "react-icons/fa";
import { AlertAddAlert } from 'material-ui/svg-icons';


export default function Buttons(props) {
    console.log(props,"my props")
     
        
       return(
         <div>
           <div className="job_btns_div">
             <input type="file"  id="file" style={{display:'none'}} onChange={(e)=>{
              
              props.setFileMsg(e.target.files[0])}} className="" />
             <label for="file" >
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
       )
     
   }
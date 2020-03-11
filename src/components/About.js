import React from 'react';
import{Container, Row, Col, Form} from 'react-bootstrap';
import '../components/Navbar/Navbar.css';
import './Nav.css';

import EmailSection from './EmailBottomSection/EmailSection';
class About extends React.Component {
  // componentDidMount(){

  //   (document).ready(function() {
  //     ("#toggle").click(function() {
  //       var elem = ("#toggle").text();
  //       if (elem == "Read More") {
  //         //Stuff to do when btn is in the read more state
  //         ("#toggle").text("Read Less");
  //         ("#text").slideDown();
  //       } else {
  //         //Stuff to do when btn is in the read less state
  //         ("#toggle").text("Read More");
  //         ("#text").slideUp();
  //       }
  //     });
  //   });
  // }

  
  constructor(props){
    super(props);
    
    this.state={
     more:false,
     next:false,
     last:false,
     less1:true,
     less2:true,
     less3:true
    }
  }
  more(){
    this.setState({
      more:!this.state.more,
    })
  }
  next(){
    this.setState({
      next:!this.state.next,
    })
  }
  last(){
    this.setState({
      last:!this.state.last,
    })
  }
  moreLess1(){
    this.setState({
      more:!this.state.more,
    })
  }
  nextLess2(){
    this.setState({
      next:!this.state.next,
    })
  }
  lastLess3(){
    this.setState({
      last:!this.state.last,
    })
  }
 componentDidMount=()=>{
  localStorage.setItem('color','#FFFFFF')
 }
 componentWillMount=()=>{
  window.scroll({
    top: 0,
    left: 0,
   
  });
 }


  render() {  
    return (<div>

<div className="background">
<Container>
  <Row>
    <div className="banner">
      <Col xs={12} col sm={12} col md={12} col lg={12}>
        <div className="text-area">
          <h2>OUR JOURNEY</h2>
          <h6>Started from the bottom, now we here</h6>
        </div>
        <div className="para">
          <p>Our success story starts in India in the City of Pearls, Hyderabad.<br/>  It was 2009, two young guys Sandeep Nukarapu and Bhargav Kandimalla had a “eureka” moment. Thankfully, not in an overflowing bathtub. They decided to work as admin support to one single US client. Since then, they have never looked back. Year after year, they moved on to conquer new fields, had their wits tested to the ends but they managed to get ahead of the curve each and every single time. Imagine, starting out with one single client to now having over 100+ clients across the world. Hard work, creativity, and a never say never attitude is the key to success. Fission is now one of the leading end-to-end IT solutions and product development company in the world with offices in Hyderabad, India, and Las Vegas, USA all because of that one single “eureka” moment which propelled them beyond the earth into a whole new planet.</p>
        </div>
      </Col>
    </div>
  </Row>
</Container>
</div>

<div className="section-part">
<Container>
  
    <div className="years-part">
    <Row>
    <Col xs={12} col sm={12} col md={12} col lg={12}>
      <div className="lane">
      <span></span>
        <h2>FISSION THROUGH THE YEARS</h2>
        <p>Let’s take a trip down memory lane.</p>
      </div>
    </Col>
    </Row>

  <div className="idea-part">
    <Row>
    <Col xs={12} col sm={12} col md={4} col lg={4}>
    <div className="explore">
      <img src="https://fissioncdn.nyc3.digitaloceanspaces.com/our_story_2009.svg" />
    </div>
    </Col>
    <Col xs={12} col sm={12} col md={8} col lg={8}>
    <div className="text">
      <p>Our explorers, Sandeep and Bhargav came out of their cocoon ready to change the world with their kickass affiliate marketing data management. They set out on their ship, Fission searching for adventures and treasure.</p>
    </div>
  
    <div className="arrow">
    <img src="https://fissioncdn.nyc3.digitaloceanspaces.com/arow.svg"  class="path"/>  
    </div>
    
    </Col>
    </Row>
    </div>

    <div className="idea-part01">
    <Row>
    <Col xs={12} col sm={12} col md={8} col lg={8}>
    <div className="text01">
      <p>Our brave explorers made their first major foray into the adventurous world of affiliate marketing with their first exclusive Affiliate Marketing ally who provided them 3 employees for their ship.</p>
    </div>
    
    <div className="arrow01">
    <img src="https://fissioncdn.nyc3.digitaloceanspaces.com/arow.svg"/>  
    </div>
  
    </Col>
    <Col xs={12} col sm={12} col md={4} col lg={4}>
    <div className="explore">
      <img src="https://fissioncdn.nyc3.digitaloceanspaces.com/our_story_2012.svg" />
    </div>
    </Col>
    </Row>
    </div>
    
    <div className="idea-part">
    <Row>
    <Col xs={12} col sm={12} col md={4} col lg={4}>
    <div className="explore">
      <img src="https://fissioncdn.nyc3.digitaloceanspaces.com/our story 2015.svg"/>
    </div>
    </Col>
    <Col xs={12} col sm={12} col md={8} col lg={8}>
    <div className="text">
      <p>Slowly and steadily, their ship had 70 employees working with them which helped one of their ally’s company generate 2million/MO and also get acquired by a Fortune 500 company.</p>
    </div>
   
    <div className="arrow">
    <img src="https://fissioncdn.nyc3.digitaloceanspaces.com/arow.svg"/>  
    </div>

    </Col>
    </Row>
    </div>


    <div className="idea-part01">
    <Row>
    <Col xs={12} col sm={12} col md={8} col lg={8}>
    <div className="text01">
      <p>They ventured into new areas exploring and searching for treasure and found it in the lands of e-commerce admin support, and design & development services.</p>
    </div>
    <div className="arrow01">
    <img src="https://fissioncdn.nyc3.digitaloceanspaces.com/arow.svg" />  
    </div>
    </Col>
    <Col xs={12} col sm={12} col md={4} col lg={4}>
    <div className="explore">
      <img src="https://fissioncdn.nyc3.digitaloceanspaces.com/our story 2016.svg" />
    </div>
    </Col>
    </Row>
    </div>

    <div className="idea-part">
    <Row>
    <Col xs={12} col sm={12} col md={4} col lg={4}>
    <div className="explore">
      <img src="https://fissioncdn.nyc3.digitaloceanspaces.com/our story 2017.svg"/>
    </div>
    </Col>
    <Col xs={12} col sm={12} col md={8} col lg={8}>
    <div className="text">
      <p>After the end of their treasure hunt, they shifted the gears of their ship and ended up on an unexplored island. They made the most of it by setting up shop there and started providing end-to-end IT services.</p>
    </div>
    <div className="arrow">
    <img src="https://fissioncdn.nyc3.digitaloceanspaces.com/arow.svg" />  
    </div>
    </Col>
    </Row>
    </div>

    <div className="idea-part01">
    <Row>
    <Col xs={12} col sm={12} col md={8} col lg={8}>
    <div className="text01">
      <p>The two explorers decided it was time to dip Fission’s feet into new waters and so they started on a new adventure to the stormy waters of software development and released the first product from Fission, Custom-app.</p>
    </div>
    <div className="arrow01">
    <img src="https://fissioncdn.nyc3.digitaloceanspaces.com/arow.svg" />  
    </div>
    </Col>
    <Col xs={12} col sm={12} col md={4} col lg={4}>
    <div className="explore">
      <img src="https://fissioncdn.nyc3.digitaloceanspaces.com/our story 2018.svg" />
    </div>
    </Col>
    </Row>
    </div>

    <div className="idea-part">
    <Row>
    <Col xs={12} col sm={12} col md={4} col lg={4}>
    <div className="explore">
      <img src="https://fissioncdn.nyc3.digitaloceanspaces.com/our story 2019.svg"/>
    </div>
    </Col>
    <Col xs={12} col sm={12} col md={8} col lg={8}>
    <div className="text">
      <p>– It’s been 9 years since they started their adventure. With the help of their adventures and explorations, Fission has expanded beyond 100+ employees and also started voyaging into USA.
      </p>
    </div>
    </Col>
    </Row>
    </div>
    </div>
</Container>
</div>




{/*  mobile-section  */}

<div className="section-part01">
<Container>
  
    <div className="years-part">
    <Row>
    <Col xs={12} col sm={12} col md={12} col lg={12}>
      <div className="lane">
      <span></span>
        <h2>FISSION THROUGH THE YEARS</h2>
        <p>Let’s take a trip down memory lane.</p>
      </div>
    </Col>
    </Row>

  <div className="idea-part">
    <Row>
    <Col xs={12} col sm={12} col md={4} col lg={4}>
    <div className="explore">
      <img src="https://fissioncdn.nyc3.digitaloceanspaces.com/our story 2009.svg" />
    </div>
    </Col>
    <Col xs={12} col sm={12} col md={8} col lg={8}>
    <div className="text">
      <p>Our explorers, Sandeep and Bhargav came out of their cocoon ready to change the world with their kickass affiliate marketing data management. They set out on their ship, Fission searching for adventures and treasure.</p>
    </div>
    
    </Col>
    </Row>
    </div>

    <div className="idea-part01">
    <Row>
    <Col xs={12} col sm={12} col md={4} col lg={4}>
    <div className="explore">
      <img src="https://fissioncdn.nyc3.digitaloceanspaces.com/our story 2012.svg" />
    </div>
    </Col>
    <Col xs={12} col sm={12} col md={8} col lg={8}>
    <div className="text">
      <p>Our explorers, Sandeep and Bhargav came out of their cocoon ready to change the world with their kickass affiliate marketing data management. They set out on their ship, Fission searching for adventures and treasure.</p>
    </div>
    </Col>
   
    </Row>
    </div>
    
    <div className="idea-part">
    <Row>
    <Col xs={12} col sm={12} col md={4} col lg={4}>
    <div className="explore">
      <img src="https://fissioncdn.nyc3.digitaloceanspaces.com/our story 2015.svg" />
    </div>
    </Col>
    <Col xs={12} col sm={12} col md={8} col lg={8}>
    <div className="text">
      <p>Our explorers, Sandeep and Bhargav came out of their cocoon ready to change the world with their kickass affiliate marketing data management. They set out on their ship, Fission searching for adventures and treasure.</p>
    </div>
    </Col>
    </Row>
    </div>


    <div className="idea-part01">
    <Row>
    <Col xs={12} col sm={12} col md={4} col lg={4}>
    <div className="explore">
      <img src="https://fissioncdn.nyc3.digitaloceanspaces.com/our story 2016.svg" />
    </div>
    </Col>
    <Col xs={12} col sm={12} col md={8} col lg={8}>
    <div className="text">
      <p>Our explorers, Sandeep and Bhargav came out of their cocoon ready to change the world with their kickass affiliate marketing data management. They set out on their ship, Fission searching for adventures and treasure.</p>
    </div>
    </Col>
    </Row>
    </div>

    <div className="idea-part">
    <Row>
    <Col xs={12} col sm={12} col md={4} col lg={4}>
    <div className="explore">
      <img src="https://fissioncdn.nyc3.digitaloceanspaces.com/our story 2017.svg" />
    </div>
    </Col>
    <Col xs={12} col sm={12} col md={8} col lg={8}>
    <div className="text">
      <p>Our explorers, Sandeep and Bhargav came out of their cocoon ready to change the world with their kickass affiliate marketing data management. They set out on their ship, Fission searching for adventures and treasure.</p>
    </div>
    </Col>
    </Row>
    </div>

    <div className="idea-part01">
    <Row>
    <Col xs={12} col sm={12} col md={4} col lg={4}>
    <div className="explore">
      <img src="https://fissioncdn.nyc3.digitaloceanspaces.com/our story 2018.svg "/>
    </div>
    </Col>
    <Col xs={12} col sm={12} col md={8} col lg={8}>
    <div className="text">
      <p>Our explorers, Sandeep and Bhargav came out of their cocoon ready to change the world with their kickass affiliate marketing data management. They set out on their ship, Fission searching for adventures and treasure.</p>
    </div>
    </Col>
    </Row>
    </div>

    <div className="idea-part">
    <Row>
    <Col xs={12} col sm={12} col md={4} col lg={4}>
    <div className="explore">
      <img src="https://fissioncdn.nyc3.digitaloceanspaces.com/our story 2019.svg" />
    </div>
    </Col>
    <Col xs={12} col sm={12} col md={8} col lg={8}>
    <div className="text">
      <p>Our explorers, Sandeep and Bhargav came out of their cocoon ready to change the world with their kickass affiliate marketing data management. They set out on their ship, Fission searching for adventures and treasure.</p>
    </div>
    </Col>
    </Row>
    </div>
    </div>
</Container>
</div>

{/* mobile-section-section-end */}



<div className="team-section">
<Container>
  <Row>
  <div className="hiring">
    <span></span>
<h2>SPECIALIZATIONS?</h2>
  </div>
  </Row>
    <div className="special">
    <Row>
      <Col xs={12} col md={12} col sm={4} col md={4}>
        <div className="expert">
        <img src="https://fissioncdn.nyc3.digitaloceanspaces.com/Hire experts.svg"/>
        </div>
        <div className="mean">
          <h2>HIRING EXPERT TEAMS</h2>
          <p >When we mean expert’s, we mean it. We hire the best brains in the tech world after careful scrutinizing. They are not only wizards in their 
            {this.state.more==true?
            
            <span  className="highly animated rotateIn"> specialized skills butonly wizards in their specialized skills but even hardcore nerds and time managers par excellence. Hiring an expert offshore team of coders not only provides great technical consultancy but even reduces the cumbersome task of human resource hiring. With the team of ‘Fission Infotech’ at our client’s disposal, getting a fully loaded IT solution is a done deal.</span>
           :<p style={{ margin:'0px'}}></p> }   
           </p>     
        </div>
        <div className="more">
          {this.state.more == false && ( <a class="sub_btn"><span class="sub_text"  onClick={this.more.bind(this)}><p class="Sub_text">More</p></span></a> ) }
 
          {this.state.more == true && (<a class="sub_btn"><span class="sub_text"  onClick={this.moreLess1.bind(this)}><p class="Sub_text">Less</p></span></a> ) }

        </div>
      </Col>
      <Col xs={12} col md={12} col sm={4} col md={4}>
        <div className="expert">
        <img src="https://fissioncdn.nyc3.digitaloceanspaces.com/Cost effective.svg" />
        </div>
        <div className="mean">
          <h2>COST EFFECTIVE SERVICES</h2>
          <p >Who wouldn’t want a team of experts at a kickass pricing? That is exactly what we at Fission Infotech provide. We not only have
            {this.state.next==true?
             <span className="highly animated rotateIn"> a great team of coders having an array of technical expertise but even provide them at the most cost-effective pricing. We do not believe in breaking the bank of our client, with that vision in mind we create the best user experience provided at an offer you simply cannot refuse. No matter what your business and how complex your vision is we got your back.</span>
           :<p style={{ margin:'0px'}}></p> }
           </p>
        </div>
        <div className="more">
         {this.state.next == false && ( <a class="sub_btn"><span class="sub_text"  onClick={this.next.bind(this)}><p class="Sub_text">More</p></span></a> ) }

         {this.state.next == true && ( <a class="sub_btn"><span class="sub_text"  onClick={this.nextLess2.bind(this)}><p class="Sub_text">Less</p></span></a> ) }
        </div>
      </Col>

      <Col xs={12} col md={12} col sm={4} col md={4}>
        <div className="expert">
        <img src="https://fissioncdn.nyc3.digitaloceanspaces.com/adaptable.svg" />
        </div>
        <div className="mean">
          <h2>HIGHLY ADAPTABLE</h2>
          <p >We reiterate the point to our clients from day one, we are poor at geography. We have our own small utopian world where time is never
            {this.state.last==true?
             <span className="highly animated rotateIn"> a constraint for us. You may be operating from fast paced Tokyo or the flamboyant city of Los Angeles, our team is adaptable to provide solutions to you. From our experience we have learnt the hurdles faced by our clients while operating remote teams. Fission mitigates the risks by being highly responsive and adaptable. We are aspiring time travellers…seriously.</span>
           :<p style={{ margin:'0px'}}></p> }
          </p>
        </div>
        <div className="more">
          {this.state.last == false && ( <a class="sub_btn"><span class="sub_text"  onClick={this.last.bind(this)}><p class="Sub_text">More</p></span></a> ) }

          {this.state.last == true && ( <a class="sub_btn"><span class="sub_text"  onClick={this.lastLess3.bind(this)}><p class="Sub_text">Less</p></span></a> ) }
           
        </div>
      </Col>
      </Row>
    </div>
</Container>
</div>


{/* 
<div className="crazine">
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

  <EmailSection />
    </div>)
   
  }  
}  
export default About; 
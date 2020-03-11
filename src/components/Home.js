import React, { useState,useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col,Form } from "react-bootstrap";
import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement, animate, children, className, layout}  from 'react-vertical-timeline-component';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link, animateScroll as scroll } from "react-scroll";
// import Line from "./Line";
// import VerticalProgress from "./VerticalProgress";
// import Create from "./Create";
import Brands from './Brands';
import './Services.css';
import './Home.css';
import './Brand.css';
import './EmailBottomSection/EmailSection';
import EmailSection from "./EmailBottomSection/EmailSection";





function Home(){


  
  
// javascript stuff goes here
localStorage.setItem('color','#E2FF10')
const message = 'Master of all Trades';
const name='We are an all-in-one Product Development and IT Solutions company. Our key services lie in IT consulting, app development, e-commerce implementation, cloud support, virtual staffing, and web development. With so many services being offered under one roof, we are without a doubt a Master of all Trades. No matter whether it is midnight or afternoon, rain or sunshine, a snowstorm in the Arctic or an asteroid headed for earth, we got your back. So, you can relax while we save the day.';
const our='Our Specialization';
useEffect(() => {
  window.scroll({
    top: 0,
    left: 0,
   
  });
}, []);
  return(  
      // template goes here
  <div>
    <div className="home-background">
      <div className="slider">
        <Carousel>
          <Carousel.Item>
            <Container>
              <div className="circle01">
                <img src="https://fissioncdn.nyc3.digitaloceanspaces.com/Ellipse 24.svg" />
              </div>
              <div className="dark">
                <img src="https://fissioncdn.nyc3.digitaloceanspaces.com/Ellipse.svg"/>
              </div>
              <div className="dark01">
                <img src="https://fissioncdn.nyc3.digitaloceanspaces.com/Ellipse.svg" />
              </div>
              <div className="waves">
                <img src="https://fissioncdn.nyc3.digitaloceanspaces.com/Wave.svg" />
              </div>
              <div className="line">
                <img src="https://fissioncdn.nyc3.digitaloceanspaces.com/Line.svg"/>
              </div>
              <div className="line01">
                <img src="https://fissioncdn.nyc3.digitaloceanspaces.com/Line.svg" />
              </div>
              <div className="ellips01">
                <img src="https://fissioncdn.nyc3.digitaloceanspaces.com/ellips lines.svg"/>
              </div>
              <div className="banner-text animated rotateInUpLeft">
                <h1>
                  WE TURN <br />
                  IDEAS INTO ART
                </h1>
                <p>Where creativity and ingenuity are mixed <br/>together at a high speed to produce marvelous results</p>
              </div>
              <div className="ellips">
                <img src="https://fissioncdn.nyc3.digitaloceanspaces.com/ellips lines.svg" />
              </div>
              <div className="circle">
                <img src="https://fissioncdn.nyc3.digitaloceanspaces.com/Ellipse 24.svg" />
              </div>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container>
              <div className="circle01">
                <img src="https://fissioncdn.nyc3.digitaloceanspaces.com/Ellipse 24.svg" />
              </div>
              <div className="dark">
                <img src="https://fissioncdn.nyc3.digitaloceanspaces.com/Ellipse.svg"/>
              </div>
              <div className="dark01">
                <img src="https://fissioncdn.nyc3.digitaloceanspaces.com/Ellipse.svg" />
              </div>
              <div className="waves">
                <img src="https://fissioncdn.nyc3.digitaloceanspaces.com/Wave.svg"/>
              </div>
              <div className="line">
                <img src="https://fissioncdn.nyc3.digitaloceanspaces.com/Line.svg"/>
              </div>
              <div className="line01">
                <img src="https://fissioncdn.nyc3.digitaloceanspaces.com/Line.svg"/>
              </div>
              <div className="ellips01">
                <img src="https://fissioncdn.nyc3.digitaloceanspaces.com/ellips lines.svg" />
              </div>
              <div className="banner-text animated rotateInUpLeft">
                <h1>
                  WE ENVISION <br />
                  YOUR IDEAS
                </h1>
                <p>Where creativity and ingenuity are mixed <br/>together at a high speed to produce marvelous results</p>
              </div>
              <div className="ellips">
                <img src="https://fissioncdn.nyc3.digitaloceanspaces.com/ellips lines.svg" />
              </div>
              <div className="circle">
                <img src="https://fissioncdn.nyc3.digitaloceanspaces.com/Ellipse 24.svg" />
              </div>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container>
              <div className="circle01">
                <img src="https://fissioncdn.nyc3.digitaloceanspaces.com/Ellipse 24.svg"/>
              </div>
              <div className="dark">
                <img src="https://fissioncdn.nyc3.digitaloceanspaces.com/Ellipse.svg"/>
              </div>
              <div className="dark01">
                <img src="https://fissioncdn.nyc3.digitaloceanspaces.com/Ellipse.svg" />
              </div>
              <div className="waves">
                <img src="https://fissioncdn.nyc3.digitaloceanspaces.com/Wave.svg" />
              </div>
              <div className="line">
                <img src="https://fissioncdn.nyc3.digitaloceanspaces.com/Line.svg" />
              </div>
              <div className="line01">
                <img src="https://fissioncdn.nyc3.digitaloceanspaces.com/Line.svg" />
              </div>
              <div className="ellips01">
                <img src="https://fissioncdn.nyc3.digitaloceanspaces.com/ellips lines.svg" />
              </div>
              <div className="banner-text animated rotateInUpLeft">
                <h1>
                  HELPING YOU
                  <br />
                  IN COST CUTTING
                </h1>
                <p>Where creativity and ingenuity are mixed <br/>together at a high speed to produce marvelous results</p>
              </div>
              <div className="ellips">
                <img src="https://fissioncdn.nyc3.digitaloceanspaces.com/ellips lines.svg"/>
              </div>
              <div className="circle">
                <img src="https://fissioncdn.nyc3.digitaloceanspaces.com/Ellipse 24.svg"/>
              </div>
            </Container>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>



<div className="Home-section">
<Container>
<Row>
<div className="trades">
  <Col xs={12}  sm={12}  md={5} lg={5}>
  <div className="master">
  <span></span>
  <h2>{message}</h2>
  <p>{name}</p>  
  </div>
  </Col>
  <Col xs={12} sm={12} md={7} lg={7}>
  <div className="team">
<span>

  <div className="our">
      <h2>{our}</h2>
    <img src="https://fissioncdn.nyc3.digitaloceanspaces.com/HIRE EXPERT TEAMS.svg"/>
    <h3>HIRE EXPERT TEAMS</h3>
      </div>
      <div className="our">
    <img src="https://fissioncdn.nyc3.digitaloceanspaces.com/COST EFFECTIVE SERVICE.svg"/>
    <h3>COST EFFECTIVE SERVICE</h3>
      </div>
      <div className="our">
    <img src="https://fissioncdn.nyc3.digitaloceanspaces.com/HIGHLY ADAPTABLE.svg"/>
    <h3>HIGHLY ADAPTABLE</h3>
      </div>
      </span>
  </div>
  </Col>

  </div>
</Row>

</Container>
</div>  

{/* <Services /> */}

<div className="extra-section">
<Container>
  <Row>
<Col xs={12} sm={12} md={5} lg={5}>
   <div className="what-we">
     <span></span>
     <h2>what we do</h2>
     <p>We provide state of art end to end IT solutions for clientele around the world. Right from designing a website from the scratch to rolling out an omni channel responsive mobile app, we do it all. Providing 24/7 support for e-commerce retailers, catalog management, marketing and sales support is our forte.</p>
   </div>
   </Col>
   <Col xs={12} sm={12} md={7} lg={7}></Col>
   </Row>
   </Container>
	<div
	  className={classNames(className, 'vertical-timeline', {
		'vertical-timeline--animate': animate,
		'vertical-timeline--two-columns': layout === '2-columns',
		'vertical-timeline--one-column': layout === '1-column',
	  })}
	>
	  {children}

 
	  <VerticalTimeline>

    <VerticalTimelineElement style={{ display:'none'}}> 

  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ border: '2px solid #fff', width:'37px', top: '55%' }}
    // date="2011 - present"
    iconStyle={{ backgroundImage: "url(" +"https://fissioncdn.nyc3.digitaloceanspaces.com/It.svg" + ")",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat' }}
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title" style={{color:'#8010FF'}}>IT Services</h3>
    {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
    <p>
	Who doesn’t love a good old app? From switching on lights to tuning musical instruments to speeding up your system, apps can do practically anything nowadays and you can have a piece of the app pie with our help. Here at Fission, our specialty is delivering fully functional mobile applications tailor-made for brands.
    </p>
	{/* <div class="img-holder"> <a class="sub_btn"><span class="sub_text"><p class="Sub_text">More</p></span></a> </div> */}
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    // date="2010 - 2011"
	iconStyle={{ backgroundImage: "url(" + "https://fissioncdn.nyc3.digitaloceanspaces.com/Webdesign.svg" + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat' }}
	contentArrowStyle={{ border: '2px solid #fff', width:'37px', top: '46%' }}
	
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title" style={{color:'#72BD1C'}}>Web Design</h3>
    {/* <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4> */}
    <p>
	It’s all about aesthetics. What looks good to us and appeals to us will always work. You don’t have to believe me, just look at the numbers and we all know numbers don’t lie. 38% of people won’t engage with a website they deem unattractive and if given 15 minutes to consume content, two-thirds of people would rather read something beautifully designed than something plain (source: Adobe). So, there you have it, aesthetics matter.
    </p>
	{/* <div class="img-holder"> <a class="sub_btn"><span class="sub_text"><p class="Sub_text">More</p></span></a> </div> */}
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
	// date="2008 - 2010"
	contentArrowStyle={{ border: '2px solid #fff', width:'37px', top: '55%'}}
    iconStyle={{ backgroundImage: "url(" + "https://fissioncdn.nyc3.digitaloceanspaces.com/Mobileapps.svg" + ")",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat' }}
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title" style={{color:'#0379C4'}}>Mobile Apps</h3>
    {/* <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4> */}
    <p>
	Who doesn’t love a good old app? From switching on lights to tuning musical instruments to speeding up your system, apps can do practically anything nowadays and you can have a piece of the app pie with our help. Here at Fission, our specialty is delivering fully functional mobile applications tailor-made for brands.
    </p>
	{/* <div class="img-holder"> <a class="sub_btn"><span class="sub_text"><p class="Sub_text">More</p></span></a> </div> */}
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    // date="2006 - 2008"
	iconStyle={{ backgroundImage: "url(" + "https://fissioncdn.nyc3.digitaloceanspaces.com/Webapps.svg" + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat' }}
	contentArrowStyle={{ border: '2px solid #fff', width:'37px', top: '50%' }}
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title" style={{color:'#FF6C2C'}}>Web Apps</h3>
    {/* <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4> */}
    <p>
	Don’t you just hate it when a website keeps crashing? Well, here at Fission we always create heavy hitting websites which can take on anything. It can even survive an artillery attack; we kid you not. Fission has the expertise, experience, and resources to deliver a full spectrum of Enterprise Application Integration and Application Development Services.
    </p>
    {/* <div class="img-holder"> <a class="sub_btn"><span class="sub_text"><p class="Sub_text">More</p></span></a> </div> */}
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    // date="April 2013"
	iconStyle={{ backgroundImage: "url(" + "https://fissioncdn.nyc3.digitaloceanspaces.com/digital.svg" + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat' }}
	contentArrowStyle={{ border: '2px solid #fff', width:'37px', top: '55%' }}
    // icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title" style={{color:'#8087E8'}}>Digital & Affiliate Marketing</h3>
    {/* <h4 className="vertical-timeline-element-subtitle">Online Course</h4> */}
    <p>
    Is your business not hitting the mark? Are you not able to climb up the ranks as fast as you want? You may be stuck in a muddy rut. Well, don’t worry, Fission is here to pick you up from that rut. We will snatch up your losses and earn you a win. Fission has top-notch marketers in its fold. With our expertise in providing business development,
    </p>
    {/* <div class="img-holder"> <a class="sub_btn"><span class="sub_text"><p class="Sub_text">More</p></span></a> </div> */}
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    // date="November 2012"
	iconStyle={{ backgroundImage: "url(" + "https://fissioncdn.nyc3.digitaloceanspaces.com/ecommerce.svg" + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat' }}
	contentArrowStyle={{ border: '2px solid #fff', width:'37px',top: '55%'}}
    // icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title" style={{color:'#F2992E'}}>E-commerce</h3>
    {/* <h4 className="vertical-timeline-element-subtitle">Certification</h4> */}
    <p>
    Dreaming of opening an online e-commerce store but don’t know where to start? Worry not, Fission is here to save the day. With our expert knowledge in the working of BigCommerce, Shopify, Magento, WooCommerce and Volusion and their intricacies, we can make your dreams come true.
    </p>
    {/* <div class="img-holder"> <a class="sub_btn"><span class="sub_text"><p class="Sub_text">More</p></span></a> </div> */}
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    // date="2002 - 2006"
	iconStyle={{ backgroundImage: "url(" + "https://fissioncdn.nyc3.digitaloceanspaces.com/cloud.svg" + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat' }}
	contentArrowStyle={{ border: '2px solid #fff', width:'37px', top: '55%' }}
    // icon={<SchoolIcon />}
    >
    <h3 className="vertical-timeline-element-title" style={{color:'#FF5EC3'}}>Cloud Support and DevOps</h3>
    {/* <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4> */}
    <p>
    Get the edge with the IT services offered by Fission. We have an In-house team of technical wizards hired from the best technical universities of India. Right from customised software development to developing legacy platform for your business, we do it all. Apart from that we offer 24/7 365 days support to your project irrespective of timezones.
    </p>
    {/* <div class="img-holder"> <a class="sub_btn"><span class="sub_text"><p class="Sub_text">More</p></span></a> </div> */}
  </VerticalTimelineElement>
  {/* <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    // icon={<StarIcon />}
  /> */}
</VerticalTimeline>
</div>
	</div>


{/* <div className="next-part">
<Container>
  <Row>
 <Col xs={12} sm={12} md={6} lg={6}>
   <div className="what">
     <span></span>
   <h3>what we do</h3>
   <p>We provide state of art end to end IT solutions for clientele around the world. Right from designing a website from the scratch to rolling out an omni channel responsive mobile app, we do it all. Providing 24/7 support for e-commerce retailers, catalog management, marketing and sales support is our forte.</p>
   </div>
 </Col>
  </Row>
</Container>

</div> */}

{/* <Create />
 */}



<Brands/>
{/* 
<div className="crazine01">
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
    // </div> */}
    <EmailSection />

  </div>);


// VerticalTimeline.propTypes = {
// 	children: PropTypes.oneOfType([
// 	  PropTypes.arrayOf(PropTypes.node),
// 	  PropTypes.node,
// 	]).isRequired,
// 	className: PropTypes.string,
// 	animate: PropTypes.bool,
// 	layout: PropTypes.oneOf(['1-column', '2-columns']),
//   };
  
//   VerticalTimeline.defaultProps = {
// 	animate: true,
// 	className: '',
// 	layout: '2-columns',
//   };


}
export default Home;



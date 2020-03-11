import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import './Brand.css';
import './Home.css';

function Brands(){
return<div>

<div className="ourbrands">
    <Container>
 <div className="craft">
      <span></span>
  <h2>OUR BRANDS</h2>
 </div>
 <Row>
    
 <Col xs="12" sm="12" md="6" lg="6">
 <div className="left-img">
 <div className="cross  animated bounceInUp">
            <h2>CODERS ON FIRE</h2>
            <p>Passionate coders hell-bent on providing tech support</p>
             <a class="sub_btn" href="https://codersonfire.com/" target="_blank"><span class="sub_text"><p class="Sub_text next-btn">Have a look</p></span></a>
             </div>  
             <div className="cross01  animated bounceInUp">
            <h2>One Page Landers</h2>
            <p>We shoot landing pages & we score leads</p>
             <a class="sub_btn" herf="https://onepagelanders.com/" target="_blank"><span class="sub_text"><p class="Sub_text next-btn">Have a look</p></span></a>
             </div>  
             <div className="cross02  animated bounceInUp">
            <h2>Cloud Support Hub</h2>
            <p>Meet master cloud movers and shapers</p>
             <a class="sub_btn" href="https://cloudsupporthub.com/" target="_blank"><span class="sub_text"><p class="Sub_text next-btn">Have a look</p></span></a>
             </div>        
               </div> 
</Col>


<Col xs="12" sm="12" md="6" lg="6">
<div className="right-img">
 <div className="cross-right  animated bounceInUp">
            <h2>Shopify Shoguns</h2>
            <p>We bring out the creative designer hidden inside you</p>
             <a class="sub_btn" href="https://shopifyshoguns.com/" target="_blank"><span class="sub_text"><p class="Sub_text next-btn">Have a look</p></span></a>
            </div> 
            <div className="cross-right01  animated bounceInUp">
            <h2>Seller Support</h2>
            <p>Gather your forces and grab a hold of our e-commerce developers</p>
             <a class="sub_btn" href="https://sellersupport.us/" target="_blank"><span class="sub_text"><p class="Sub_text next-btn">Have a look</p></span></a>
            </div> 
            <div className="cross-right02  animated bounceInUp">
            <h2>Pixel Revs</h2>
            <p>Revving up your marketing engine with our affiliate marketing support</p>
             <a class="sub_btn" href="https://pixelrevs.com/" target="_blank"><span class="sub_text"><p class="Sub_text next-btn">Have a look</p></span></a>
            </div> 
            </div>
</Col>  
 </Row>            
    </Container>

    
</div>
</div>

}
export default Brands;
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
class Footer extends React.Component {
  render() {
    return (
      <div>
        <div className="footer-part">
          <Container>
            <div className="footer-area">
              <Row>
                <Col xs={12} col sm={12} col md={3} col lg={3}>
                  <div className="us-part">
                    <h2>Contact Us</h2>
                    <h6>US Office</h6>
                    <p>
                      FISSION INC <br />
                      4730 S Fort Apache Rd, Suite 300,  <br />
                      Las Vegas,
                      Nevada 89147.  <br />
                      Phone: +1 (650) 285-3738
                    </p>
                    <h6>Indian Office</h6>
                    <p>
                      FISSION INC  <br />
                      Nasuja building, H.No. 1-89/G/36, <br />
                      Plot No. 36, Shilpi Valley,<br /> 
                      Opp. Quiescent Heights, Madhapur,
                      Hyderabad-500081 Telangana, India. <br />
                      Phone: +91 (040)
                      43464555
                    </p>
                  </div>
                </Col>
                <Col xs={12} col sm={12} col md={3} col lg={2}>
                  <div className="us-part">
                    <h2>Products</h2>
                    <p>
                      <a target="_blank" href="https://customapp.io/">CustomApp</a>
                    </p>
                    <p>
                      <a target="_blank" href="https://shadow.properties/">ShadowProperties</a>
                    </p>
                  </div>
                </Col>
                <Col xs={12} col sm={12} col md={2} col lg={2}>
                  <div className="us-part">
                    <h2>Our Brands</h2>
                    <p>
                      <a target="_blank" href="https://codersonfire.com/">CodersOnFire</a>
                    </p>
                    <p>
                      <a target="_blank" href="https://onepagelanders.com/">OnePageLanders</a>
                    </p>
                    <p>
                      <a target="_blank" href="https://cloudsupporthub.com/">CloudSupportHub</a>
                    </p>
                    <p>
                      <a target="_blank" href="https://shopifyshoguns.com/">ShopifyShoguns</a>
                    </p>
                    <p>
                      <a target="_blank" href="https://sellersupport.us/">SellerSupport</a>
                    </p>
                    <p>
                      <a target="_blank" href="https://pixelrevs.com/">PixelRevs</a>
                    </p>
                  </div>
                </Col>
                <Col xs={12} col sm={12} col md={3} col lg={3}>
                  <div className="us-part">
                    <h2>Services</h2>
                    <p>
                      <a href="#">IT Staffing & Augmentation</a>
                    </p>
                    <p>
                      <a href="#">Business Intelligence</a>
                    </p>
                    <p>
                      <a href="#">AI</a>
                    </p>
                    <p>
                      <a href="#">Design Services</a>
                    </p>
                    <p>
                      <a href="#">Cloud Services</a>
                    </p>
                    <p>
                      <a href="#">Digital Marketing</a>
                    </p>
                    <p>
                      <a href="#">Application Development</a>
                    </p>
                    <p>
                      <a href="#">E-Commerce CMS Support</a>
                    </p>
                    <p>
                      <a href="#">Digital Marketing</a>
                    </p>
                  </div>
                </Col>
                <Col xs={12} col sm={12} col md={2} col lg={2}>
                  <div className="us-part">
                    <h2></h2>
                    <p>
                      <a href="#">Enterprise Software Support</a>
                    </p>
                    <p>
                      <a href="#">Application Development</a>
                    </p>
                    <p>
                      <a href="#">Cloud Services</a>
                    </p>
                    <p>
                      <a href="#">E-Commerce CMS Support</a>
                    </p>
                    <p>
                      <a href="#">Enterprise Software Support</a>
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className="footer-bottom">
          <Container>
            <Row>
            
              <Col xs={12} sm={12} md={12} lg={12}>
              <div className="copy">
                <p>Copyright © {(new Date().getFullYear())} Fission. All rights reserved.</p>
              </div>
              <div className="icons">
              <a href="https://www.linkedin.com/company/fissioninc/"><img src="https://fissioncdn.nyc3.digitaloceanspaces.com/iconmonstr-linkedin-3.svg"/></a>
              <a href="https://twitter.com/FissionInfotech"><img src="https://fissioncdn.nyc3.digitaloceanspaces.com/iconmonstr-twitter-1.svg" /></a> 
              <a href="https://www.facebook.com/fissioninfotech/"><img src="https://fissioncdn.nyc3.digitaloceanspaces.com/iconmonstr-facebook-1.svg" /></a>
              </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
export default Footer;

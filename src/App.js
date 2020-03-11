import React from "react";
import { Route, Nav, Switch,Redirect,   BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Careers from "./components/Careers";
// import Team from './components/Team';
// import Industries from "./components/Industries";
// import Resources from "./components/Resources";
import Blog from "./components/Blog";
// import About from "./components/About";
// import "./images/Fission_Logo.svg";
import Nav001 from "./components/Navbar/Nav";
import Footer from "./Footer";


function App() {
  var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/5de901d0d96992700fcae6f5/default';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
  return (
    <Router>
      <div>
        <Nav001 />
        <Switch>
        <Route path="/" exact={true} component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/about" component={About} />
          <Route path="/careers" component={Careers} />
          {/* <Route path="/Team" component={Team} /> */}
          <Route path="/contact" component={Contact} />
          {/* <Route path="/Resources" component={Resources} />*/}
          <Route path="/blog" component={Blog} />
          {/* <Route path="/About" component={About} />  */}
          {/* <Redirect to="/home"  /> */}
        </Switch>
  
      </div>
      {/* <EmailSection /> */}
      <Footer />
    </Router>
    
  );

}
export default App;

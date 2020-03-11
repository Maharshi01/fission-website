import React from 'react';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';

class Nav001 extends React.Component {

constructor(props){
    super(props);
    this.state = { 
         clickMenu:false,
        aboutstate:false,
        servicestate:false,
        carrerstate:false,
        teamstate:false,
        contactstate:false,
        bookacallstate:false,
        color:String(window.location.href).includes("/services")?"white":(String(window.location.href).includes("/about")?"white":(String(window.location.href).includes("/careers")?"white":(String(window.location.href).includes("/contact")?"white":(String(window.location.href).includes("/blog")?"white":"#E2FF10")))),
        // "#E2FF10":"white",
        boxShadow:String(window.location.href).includes("/services")?"7px 4px 12px 0px #ccc":(String(window.location.href).includes("/about")?"7px 4px 12px 0px #ccc":(String(window.location.href).includes("/careers")?"7px 4px 12px 0px #ccc":(String(window.location.href).includes("/contact")?"7px 4px 12px 0px #ccc":(String(window.location.href).includes("/blog")?"7px 4px 12px 0px #ccc":"0px 0px 0px 0px #888")))),
        // boxShadow: String(window.location.href).includes("/home")?"0px 0px 0px 0px #ccc":"7px 4px 12px 0px #666"
    };
}

clickMenu() {
    this.setState({
        clickMenu: !this.state.clickMenu
    });  
}

about_func(){
    console.log("helooooS")
    this.setState({
        aboutstate: true,
        servicestate:false,
        carrerstate:false,
        teamstate:false,
        contactstate:false,
        bookacallstate:false,
        color:'#fff',
        
    }); 
}
about_func1(){
    // console.log("helooooS")
    this.setState({
        aboutstate: true,
        servicestate:false,
        carrerstate:false,
        teamstate:false,
        contactstate:false,
        bookacallstate:false,
        color:'#E2FF10'
    }); 
}
service_func(){
    this.setState({
        servicestate: true,
        aboutstate:false,
        carrerstate:false,
        teamstate:false,
        contactstate:false,
        bookacallstate:false,
        color:'#fff'
        
      //  backgroundcolor:'#ffc107'
    });  
}
carrer_func(){
    this.setState({
        servicestate: false,
        aboutstate:false,
        carrerstate:true,
        teamstate:false,
        contactstate:false,
        bookacallstate:false,
        color:'#fff',
    });  
}
team_func(){
    this.setState({
        servicestate: false,
        aboutstate:false,
        carrerstate:false,
        teamstate:true,
        contactstate:false,
        bookacallstate:false
        

    });  
}
contact_func(){
    this.setState({
        servicestate: false,
        aboutstate:false,
        carrerstate:false,
        teamstate:false,
        contactstate:true,
        bookacallstate:false,
        color:'#fff',
    });  
}
bookcall_func(){
    this.setState({
        servicestate: false,
        aboutstate:false,
        carrerstate:false,
        teamstate:false,
        contactstate:false,
        bookacallstate:true,
        color:'#fff',
    });
}
home_func(){
    this.setState({
        servicestate: false,
        aboutstate:false,
        carrerstate:false,
        teamstate:false,
        contactstate:false,
        bookacallstate:false
    });
}

//window.location.href

   render(props) {
    //    console.log(this.props,"navbar props")
    //    console.log(this.props.location,"NAVBAR LOCATIION")
    //    console.log(window.location.href,"WINDOW LOCATIION")
    //    if(String(window.location.href).includes("/home")){
    //        console.log("success")
    //    }
    //    else{
    //        console.log("Fail")
    //    }
      return (
            <div className="header" style={{ backgroundColor:this.state.color}}>  
                {/* Navbar for desktop devices */}
                <div className="desktop_nav">
                    <nav style={{
         boxShadow:String(window.location.href).includes("/services")?"7px 4px 12px 0px #ccc":(String(window.location.href).includes("/about")?"7px 4px 12px 0px #ccc":(String(window.location.href).includes("/careers")?"7px 4px 12px 0px #ccc":(String(window.location.href).includes("/contact")?"7px 4px 12px 0px #ccc":(String(window.location.href).includes("/blog")?"7px 4px 12px 0px #ccc":"0px 0px 0px 0px #888")))),

                    }} className="nav_bar">  
                                            
                        <ul className="nav_links">
                        <NavLink to="/home" className="menu_items" activeClassName="about_active" onClick={this.about_func1.bind(this)}>
                               <span><p>Home</p></span>
                            </NavLink>
                            <NavLink to="/about" className="menu_items" activeClassName="about_active" onClick={this.about_func.bind(this)}>
                               <span><p>About</p></span>
                            </NavLink>
                            <NavLink to="/services" className="menu_items" activeClassName="about_active" onClick={this.service_func.bind(this)}>
                                <span><p>Services</p></span>
                            </NavLink>
                            
                            {/* <NavLink to="/Team" className="menu_items" activeClassName="about_active" onClick={this.team_func.bind(this)}>
                                <span><p>Team</p></span>
                            </NavLink> */}
                            
                        </ul>

                        <ul className="logo">
                        <img className="fission_logo" src={require("../../images/Fission_Logo.svg") } />
                            {/* <NavLink to="/" onClick={this.home_func.bind(this)}>
                                
                                  
                               
                            </NavLink> */}
                        </ul> 
                        
                        {/* <ul className="nav_links nav_links01">
                            <NavLink to="/Industries" className="menu_items">
                                <li><span><p>Industries</p></span></li>
                            </NavLink>
                            <NavLink to="/Resources" className="menu_items">
                                <li><span><p>Resources</p></span></li>
                            </NavLink>
                            <NavLink to="/Blog" className="menu_items menu-book" activeClassName="about_active" onClick={this.bookcall_func.bind(this)}>
                               <span><p>Book A Call</p></span>
                            </NavLink>
                            <NavLink to="/About" className="menu_items">
                                <li><span><p>About</p></span></li>
                            </NavLink>
                        </ul> */}
                        <ul className="nav_links">
                            <NavLink to="/contact" className="menu_items" activeClassName="about_active" onClick={this.contact_func.bind(this)}>
                                <span><p>Contact us</p></span>
                            </NavLink>
                            <NavLink to="/careers" className="menu_items" activeClassName="about_active" onClick={this.carrer_func.bind(this)}>
                               <span><p>Careers</p></span>
                            </NavLink>
                            
                            <NavLink to="#" className="menu_items menu-book" onClick={this.bookcall_func.bind(this)}>
                               <span><p>Blog</p></span>
                            </NavLink>
                            {/* <NavLink to="/Industries" className="menu_items">
                                <li><span><p>Industries</p></span></li>
                            </NavLink>
                            <NavLink to="/Resources" className="menu_items">
                                <li><span><p>Resources</p></span></li>
                            </NavLink>
                          
                            <NavLink to="/About" className="menu_items">
                                <li><span><p>About</p></span></li>
                            </NavLink> */}
                        </ul>
                    </nav>
                </div> {/* End of Navbar for desktop devices */}


                {/* Navbar for mobile devices */}
                <div className="mobile_nav">
                    <div className="nav_bar mobile_logo_header">
                        <ul className="logo">
                            <Link to="/">
                                <li>
                                <img className="fission_logo" src={require("../../images/Fission_Logo.svg") } />
                                </li>
                            </Link>
                        </ul>
                        <div className="btn" onClick={this.clickMenu.bind(this)}>
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </div>
                    </div>
                {this.state.clickMenu == true ? (
                    <div className="mbl_nav_list">
                        <ul className="mbl_nav_links">
                        <Link to="/About" className="menu_items" onClick={this.clickMenu.bind(this)}>
                                <li><span><p>About</p></span></li>
                            </Link>
                            <Link to="/Services" className="menu_items" onClick={this.clickMenu.bind(this)}>
                                <li><span><p>Services</p></span></li>
                            </Link>
                            <Link to="/Careers" className="menu_items" onClick={this.clickMenu.bind(this)}>
                                <li><span><p>Careers</p></span></li>
                            </Link>
                            {/* <Link to="/Team" className="menu_items">
                                <li><span><p>Team</p></span></li>
                            </Link> */}
                            <Link to="/Contact" className="menu_items" onClick={this.clickMenu.bind(this)}>
                                <li><span><p>Contact Us</p></span></li>
                            </Link>
                            <li><span><p>Blog</p></span></li>
                            {/* <Link to="/Blog" className="menu_items" >
                                <li><span><p>Blog</p></span></li>
                            </Link> */}
                        </ul>
                    </div>
                     ) : (<p style={{ marginBottom:'0%'}}></p>)}
                </div> 
               
                    
            </div>
        );
    }
}
 export default Nav001;
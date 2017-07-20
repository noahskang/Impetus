import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

  loginOrOut(){
    if(this.props.currentUser){
      return(<button className="site-nav-item" onClick={this.props.logout}>LOG OUT</button>);
    }else{
      return(<Link className="site-nav-item" to="/login">LOG IN</Link>);
    }
  }

  render(){
    return(
      <nav className="navbar">
        <div className="leftnav">
            <a className="site-nav-item" id="explore">EXPLORE</a>
            <a className="site-nav-item" id="about-us">ABOUT US</a>
        </div>
        <div className="centernav">
          <a className="nav-logo site-nav-item" href="/">
            <img className="logo" src="http://res.cloudinary.com/noah-s-kang/image/upload/v1500577997/impetus_logo_wndm0c.svg"/>
          </a>
        </div>
        <div className="rightnav">
          {this.loginOrOut()}
          <a className="site-nav-item" id="start-a-project">START A PROJECT</a>
        </div>
      </nav>
    );
  }

}

export default NavBar;

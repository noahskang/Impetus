import React from 'react';
import SearchContainer from '../search/search_container';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

  loginOrOut(){
    if(this.props.currentUser){
      return(<button className="site-nav-item" onClick={this.props.logout} id="log-out">LOG OUT</button>);
    }else{
      return(<Link className="site-nav-item" to="/login">LOG IN</Link>);
    }
  }

  showIfLoggedIn(){
    if(this.props.currentUser){
      return(<Link className="site-nav-item" id="my-projects" to="/user/projects">ME</Link>);
    }
  }
        //
        // <a className="site-nav-item" id="explore">EXPLORE</a>
  render(){
    return(
      <nav className="navbar">
        <div className="leftnav">
            <a className="nav-logo site-nav-item" href="/">
              <img className="logo" src="http://res.cloudinary.com/noah-s-kang/image/upload/v1500577997/impetus_logo_wndm0c.svg"/>
            </a>
        </div>
        <div className="centernav">
          <SearchContainer />
        </div>
        <div className="rightnav">
          <div className="explore-logo">
            <Link className="site-nav-item" to="/categories">
              <img className="explore" src="http://res.cloudinary.com/noah-s-kang/image/upload/v1501275950/compass-icon-3_ixdm3h.svg"/>
            </Link>
          </div>
          {this.loginOrOut()}
          {this.showIfLoggedIn()}
          <Link className="site-nav-item" id="start-a-project" to="/projects/new">START A PROJECT</Link>
        </div>
      </nav>
    );
  }

}

export default NavBar;

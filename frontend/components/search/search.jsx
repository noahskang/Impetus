import React from 'react';
import { Link, withRouter } from 'react-router';

class SearchBar extends React.Component{
  constructor(props){
    super(props);

    this.handleKeySubmit = this.handleKeySubmit.bind(this);
    this.handleClickSubmit = this.handleClickSubmit.bind(this);
    this.state={
      value: ""
    };
  }

  update(field){
    return e=>this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleKeySubmit(e) {
    if(e.keyCode == 13){
      this.props.history.push(`/search/${this.state.value}/`);
    }
  }

  handleClickSubmit(e){
    e.preventDefault();
    this.props.history.push(`/search/${this.state.value}/`);
  }

  render(){
    return(
      <div className="search-bar-container">
        <div className="search-bar-form">
          <div className="search-bar">
            <input type="text" id="search-input" placeholder="Search by title" onChange={this.update('value')} onKeyDown={this.handleKeySubmit}/>
            <input type="image" id="search-button" src="http://res.cloudinary.com/noah-s-kang/image/upload/c_scale,w_66/v1501189302/magnifying-glass_hlagww.svg" onClick={this.handleClickSubmit}/>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SearchBar);

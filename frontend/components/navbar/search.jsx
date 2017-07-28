import React from 'react';
import { Link, withRouter } from 'react-router';

class SearchBar extends React.Component{
  constructor(props){
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.state={
      value: ""
    };
  }

  update(field){
    return e=>this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    // this.props.history.push(`/search/${this.state.value}/`);
  }

  render(){
    return(
      <div className="search-bar-container">
        <form className="search-bar-form" onSubmit={this.handleSubmit()}>
          <div className="search-bar">
            <input type="text" id="search-input" placeholder="Search by title" onChange={this.update('value')}/>
            <input type="image" id="search-button" src="http://res.cloudinary.com/noah-s-kang/image/upload/c_scale,w_66/v1501189302/magnifying-glass_hlagww.svg" onClick={this.handleSubmit}/>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SearchBar);

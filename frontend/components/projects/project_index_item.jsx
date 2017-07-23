import React from 'react';

class IndexItem extends React.Component{

  constructor(props){
    super(props);
    this.project = this.props.project;
  }

  percentFunded(){
    return(Math.floor((this.project.funding_raised/this.project.funding_goal)*100));
  }

  daysToGo(){
    let diff =  Math.floor(( new Date() - Date.parse(this.project.end_date) ) / 86400000);
    return diff;
  }

  render(){

    return(
      <div className="project-index-item col-full col-sm-12-24 col-lg-8-24">
        <h2>{this.project.category}</h2>
        <h2>{this.project.id}</h2>
        <img src={this.project.image_url}/>
        <br/>
        <h1>{this.project.title} : {this.project.desscription}</h1>
        by {this.project.creator}
        <br/>
        {this.project.funding_raised} pledged
        <br/>
        {this.percentFunded()} funded
        <br/>
        {this.daysToGo()} Days to go
      </div>
    );
  }
}

export default IndexItem;

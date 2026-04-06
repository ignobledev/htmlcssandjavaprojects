import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title,description} = this.props;
    return (
      <div>
        <div className="card" style={{width:"18rem"}}>
    
    
     
  <img src="https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/cb54/live/d0fb1690-2f88-11f1-b0ca-a99b54ea6f34.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{ title}</h5>
    <p className="card-text">{description}</p>
    <a href="/newsdetails" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
      </div>
    )
  }
}

export default Newsitem

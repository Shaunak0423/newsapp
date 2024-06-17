import React, { Component } from 'react';


export default class NewsItem extends Component {
  render() {
    let {title, description, imgurl, newsurl} = this.props;
    return (
      <div>
        <div className="card my-2" >
  <img src={!imgurl ? "sub-img.jpg" : imgurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{!description ? "loading description..." : description }...</p>
    <a href= {newsurl} className="btn btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

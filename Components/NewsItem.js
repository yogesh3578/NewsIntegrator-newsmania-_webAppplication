import React from "react";

const NewsItem = (props) => {
  let { title, description, imgurl, newsurl } = props;
  return (
    <div className="container flex">
      <div className="card flex">
        <a href={newsurl} target="_blank">
          <img
            src={imgurl}
            className="card-img-top"
            alt="..."
            style={{ height: "220px", cursor: "pointer" }}
          />
        </a>
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text" style={{ height: "49px" }}>
            {description}...
          </p>
          <a href={newsurl} target="_blank" className="btn btn-dark">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
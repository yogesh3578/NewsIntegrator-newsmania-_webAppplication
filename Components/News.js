import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [article, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [totalResult, settotalresults] = useState(0);

  const updatenews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=ad6c42721fb444f5a6838ba9821d3afa&page=${page}`;
    //0d2f103ebce9478f93947ab18af8d0af &apikey 
    setLoading(true);
    let data = await fetch(url);
    let passedData = await data.json();

    setLoading(false);

    setArticles(passedData.articles);
    settotalresults(passedData.totalResults);
    setTotal(passedData.totalResults);
  };

  useEffect(() => {
    updatenews();
  }, []);

  
  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=0d2f103ebce9478f93947ab18af8d0af&page=${
      page + 1
    }`;
    setPage(page + 1);

    let data = await fetch(url);
    let passedData = await data.json();
    setArticles(article.concat(passedData.articles));
    settotalresults(passedData.totalResults);
  };

  return (
    <div className="container my-5 pt-5">
      {/* {this.state.loading && <Spinner />} */}

      <InfiniteScroll
        dataLength={article ? article.length : 0} // Add a check for article before accessing its length
        next={fetchMoreData}
        hasMore={article ? article.length < total : false} // Add a check for article before accessing its length
        loader={<Spinner />}
        style={{ overflow: "hidden" }}
      >
        <div className="row">
          {article &&
            article.map((ele, index) => {
              return (
                <div className="col-md-4 my-3" key={index}>
                  <NewsItem
                    title={ele.title ? ele.title.slice(0, 44) : ele.title}
                    description={
                      ele.description
                        ? ele.description.slice(0, 88)
                        : ele.description
                    }
                    imgurl={
                      ele.urlToImage
                        ? ele.urlToImage
                        : "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F3ca73cff-3a95-463c-ba79-75c20d07e7b8.jpg?source=next-opengraph&fit=scale-down&width=900"
                    }
                    newsurl={ele.url}
                  />
                </div>
              );
            })}
        </div>
      </InfiniteScroll>

      {/* <div className="conatiner d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            className="btn btn-primary"
            onClick={this.makeaprev}
            type="button"
          >
            &larr;Previous
          </button>
          <button
            disabled={this.state.remianpage < 20}
            className="btn btn-primary"
            onClick={this.makeanext}
            type="button"
          >
            Next &rarr;
          </button>
        </div> */}
    </div>
  );
};
News.defaultProps = {
  country: "in",
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
};

export default News;
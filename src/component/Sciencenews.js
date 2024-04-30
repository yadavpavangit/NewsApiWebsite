import React, { useState, useEffect } from "react";
import Axios from "axios";

function Sciencenews() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(
          "https://inshortsapi.vercel.app/news?category=	science"
        );
        setNewsData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4" style={{margin: "6rem"}}>Science News</h1>
      <div className="row">
        {newsData.map((newsItem) => (
          <div key={newsItem.url} className="col-12 col-sm-6 col-md-4 mb-4">
            <div className="card h-100 card-hover">
              <img
                style={{ height: "200px" }}
                src={newsItem.imageUrl}
                className="card-img-top img-fluid rounded"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title">
                  {newsItem.title}{" "}
                  {newsItem.isBreaking && (
                    <i className="fas fa-bolt text-warning"></i>
                  )}
                </h5>
                <p className="card-text">{newsItem.content}</p>
                <p>
                  <i className="far fa-user me-2"></i>
                  {newsItem.author}
                </p>
                <p>
                  <i className="far fa-clock me-2"></i>
                  {newsItem.date}
                </p>
              </div>
              <div className="card-footer text-center">
                <a
                  href={newsItem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sciencenews;

import Carousel from "react-bootstrap/Carousel";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import { NavLink } from "react-router-dom";

function Slider() {
  return (
    <div>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block" style={{width: "100%", height: "2%"}}
            src="https://source.unsplash.com/1000x400/?newspaper"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/1000x400/?newspapers"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/1000x400/?news"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

function Banner() {
  return (
    <div className="banner-container" style={{ textAlign: "center" }}>
      <h2>Welcome to Our News Website!</h2>
      <p>Stay updated with the latest news and events.</p>
    </div>
  );
}

function FetchApi() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(
          "https://inshortsapi.vercel.app/news?category=national"
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
      <h1 className="text-center mb-4">Latest News</h1>
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

function Footer() {
  return (
    <>
      <footer className=" bg-light text-dark">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-4">
              <h5>About Us</h5>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint,
                omnis non! Eaque ex est totam excepturi modi reprehenderit
                quibusdam pariatur, aperiam placeat?
              </p>
            </div>
            <div className="col-md-4">
              <h5>Quick Links</h5>
              <div className="row">
                <div className="col-sm-6">
                  <ul className="navbar-nav me-lg-auto my-2  my-lg-0 navbar-nav-scroll">
                    <li className="nav-item">
                      <NavLink to="/" className="nav-link">
                        National
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/business" className="nav-link">
                        Business
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/sports" className="nav-link">
                        Sports
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink to="/world" className="nav-link">
                        World
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/politics" className="nav-link">
                        Politics
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-6">
                  <ul className="list-unstyled"></ul>

                  <li className="nav-item">
                    <NavLink to="/technology" className="nav-link">
                      Technology
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/startup" className="nav-link">
                      Startup
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/entertainment" className="nav-link">
                      Entertainment
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink to="/miscellaneous" className="nav-link">
                      Miscellaneous
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/science" className="nav-link">
                      Science
                    </NavLink>
                  </li>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <h5>Contact Us</h5>
              <address>
                Infolabz
                <br />
                Navranpura
                <br />
                india
                <br />
              </address>
            </div>
          </div>
          <hr />
          <div className="text-center">
            <p>&copy; 2023 Your News Website. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Slider;
export { FetchApi, Footer, Banner };

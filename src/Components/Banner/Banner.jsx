import React, { useState, useEffect } from "react";
import axios from "../../axios";
import requests from "../../request";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

import "./Banner.css";

const imgBaseURL = "https://image.tmdb.org/t/p/original";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  const [isInfo, setIsInfo] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        data.results[Math.floor(Math.random() * data.results.length - 1)]
      );
    };
    fetchData();
  }, []);

  const truncate = (str, n) => {
    console.log("hey");
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  const handleClick = (data) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      console.log(data);
      movieTrailer(
        data.name || data?.original_title || data.original_name || ""
      )
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => {
          alert("Trailer not found");
          console.log(error);
        });
    }
  };
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(${imgBaseURL}${movie?.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="banner__contents">
        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
        <p className="movie__overview">
          {isInfo ? movie.overview : truncate(movie.overview, 150)}
        </p>
        <div className="banner_btns">
          <button className="btn_play">
            <i className="fa fa-play"></i> Play
          </button>
          <button className="btn_moreinfo" onClick={() => setIsInfo(true)}>
            <i className="fa fa-info-circle"></i> More Info
          </button>
        </div>
      </div>
      <div className="fade__bottom"></div>
    </header>
  );
};

export default Banner;

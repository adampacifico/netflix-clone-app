import React, { useState, useEffect } from "react";
import axios from "../../axios";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import "./Row.css";

const imgBaseURL = "https://image.tmdb.org/t/p/w500";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await axios.get(fetchUrl);

      setMovies(data.results);
      return data;
    };
    fetchMovies();
  }, [fetchUrl]);

  const opts = {
    height: "500",
    width: "95%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (data) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      console.log(data)
      movieTrailer( data.name || data?.original_title || data.original_name || "")
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
    <div className="row">
      <p>{title}</p>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow ? "largeRow" : ""}`}
            key={movie.id}
            src={`${imgBaseURL}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
          ></img>
        ))}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}></Youtube>}
    </div>
  );
};

export default Row;

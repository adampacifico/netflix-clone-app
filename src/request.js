const API_KEY =  "ba9f11365cd938adf59ab6229ea00219";

const requests = {
    fetchTrending : `/trending/all/week?api_key=${API_KEY}&language=en=us`,
    fetchNetflixOriginals : `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated : `/movie/top_rated?api_key=${API_KEY}&language=en=us`,
    fetchActionMovies : `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fecthComedyMovies : `/discover/tv?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies : `/movie/top_rated?api_key=${API_KEY}&with_genres=27`,
    fetchPopularMovies : `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  
    // https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
    // https://api.themoviedb.org/3/trending/all/week?api_key=ba9f11365cd938adf59ab6229ea00219&language=en=us
  }
  
  export default requests;
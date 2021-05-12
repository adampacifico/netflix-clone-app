import './App.css';
import request from './request'
import Row from './Components/Row/Row'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row  title="NETFLIX ORIGINALS" isLargeRow fetchUrl={request.fetchNetflixOriginals}/>
      <Row  title="TOP RATED" fetchUrl={request.fetchTopRated}/>
      <Row  title="TRENDING NOW" fetchUrl={request.fetchTrending}/>
      <Row  title="MOST POPULAR" fetchUrl={request.fetchPopularMovies}/>
      <Row  title="COMEDY MOVIES" fetchUrl={request.fecthComedyMovies}/>
      <Row  title="ACTION MOVIES" fetchUrl={request.fetchActionMovies}/>
      <Row  title="HORROR MOVIES" fetchUrl={request.fetchHorrorMovies}/>
      <Footer />
    </div>
  );
}

export default App;

import {useState, useEffect} from 'react'
import MovieCard from  './MovieCard';

const Movies = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);

  useEffect(()=>{
    const url = 'https://yts.mx/api/v2/list_movies.json';
    fetch(url).then(res=> {
      if(res.ok) {
        return res.json();
      }
      throw res;
    }).then(data=>{
      setMovies(data.data.movies);
    }).catch(error => {
      console.log('Fetch Error: ',error);
      setError(error);
    }).finally(()=> {
      setLoading(false);
    })
  },[])
  if(loading) return(<><h1 className="font-bold text-2xl tracking-wide text-white">Loading...</h1></>)
  if(error) return (<>{error}</>)
  return (
    <div className="grid grid-cols-4 gap-4">
     {movies.map((movie,index)=> {
       return <MovieCard title={movie.title} image={movie.medium_cover_image} year={movie.year} rating={movie.rating} description={movie.summary} />
     })}
    </div>
  )
}

export default Movies

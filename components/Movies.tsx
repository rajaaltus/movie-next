import {useState, useEffect} from 'react'
import MovieCard from  './MovieCard';
import PageTitle from './PageTitle';

const Movies = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  function handleNext({pageNumber}) {
    setPage(pageNumber)
    console.log(page)
  }
  useEffect(()=>{
    
    const url = `https://yts.mx/api/v2/list_movies.json?limit=20&sort_by=date_added&page=${page}`;
    fetch(url).then(res=> {
      setLoading(true);
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
  },[page])
  if(loading) return(<><h1 className="font-bold text-2xl tracking-wide text-white">Loading...</h1></>)
  if(error) return (<>{error}</>)
  return (
    <div>
      <PageTitle title="Recents" currentPage={1} onNext={()=>setPage(page+1)} onPrev={()=>{if(page>1)setPage(page-1)}} />
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
     {movies.map((movie,index)=> {
       return <MovieCard key={index} id={movie.id} title={movie.title} image={movie.medium_cover_image} year={movie.year} rating={movie.rating} description={movie.summary} />
      })}
    </div>
      </div>
  )
}

export default Movies

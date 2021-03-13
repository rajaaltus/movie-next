

const movie = ({movie}) => {
  return (
    <div className="w-full min-h-screen bg-indigo-800">
      <div className="md:flex md:items-start md:justify-between w-full lg:max-w-4xl md:space-x-4 px-4 md:mx-auto py-8">
        <div className="w-full md:w-2/6 rounded-lg shadow-lg overflow-hidden">
          <img className="w-full object-cover" src={movie.large_cover_image} alt={movie.title} />
        </div>
        <div className="w-full mt-4 md:mt-0 md:w-4/6">
          <span className="text-indigo-100 text-sm font-medium leading-tight">{movie.year}</span>
          <h1 className="text-4xl font-bold text-white pb-2">{movie.title}</h1>
          <ul className="flex items-center justify-start space-x-2 text-white">
            {movie.genres.map((genre,index)=>{
              return <li className="py-1 px-4 bg-green-400 rounded-full text-xs capitalize" key={index}>{genre}</li>
            })}
          </ul>
          <span className="py-2 text-yellow-500 text-sm flex items-center">
            <svg className="w-6 h-6 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg> {movie.rating}
          </span>
          
          <p className="text-sm py-3 font-normal text-indigo-100">{movie.description_intro}</p>
          <div className="flex items-center justify-start space-x-2">
            {movie.torrents.map((item, index)=>{
              return <a className="px-4 py-2 bg-green-600 rounded-sm shadow-md hover:bg-green-700 hover:shadow-none text-white text-md font-medium" href={item.url} key={index}>{item.quality}</a>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}



export const getStaticPaths = async () => {
  const res = await fetch(`https://yts.mx/api/v2/list_movies.json?limit=20&sort_by=date_added&page=1`);
  const data = await res.json();
  const movies = data.data.movies;

  const ids = movies.map((movie) => movie.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false
  }
}
export const getStaticProps = async (context) => {
  const res = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${context.params.id}`);
  const data = await res.json();
  const movie = data.data.movie;
  return {
    props: {
      movie
    }
  }
}
export default movie

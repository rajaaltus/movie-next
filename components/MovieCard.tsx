
type MovieProps = {
  title: string,
  image: string,
  year: number,
  rating: number,
  description: string
}

const MovieCard= ({title,image,year, rating, description}:MovieProps) => {
  return (
    <>
     <div className="w-full h-full bg-purple-700 rounded-lg shadow-md overflow-hidden pb-2">
       <img className="" src={image} alt={title} />
       <div className="px-2 py-1">
       <span className="text-sm text-indigo-100">{year}</span>
       <h1 className="text-white text-lg truncate">{title}</h1>
       <span className="flex items-center text-sm text-indigo-200">
        <svg className="w-4 h-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        {rating}
        </span>
       </div>
     </div> 
    </>
  )
}

export default MovieCard

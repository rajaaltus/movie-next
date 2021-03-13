import Movies from '../components/Movies'
import Paginate from '../components/Paginate';

const recents = () => {
  
  return (
    <div>
      <div className="w-full h-full bg-indigo-800 flex items-center justify-center">
        <div className="px-4 py-8 lg:max-w-6xl mx-auto">
          <Movies currentPage={1} />
          <div className="w-full py-6 flex items-center justify-center">
            <Paginate />
          </div>
        </div>
      </div>
    </div>
  )
}

export default recents

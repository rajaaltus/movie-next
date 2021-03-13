
const PageTitle = (props) => {
  function next() {
    props.onNext({pageNumber: props.currentPage+1})
  }
  function prev() {
    props.onPrev({pageNumber: props.currentPage-1})
  }
  return (
    <>
     <div className="flex items-center justify-between py-4">
      <div className="w-1/2">
        <h1 className="font-semibold text-xl">{props.title}</h1>
      </div>
      <div className="w-1/2 flex items-center justify-end">
        <button onClick={prev} className="px-4 text-xs py-2 bg-indigo-600 rounded-l-md focus:outline-none focus:bg-indigo-700 text-white hover:bg-indigo-700">Prev</button>
        <button onClick={next} className="px-4 text-xs py-2 bg-indigo-600 rounded-r-md focus:outline-none focus:bg-indigo-700 text-white hover:bg-indigo-700">Next</button>
      </div>
     </div> 
    </>
  )
}

export default PageTitle

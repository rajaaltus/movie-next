import Movies from '../components/Movies';
import PageTitle from '../components/PageTitle';
import {useState} from 'react';

export default function Home() {
  const [page, setPage] = useState(1);
  function handleNext({pageNumber}) {
    setPage(pageNumber)
    console.log(page)
  }
  return (
    <>
      <div className="w-full h-full bg-indigo-800 flex items-center justify-center">
        <div className="px-4 py-8 lg:max-w-6xl mx-auto">
          {/* <PageTitle title="Recent" currentPage={page} onNext={handleNext} onPrev={handleNext} /> */}
          <Movies page={page} />
        </div>
      </div>
    </>
  );
}

import Movies from '../components/Movies';
import PageTitle from '../components/PageTitle';
import {useState} from 'react';

export default function Home() {
  
  return (
    <>
      <div className="w-full h-full bg-indigo-800 flex items-center justify-center">
        <div className="px-4 py-8 lg:max-w-6xl mx-auto">
          <Movies />
        </div>
      </div>
    </>
  );
}

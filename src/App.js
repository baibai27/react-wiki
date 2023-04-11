import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
import Pagination from './components/Pagination/Pagination';


function App() {
  let [page, setPage] = useState(1);
  let [fetchedData, updateFetchedData] = useState([]);
  let {info, results} = fetchedData;
  
  let api = `https://rickandmortyapi.com/api/character/?page=${page}`;
  useEffect(()=>{
    (async function() {
      let data = await fetch(api).then(res => res.json());
      updateFetchedData(data);
    })();
  },[api])
  return (
    <div className="App">
      <h1 className="text-center ubuntu my-4" >Rick & Morty <span className='text-primary'>Wiki</span></h1>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Filters />
          </div>
          <div className="col-8">
            <div className="row">
              <Cards results={results}/>
            </div>
            </div>
          </div>
        </div>
        <Pagination page={page} setPage={setPage}/>
      </div>
  );
}

export default App;

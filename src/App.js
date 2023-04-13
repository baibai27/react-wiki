import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";

function App() {
  let [page, setPage] = useState(1);
  let [search, setSearch] = useState("");
  let [status, setStatus] = useState("");

  let [fetchedData, updateFetchedData] = useState([]);
  
  let { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${page}&name=${search}&status=${status}`;
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);
  return (
    <div className="App">
      <h1 className="text-center ubuntu my-4">
        Rick & Morty <span className="text-primary">Wiki</span>
      </h1>
      <Search setSearch={setSearch} setPage={setPage} />
      <div className="container">
        <div className="row">
          <Filters setStatus={setStatus} setPage={setPage}/>

          <div className="col-8">
            <div className="row">
              <Cards results={results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination info={info} page={page} setPage={setPage} />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";

function App() {
  let [page, setPage] = useState(1);
  let [search, setSearch] = useState("");
  let [status, setStatus] = useState("");
<<<<<<< HEAD

  let [fetchedData, updateFetchedData] = useState([]);
  
  let { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${page}&name=${search}&status=${status}`;
=======
  let [gender, setGender] = useState("");
  let [species, setSpecies] = useState(""); // [species, updateSpecies] = useState("");

  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${page}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
>>>>>>> f7b15b3cf2789cbffdeb78ddec3dec71d95ab7d5
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
<<<<<<< HEAD
          <Filters setStatus={setStatus} setPage={setPage}/>
=======
          <Filters
            setStatus={setStatus}
            setGender={setGender}
            setPage={setPage}
            setSpecies={setSpecies}
          />
>>>>>>> f7b15b3cf2789cbffdeb78ddec3dec71d95ab7d5

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

import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
import Navbar from "./components/Navbar/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Episodes from "./pages/Episodes";
import Location from "./pages/Location";
import CardDetails from "./components/Cards/CardDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardDetails/>} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodes/:id" element={<CardDetails/>} />
        <Route path="/location" element={<Location />} />
        <Route path="/location/:id" element={<CardDetails/>} />
      </Routes>
    </Router>
  );
}

const Home = () => {
  let [page, setPage] = useState(1);
  let [search, setSearch] = useState("");
  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");
  let [species, setSpecies] = useState(""); // [species, updateSpecies] = useState("");

  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${page}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);
  return (
    <div className="App">
      <h1 className="text-center mb-4">Characters</h1>
      <Search setSearch={setSearch} setPage={setPage} />
      <div className="container">
        <div className="row">
          <Filters 
            setStatus={setStatus}
            setGender={setGender}
            setPage={setPage}
            setSpecies={setSpecies}
          />

          <div className="col-lg-8 col-12">
            <div className="row">
              <Cards page="/" results={results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination info={info} page={page} setPage={setPage} />
    </div>
  );
};

export default App;

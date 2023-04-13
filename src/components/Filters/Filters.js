import React from "react";
<<<<<<< HEAD
import Gender from "../Filters/Category/Gender";
import Species from "./Category/Species";
import Status from "./Category/Status";

const Filters = ({setStatus, setPage}) => {
  return (
    <div className="col-3">
      <div className="text-center fw-bold fs-4 mb-2">Filter</div>
      <div
=======
import Gender from "./Category/Gender";
import Species from "./Category/Species";
import Status from "./Category/Status";

const Filters = ({ setStatus, setPage, setGender, setSpecies }) => {
  let clear = () => {
    setStatus("");
    setGender("");
    setSpecies("");
    setPage("");
    window.location.reload(false);
  };
  return (
    <div className="col-3">
      <div className="text-center fw-bold fs-5 mb-2">Filter</div>
      <div
        onClick={clear}
>>>>>>> f7b15b3cf2789cbffdeb78ddec3dec71d95ab7d5
        style={{ cursor: "pointer" }}
        className="text-center text-primary text-decoration-underline mb-4"
      >
        Clear filters
      </div>
      <div className="accordion" id="accordionExample">
<<<<<<< HEAD
        <Gender setStatus={setStatus} setPage={setPage}/>
        <Species setStatus={setStatus} setPage={setPage}/>
        <Status setStatus={setStatus} setPage={setPage}/>
      </div>
      
=======
        <Status setStatus={setStatus} setPage={setPage} setGender={setGender} />
        <Species setPage={setPage} setSpecies={setSpecies} />
        <Gender setPage={setPage} setGender={setGender} />
      </div>
>>>>>>> f7b15b3cf2789cbffdeb78ddec3dec71d95ab7d5
    </div>
  );
};

export default Filters;

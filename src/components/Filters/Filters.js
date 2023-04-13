import React from "react";
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
        style={{ cursor: "pointer" }}
        className="text-center text-primary text-decoration-underline mb-4"
      >
        Clear filters
      </div>
      <div className="accordion" id="accordionExample">
        <Status setStatus={setStatus} setPage={setPage} setGender={setGender} />
        <Species setPage={setPage} setSpecies={setSpecies} />
        <Gender setPage={setPage} setGender={setGender} />
      </div>
    </div>
  );
};

export default Filters;

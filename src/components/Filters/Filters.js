import React from "react";
import Gender from "../Filters/Category/Gender";
import Species from "./Category/Species";
import Status from "./Category/Status";

const Filters = ({setStatus, setPage}) => {
  return (
    <div className="col-3">
      <div className="text-center fw-bold fs-4 mb-2">Filter</div>
      <div
        style={{ cursor: "pointer" }}
        className="text-center text-primary text-decoration-underline mb-4"
      >
        Clear filters
      </div>
      <div className="accordion" id="accordionExample">
        <Gender setStatus={setStatus} setPage={setPage}/>
        <Species setStatus={setStatus} setPage={setPage}/>
        <Status setStatus={setStatus} setPage={setPage}/>
      </div>
      
    </div>
  );
};

export default Filters;

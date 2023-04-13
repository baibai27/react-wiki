import React from "react";
import FilterBTN from "../FilterBTN";

const Status = ({ setStatus, setPage }) => {
  let status = ["Alive", "Dead", "unknown"];
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingThree">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
          Status
        </button>
      </h2>
      <div
        id="collapseThree"
        className="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {status.map((item, index) => (
            <FilterBTN
              task={setStatus}
              key={index}
              name="status"
              index={index}
              item={item}
              setPage={setPage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Status;
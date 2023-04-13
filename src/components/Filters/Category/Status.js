import React from "react";
import FilterBTN from "../FilterBTN";

const Status = ({ setStatus, setPage }) => {
<<<<<<< HEAD
  let status = ["Alive", "Dead", "unknown"];
=======
  let status = ["Alive", "Dead", "Unknown"];
>>>>>>> f7b15b3cf2789cbffdeb78ddec3dec71d95ab7d5
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingThree">
        <button
<<<<<<< HEAD
          className="accordion-button collapsed"
=======
          className="accordion-button"
>>>>>>> f7b15b3cf2789cbffdeb78ddec3dec71d95ab7d5
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
<<<<<<< HEAD
        className="accordion-collapse collapse"
=======
        className="accordion-collapse collapse show"
>>>>>>> f7b15b3cf2789cbffdeb78ddec3dec71d95ab7d5
        aria-labelledby="headingThree"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {status.map((item, index) => (
            <FilterBTN
              task={setStatus}
              key={index}
<<<<<<< HEAD
              name="status"
              index={index}
              item={item}
=======
              item={item}
              index={index}
              name="status"
>>>>>>> f7b15b3cf2789cbffdeb78ddec3dec71d95ab7d5
              setPage={setPage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Status;

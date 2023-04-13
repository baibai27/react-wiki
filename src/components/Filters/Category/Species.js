import React from "react";
import FilterBTN from "../FilterBTN";

const Species = ({ setSpecies, setPage }) => {
  let species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mytholog",
    "Animal",
    "Robot",
    "Cronenberg",
    "Disease",
    "Planet",
    "Unknown",
  ];
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          Species
        </button>
      </h2>
      <div
        id="collapseTwo"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {species.map((item, index) => (
            <FilterBTN
              task={setSpecies}
              key={index}
              item={item}
              index={index}
              name="species"
              setPage={setPage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Species;

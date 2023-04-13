<<<<<<< HEAD
import React from 'react'
import FilterBTN from '../FilterBTN';

const Gender = ({setStatus, setPage}) => {
  let genders =["female", "male", "genderless","unknown"];
  return (
    <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Gender
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body d-flex flex-wrap gap-3">
        {genders.map((item, index) =><FilterBTN key={index} name="genders" item={item} index={index}/>)}
      </div>
    </div>
  </div>
  );
}

export default Gender
=======
import React from "react";
import FilterBTN from "../FilterBTN";

const Gender = ({ setGender, setPage }) => {
  let genders = ["Female", "Male", "Genderless", "Unknown"];
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="false"
          aria-controls="collapseOne"
        >
          Gender
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {genders.map((item, index) => (
            <FilterBTN
              task={setGender}
              key={index}
              name="genders"
              item={item}
              index={index}
              setPage={setPage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gender;
>>>>>>> f7b15b3cf2789cbffdeb78ddec3dec71d95ab7d5

import React from "react";

const FilterBTN = ({ name, index, item, task, setPage }) => {
  return (
    <div>
      <style jsx>
        {`
        .form-check-input:checked + label {
            background-color: #0b5ed7;
            color:white;
            }
        input[type="radio"] {display: none;}]`}
      </style>
      <div className="form-check">
        <input
        onClick={() => {
          task(item);
          setPage(1);
        }}
          className="form-check-input"
          type="radio"
          name={name}
          id={`${name}_${index}`}
          checked
        />
        <label className="btn btn-outline-primary" for={`${name}_${index}`}>
          {item}
        </label>
      </div>
    </div>
  );
};

export default FilterBTN;

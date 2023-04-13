import React from "react";

const FilterBTN = ({ name, index, item, task, setPage}) => {
  return (
    <>
      <style jsx>{`
        input[type="radio"] {
          display: none;
        }
        .form-check-input:checked + label {
          background-color: #0b5ed7;
          color:white;
        }
      `}</style>
      <div>
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
          />
          <label class="btn btn-outline-primary" for={`${name}_${index}`}>
            {item}
          </label>
        </div>
      </div>
    </>
  );
};

export default FilterBTN;

import React from "react";
import styles from "./Search.module.scss";

const Search = ({ setSearch, setPage }) => {
  return (
    <form className="d-flex justify-content-center gap-4 mb-5">
      <input
        onChange={(e) => {
          setPage(1);
          setSearch(e.target.value);
        }}
        placeholder="Search for Characters"
        type="text"
        className={styles.input}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
        }}
        className={`btn btn-primary fs-5 ${styles.button}`}
      >
        Search
      </button>
    </form>
  );
};

export default Search;

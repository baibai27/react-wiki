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
<<<<<<< HEAD
        placeholder="Search for Characters..."
=======
        placeholder="Search for Characters"
>>>>>>> f7b15b3cf2789cbffdeb78ddec3dec71d95ab7d5
        type="text"
        className={styles.input}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
        }}
<<<<<<< HEAD
        className={`${styles.btn} btn btn-primary fs-5`}
=======
        className={`btn btn-primary fs-5 ${styles.button}`}
>>>>>>> f7b15b3cf2789cbffdeb78ddec3dec71d95ab7d5
      >
        Search
      </button>
    </form>
  );
};

export default Search;

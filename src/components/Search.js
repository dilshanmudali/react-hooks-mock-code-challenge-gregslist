import React from "react";

function Search({setSearchList, searchList}) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(searchList);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchList}
        onChange={(e) => setSearchList(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;

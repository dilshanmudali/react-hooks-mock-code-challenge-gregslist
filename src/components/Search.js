import React from "react";

function Search({setSearchList, searchList, handleSubmit, sortList, setSortList}) {
 
  const handleSort = (e) => {
    setSortList(e.target.value)
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
      <select onChange={handleSort}>
        <option value='ALL' checked={sortList === 'ALL'}>All</option>
        <option value='ABC' checked={sortList === 'ABC'}>Location</option>
      </select>
    </form>
  );
}

export default Search;

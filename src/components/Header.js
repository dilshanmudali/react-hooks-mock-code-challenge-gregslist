import React from "react";
import Search from "./Search";

function Header({setSearchList,searchList, handleSubmit, sortList, setSortList}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search 
        setSearchList={setSearchList} 
        searchList={searchList} 
        handleSubmit={handleSubmit}
        sortList = {sortList}
        setSortList = {setSortList}
        />
    </header>
  );
}

export default Header;

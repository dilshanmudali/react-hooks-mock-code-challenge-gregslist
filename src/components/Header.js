import React from "react";
import Search from "./Search";

function Header({setSearchList,searchList}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search setSearchList={setSearchList} searchList={searchList}/>
    </header>
  );
}

export default Header;

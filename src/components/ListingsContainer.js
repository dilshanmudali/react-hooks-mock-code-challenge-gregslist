import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, handleDelete, searchList}) {

  

  const displayListings = listings.filter(list => list.description.toLowerCase().includes(searchList.toLowerCase())).map(listing => <ListingCard 
    key={listing.id}
    listing={listing}
    handleDelete = {handleDelete}
  />)

  return (
    <main>
      <ul className="cards">
        {displayListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;

import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, handleDelete, sortList}) {

  

  const displayListings = listings.sort((a,b) => {
    if(sortList === 'ABC'){
      return a.location.localeCompare(b.location)
    }else{
      return listings
    }
  }).map(listing => <ListingCard 
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

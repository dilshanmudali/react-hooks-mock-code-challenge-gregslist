import {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

const MAIN_API = 'http://localhost:3000/listings'

function App() {

  const [listings, setListings] = useState([])
  const [searchList, setSearchList] = useState('')

  useEffect(() => {
    fetch(MAIN_API)
    .then(res => res.json())
    .then(data => setListings(data))
  },[])

  const handleDelete = (delCard) => {
    // console.log('remove', delCard)
    const removed = listings.filter(listing => listing.id !== delCard.id)
    setListings(removed)
  }


  return (
    <div className="app">
      <Header setSearchList = {setSearchList} searchList={searchList}/>
      <ListingsContainer 
        listings={listings} 
        handleDelete={handleDelete}
        searchList={searchList}
        />
    </div>
  );
}

export default App;

import {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

const MAIN_API = 'http://localhost:3000/listings'

function App() {

  const [listings, setListings] = useState([])
  const [searchList, setSearchList] = useState('')
  const [sortList, setSortList] = useState('ALL')

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

  function handleSubmit(e) {
    e.preventDefault();
    setListings(listings.filter(list => list.description === searchList))
  }



  return (
    <div className="app">
      <Header 
        setSearchList = {setSearchList} 
        searchList={searchList} 
        handleSubmit={handleSubmit}
        sortList = {sortList}
        setSortList = {setSortList}
        />

      <ListingsContainer 
        listings={listings} 
        handleDelete={handleDelete}
        searchList={searchList}
        sortList = {sortList}
        />
    </div>
  );
}

export default App;

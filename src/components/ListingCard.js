import {useState} from "react";

function ListingCard({listing, handleDelete}) {

  const [favorite, setFavorite] = useState(false)

  const {description, image='https://via.placeholder.com/300x300', location} = listing


  const handleFavs = () => {
    setFavorite(prevState => !prevState)
  }


  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {favorite ? (
          <button className="emoji-button favorite active"  onClick={handleFavs}>★</button>
        ) : (
          <button className="emoji-button favorite"  onClick={handleFavs}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={() => handleDelete(listing)}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;

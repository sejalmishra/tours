import React, { useState } from 'react';

const Tour = ({id,image,info,name,price, removeItem}) => {
  const [showMore,setShowMore] = useState(false);
  return <article className="single-tour">
    <div>
      <img src={image} alt={name} />
    </div>
    <footer>
    <div className="tour-info">
      <h3>{name}</h3>
      <h3 className="tour-price">${price}</h3>
      </div>
      <p>{showMore ? info : `${info.substring(0, 200)}...`}
      <button onClick={() => setShowMore(!showMore)}>{showMore ? 'show less' : 'read more'}</button>
      </p>
      <button className="delete-btn" onClick={() => removeItem(id)}>
          not interested
        </button>
    </footer>
  </article>;
};

export default Tour;

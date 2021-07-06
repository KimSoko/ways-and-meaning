/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Card = ({title, blurb, image, link }) => {
  const [flipped, setFlipped] = useState(false);

  const flip = () => {
    if (flipped) {
      setFlipped(false)
    } else {
      setFlipped(true);
    }
  }

  return (
    <div onMouseEnter={flip} onMouseLeave={flip} className={"articles-box" + (flipped ? " flipped" : "")}>
     {!flipped && (
      <div className="front">
      <div className="image-container">
        <img className="card-image" src={image}></img>
        <h2 className="title">{title}</h2>
      </div>
      </div>
     )}
     {flipped && (
      <div className="back">
        {blurb}
        <Link to={link}>
            <button className="read-more center">KEEP READING</button>
          </Link>
      </div>
     )}
    </div>

  )
}

export default Card;
import React from 'react';
import './DiagramCard.css'
import diagram from '../../utils/images/diagram.svg'

function DiagramCard({name, number, img}) {
  return (
    <>
      <button className="_button" >
        <span className="_name">
          {name}
        </span>
        <span className="_percent">+1,5%</span>
        <span className="_number__info">{number}</span>
        <img src={img} alt="" />
      </button>
    </>
  );
}

export default DiagramCard;
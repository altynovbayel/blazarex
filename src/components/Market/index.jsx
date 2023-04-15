import React from 'react';
import MarketForm from "./MarketForm";
import './Market.css'

function Market() {
  return (
    <div className='d-flex justify-content-between gap-5'>
      <MarketForm title={'Купить BTC'} btn={'success'} btnText={'Купить'}/>
      <span className='_border'></span>
      <MarketForm title={'Продать BTC'} btn={'danger'} btnText={'Продать'}/>
    </div>
  );
}

export default Market;
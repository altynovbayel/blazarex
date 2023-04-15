import React from 'react';
import './MarketForm.css'
import {Button} from "react-bootstrap";

function MarketForm({title, btn, btnText}) {
  return (
    <div className="_market">
      
      <div className="_market__header d-flex justify-content-between">
        <h3>
          {title}
        </h3>
        <div className="d-flex gap-3">
          <span className="me-5">
          Баланс:
          </span>
          <h3>
            24356.54
          </h3>
          <span>
          BTC
          </span>
        </div>
      </div>
      <div className="_market__forms mt-3 d-flex flex-column gap-3">
        
        <div className="_count__inp">
          <label>
            Количество
          </label>
          <input className="_market__input" type="text"/>
          <span className="_input__type">TRY</span>
        </div>
        
        <div className="_count__percent">
          {
            [0, 25, 50, 75, 100].map(item => (
              <div className=" _percent__item d-flex flex-column">
                <span className="_circle">
                </span>
                <span>
                    {item}%
                </span>
              </div>
            ))
          }
        </div>
        
        <div className="_course__inp">
          <label>
            Курс
          </label>
          <input type="text"/>
          <span className="_input__type">TRY</span>
        </div>
        
        <div className="_total__inp">
          <label>
            Всего
          </label>
          <input className="_market__input" type="text"/>
          <span className="_input__type">BTC</span>
        </div>
        
        <div className='_total__text d-flex align-items-center'>
          
          <div className='me-3'>
            <div className=" _token__btn d-flex gap-2 align-items-center">
              <label className="_switch_token">
                <input type="checkbox" />
                <span className="_slider round"></span>
              </label>
            </div>
            <span >Использовать Токен</span>
          </div>
          
          <div className='gap-3'>
            {
              ['Комиссия', '0,1% ~0 TRY'].map(item => (
                <span>{item}</span>
              ))
            }
          </div>
          
        </div>
        <Button variant={btn} className='_form_btn'>{btnText}</Button>
        
      </div>
    </div>
  );
}

export default MarketForm;
import React from 'react';
import Navbar from "../../components/Navbar";
import DiagramCard from "../../components/DiagramCard";
import {diagramCardList} from "../../utils/list";
import {Container} from "react-bootstrap";
import './Main.css'
import Market from "../../components/Market";


function Main() {
  return (
    <>
      <Navbar/>
      <Container>
        <div className="d-flex justify-content-between align-items-center mt-4">
          
          <div className=" _switch__btn d-flex gap-2 align-items-center">
            <span>Lite</span>
            <label className="_switch_token">
              <input type="checkbox" />
              <span className="_slider round"></span>
            </label>
            <span>Pro</span>
          </div>
          
          <div className="_type__buttons d-flex gap-3">
            {
              ['TRY', 'USD', 'EUR'].map(item => (
                <button className="_type ">
                  {item}
                </button>
              ))
            }
          </div>
          
        </div>
        
        <div className="d-flex flex-wrap justify-content-around gap-3 mt-4">
          {
            diagramCardList.map(({name, diagram, id, count}) => (
              <DiagramCard name={name} img={diagram} number={count} key={id}/>
            ))
          }
        </div>
        <Market/>
      </Container>
    </>
  );
}

export default Main;
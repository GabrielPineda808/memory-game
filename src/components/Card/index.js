import React from "react";
import "./style.css";

const Styles ={
  card: {
      width: "200px",
      margin: "20px"
  }
}

function Card(props) {
  return (
    <div className="col-3">
        <div className="">
         <img src={props.image} style={Styles.card}onClick={ function() {props.random(); props.counter(props.id); props.topScore();}}/>
        </div>
    </div>
  );
}

export default Card;

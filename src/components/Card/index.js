import React from "react";
import "./style.css";

const Styles ={
  card: {
      
      margin: "10px"
  }
}

function Card(props) {
  return (
    <div className="col-md-3">
        <div className="">
         <img src={props.image} style={Styles.card}onClick={ function() {props.random(); props.counter(props.id); props.topScore();}}/>
        </div>
    </div>
  );
}

export default Card;

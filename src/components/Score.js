import React from "react";

const Styles = {
  
};

function Score(props) {
  return (
    <div className="container">
      <h2><strong>
      Score: <span className={Styles.Score}>{props.score}</span>
        | Top Score:<span className={Styles.Score}>{props.topScore}</span>
        </strong></h2>
      
        
    </div>
  );
}
export default Score;
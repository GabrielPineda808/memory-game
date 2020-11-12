import React from "react";

const styles={
    paddingLeft:{
        paddingLeft: 300
    },
    padding:{
        paddingLeft: 250
    },
    color:{
        backgroundColor: 'lightgrey'
    }
}

function Jumbo(props) {
  return (
    <div class="jumbotron jumbotron-fluid" style={styles.color}>
        <div class="container ">
            <h1 class="display-4" style={styles.paddingLeft}>Memory Game!</h1>
            <p class="lead" style={styles.padding}>Click an image to earn a point, but not more than once! </p>
        </div>
    </div>
  )
}

export default Jumbo;

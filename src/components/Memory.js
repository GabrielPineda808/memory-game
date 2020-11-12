import React from "react";
import Card from "./Card/index";
import image from "../character.json";
import Score from './Score'

class Game extends React.Component {
  state = {
    cImage: [],
    clicks: [],
    score: 0,
    topScore: 0,
  };

  counter = (image) => {
      if(this.state.clicks.indexOf(image) === -1 ){
          this.setState({
              clicks: [...this.state.clicks, image],
              score: this.state.score + 1,
              topScore: this.state.topScore
          })
      } else {
            this.setState({score: 0})
            this.setState({clicks: []})
            this.setState({topScore: this.state.score})
      }
  }
  random = () =>  {
    const image = this.state.image;
    this.setState({
      cImage: image.sort(randomImg => {
          const random = Math.random()
        if (random > .1) {
          return 4;
        }
        if (random < .1) {
          return -1;
        } else {
          return 0;
        }
      }),
    });
  }

  topScore = () => {
      if(this.state.score > this.state.topScore){
    this.setState({
        topScore: this.state.score
    })
}
  }


  componentDidMount()
  {
    this.setState({ image });
  }
  render() {
      const Styles = {
          space: {
              margin: "4px"
          }
      }
    return (
    <div>
        <Score score={this.state.score} topScore={this.state.topScore} />
        <div className="row" style={Styles.space}>
          {image.map(data => (
            <Card key={data.id}id={data.id} image={data.image} random={this.random} counter={this.counter} topScore={this.topScore}/>
          ))}
        </div>
    </div>   
    )
}
}

export default Game;
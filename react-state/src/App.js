import React from "react";
import './App.css';
import Count from "./component/Count";

class App extends React.Component {
  state = {
    fullName: 'soumaya msahli',
    bio: 'Im a full stack web developer',
    imgSrc: 'https://thumbs.dreamstime.com/b/ic-ne-d-avatar-de-caract%C3%A8re-de-femme-d-affaires-82525725.jpg',
    profession: 'Web Developer',
    show: false
  }

  handleShow = () => {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.show ? (
          <>
            <h1>{this.state.fullName}</h1>
            <h2>{this.state.bio}</h2>
            <img style={{width:200, hight:200}} src={this.state.imgSrc} alt="failed" />
            <h2>{this.state.profession}</h2>
          </>
        ) : (
          <h1>Show the profile</h1>
        )
        }
        <button style={{width:100,backgroundColor:"#E9967A"}} onClick={this.handleShow}>{!this.state.show ? "Show My Profile" : "Hide" }</button>
        <>
        <h1>Shows Time</h1>
        <Count />
        </>
      </div>
    );
  }
}

export default App;
import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    text: [],
    userInput: "",
  };
  storeValue = () => {};
  addText = () => {
    const { userInput } = this.state;
    const { text } = this.state;
    var newText = [];
    newText.push(userInput);
    this.setState({
      text: newText,
      userInput: "",
    });
    text.forEach((item) => {
      newText.push(item);
    });
  };
  updateUserInput = (event) => {
    this.setState({ userInput: event.target.value });
  };
  render() {
    return (
      <div className="App">
        <div className="createList">
          <div>
            <input
              id="input"
              type="text"
              placeholder="write here ..."
              value={this.state.userInput}
              onChange={this.updateUserInput}
            ></input>
            <button onClick={this.addText} className="plus">
              +
            </button>
          </div>
        </div>

        <div className="list">
          <div>
            {this.state.text.map((toDo) => {
              return <p className="toDo">{toDo}</p>;
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default App;

import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    text: [],
    userInput: "",
  };
  storeValue = () => {};
  addText = () => {
    const { userInput, text } = this.state;
    var newText = [];

    text.forEach((item) => {
      newText.push(item);
    });
    newText.push(userInput);
    this.setState({
      text: newText,
      userInput: "",
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
              return <p>{toDo}</p>;
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default App;

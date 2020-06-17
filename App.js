class App extends React.Component {
  state = {
    count: 0,
    number: 0,
  };

  handleClick = (type, number) => {
    if (type === "odejmowanie") {
      this.setState({
        count: this.state.count + 1,
        number: this.state.number - number,
      });
    } else if (type === "reset") {
      this.setState({
        count: this.state.count + 1,
        number: (this.state.number = number),
      });
    } else if (type === "dodawanie") {
      this.setState({
        count: this.state.count + 1,
        number: this.state.number + number,
      });
    }
  };

  render() {
    return (
      <div>
        <DisplayPanel
          name="-1"
          type="odejmowanie"
          number="1"
          click={this.handleClick}
          color="green"
        />
        <DisplayPanel
          name="-100"
          type="odejmowanie"
          number="100"
          click={this.handleClick}
        />

        <DisplayPanel
          name="-1000"
          type="odejmowanie"
          number="1000"
          click={this.handleClick}
          color="green"
        />

        <DisplayPanel
          name="RESET"
          type="reset"
          number="0"
          click={this.handleClick}
          color="red"
        />

        <DisplayPanel
          name="+1000"
          type="dodawanie"
          number="1000"
          click={this.handleClick}
          color="green"
        />

        <DisplayPanel
          name="+100"
          type="dodawanie"
          number="100"
          click={this.handleClick}
        />

        <DisplayPanel
          name="+1"
          type="dodawanie"
          number="1"
          click={this.handleClick}
          color="green"
        />

        <h1>Number of click: {this.state.count}</h1>
        <h1>Score:{this.state.number}</h1>
      </div>
    );
  }
}

const DisplayPanel = (props) => {
  const number = parseInt(props.number);
  return (
    <button
      className={props.colorS}
      onClick={() => props.click(props.type, number)}
    >
      {props.name}
    </button>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

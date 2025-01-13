import { Component } from "react";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      theme: "Light",
      showChild: true,
    };
  }

  componentDidMount() {
    this.setState({ theme: "Dark" });
    console.log("Component Did Mount Executed!!!");
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
      console.log("Component Did Update Executed!!!");
    }
  }

  shouldComponentUpdate(prevProps, prevState) {
    const updateStatus =
      prevState.showChild !== this.state.showChild ||
      prevState.count !== this.state.count;
    if (updateStatus) console.log("Should Component Update Executed!!");
    return updateStatus;
  }

  render() {
    const { count, theme, showChild } = this.state;
    return (
      <>
        <h3 style={{ textAlign: "center" }}>This is Navbar component.</h3>
        <h1 style={{ textAlign: "center" }}>Count is: {count}</h1>
        <p style={{ textAlign: "center" }}>Theme Status: {theme}</p>
        {showChild && <Child />}
        <p style={{ textAlign: "center" }}>
          <button
            onClick={() =>
              this.setState((prevState) => ({
                showChild: !prevState.showChild,
              }))
            }
          >
            {this.state.showChild ? "Turn me off" : "Turn me on"}
          </button>
        </p>
        <button
          onClick={() =>
            this.setState({ count: this.state.count + 1, theme: "Dark" })
          }
        >
          Increment
        </button>
        <button
          onClick={() =>
            this.setState({ count: this.state.count - 1, theme: "Light" })
          }
        >
          Decrement
        </button>
      </>
    );
  }
}

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favouriteFood: "Pizza",
    };
  }

  componentWillUnmount() {
    console.log("Component Will Unmount executed!!");
  }

  render() {
    return (
      <p style={{ textAlign: "center" }}>
        My favourite food is: {this.state.favouriteFood}
      </p>
    );
  }
}

export default Navbar;

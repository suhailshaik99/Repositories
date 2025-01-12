import { Component } from "react";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      theme: "Light",
    };
  }

  componentDidMount() {
    this.setState({ theme: "Dark" });
    console.log("Component Did Mount Executed!!!");
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
      console.log(prevState.count);
      console.log("Component Did Update Executed!!!");
    }
  }

  

  render() {
    const { count, theme } = this.state;
    return (
      <>
        <h3 style={{ textAlign: "center" }}>This is Navbar component.</h3>
        <h1 style={{ textAlign: "center" }}>Count is: {count}</h1>
        <p style={{ textAlign: "center" }}>Theme Status: {theme}</p>
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

export default Navbar;

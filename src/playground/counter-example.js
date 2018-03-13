class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleSubstractOne = this.handleSubstractOne.bind(this);
    this.handleReset = this.handleReset.bind(this);

    this.state = {
      count: 0
    };
  }

  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }

  handleSubstractOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    });
  }

  handleReset() {
    this.setState(() => {
      return {
        count: 0
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleSubstractOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));

// let count = 0;
// const addOne = () => {
//   count++;
//   renderCounterApp();
// }
//
// const minusOne = () => {
//   count--;
//   renderCounterApp();
// }
//
// const reset = () => {
//   count = 0;
//   renderCounterApp();
// }
//
// const appRoot = document.getElementById('app');
//
// const renderCounterApp = () => {
//   const template2 = (
//     <div>
//      <h1>Count: {count}</h1>
//      <button onClick={addOne}>+1</button>
//      <button onClick={minusOne}>-1</button>
//      <button onClick={reset}>Reset</button>
//     </div>
//   )
//
//   ReactDOM.render(template2, appRoot);
// };
//
// renderCounterApp();

import React, {Component} from 'react';


const  App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props) {
    super(props);
    console.log(this.state);
    this.state = {count: 0};

  }

    handlePlusButton = () => {
     this.setState({count: this.state.count+1});
    }

    handleMinusButton = () => {
      this.setState({count: this.state.count-1});
    }
    handleInit = () => {
      this.setState({count: 0});
    }


  render() {
   console.log(this.state.count)
    return(
      <React.Fragment>
        <div>counter: { this.state.count } </div>
        <button onClick= {this.handlePlusButton}> +1 </button>
        <button onClick= {this.handleInit}> 初期化 </button>
        <button onClick= {this.handleMinusButton}> -1 </button>
      </React.Fragment>
    )
  }  
}


export default App;

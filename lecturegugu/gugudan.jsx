const React = require('react');
const { Component } = React;

class GuGuDan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: Math.ceil(Math.random() * 9),
      second: Math.ceil(Math.random() * 9),
      value: '',
      result: '',
      numResult:'',
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
      if (parseInt(this.state.value) === this.state.first * this.state.second) {
        this.setState({
          result: '정답: ' + this.state.value,
          first: Math.ceil(Math.random() * 9),
          second: Math.ceil(Math.random() * 9),
          value: '',
          numResult: this.state.first * this.state.second,
        });
      } else {
        this.setState({
          result: '떙',
          value: '',
          numResult: '',
        });
      }
      this.input.focus();
  }

  onChange = (e) => {this.setState({ value : e.target.value})};

  input;

  onRefInput = (c) => { this.input = c; }

  render() {
    return (
      <div>
        <div>{this.state.first}곱하기 {this.state.second}는?</div> 
        <form onSubmit={this.onSubmit}>
          <input type="number" ref={this.onRefInput} value={this.state.value} onChange={this.onChange}/>  
          <button>입력!</button>
          <div>{this.state.result}</div>
        </form> 
      </div>
    );
  }
}

module.exports = GuGuDan;
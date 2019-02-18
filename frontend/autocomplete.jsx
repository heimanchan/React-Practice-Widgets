import React from 'react';

export default class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: "",
    }
    this.handleChange = this.handleChange.bind(this);
    this.selectName = this.selectName.bind(this);
  };

  handleChange(e) {
    this.setState({ inputVal: e.target.value });
  }

  matches() {
    const matches = [];
    if (this.state.inputVal.length === 0) {
      return this.props.names;
    }

    this.props.names.forEach(name => {
      const sub = name.slice(0, this.state.inputVal.length);
      if (sub.toLowerCase() === this.state.inputVal.toLowerCase()) {
        matches.push(name);
      }
    });

    if (matches.length === 0) {
      matches.push("No matches");
    }

    return matches;
  }

  selectName(e) {
    const name = e.currentTarget.innerText;
    this.setState({ inputVal: name });
  }

  render() {
    const results = this.matches().map((result, idx) => {
      return (
        <li key={idx} onClick={this.selectName}>{result}</li>
      )
    })
    return (
      <div className="autocomplete-box widget-box">
        <h1>Autocomplete</h1>
        <div className="autocomplete">
          <input 
            type="text" 
            value={this.state.inputVal}
            onChange={this.handleChange}
          ></input>
          <ul>
            {results}
          </ul>
        </div>
      </div>
    )
  }
}
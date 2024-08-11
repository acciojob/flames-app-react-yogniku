import React, { Component } from 'react';

class FlamesGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name1: '',
      name2: '',
      result: '',
    };
  }
1
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  calculateRelationship = () => {
    const { name1, name2 } = this.state;

    if (name1 === '' || name2 === '') {
      this.setState({ result: 'Please Enter valid input' });
      return;
    }

    const name1Array = name1.split('');
    const name2Array = name2.split('');

    name1Array.forEach((char) => {
      const index = name2Array.indexOf(char);
      if (index !== -1) {
        name2Array.splice(index, 1);
        name1Array.splice(name1Array.indexOf(char), 1);
      }
    });

    const remainingLength = name1Array.length + name2Array.length;
    const relationshipIndex = remainingLength % 6;

    let relationship = '';
    switch (relationshipIndex) {
      case 0:
        relationship = 'Siblings';
        break;
      case 1:
        relationship = 'Friends';
        break;
      case 2:
        relationship = 'Love';
        break;
      case 3:
        relationship = 'Affection';
        break;
      case 4:
        relationship = 'Marriage';
        break;
      case 5:
        relationship = 'Enemy';
        break;
      default:
        break;
    }

    this.setState({ result: relationship });
  };

  clearFields = () => {
    this.setState({
      name1: '',
      name2: '',
      result: '',
    });
  };

  render() {
    const { name1, name2, result } = this.state;

    return (
      <div>
        <input
          type="text"
          name="name1"
          value={name1}
          onChange={this.handleChange}
          data-testid="input1"
          placeholder="Enter first name"
        />
        <input
          type="text"
          name="name2"
          value={name2}
          onChange={this.handleChange}
          data-testid="input2"
          placeholder="Enter second name"
        />
        <button onClick={this.calculateRelationship} data-testid="calculate_relationship">
          Calculate Relationship
        </button>
        <button onClick={this.clearFields} data-testid="clear">
          Clear
        </button>
        <h3 data-testid="answer">{result}</h3>
      </div>
    );
  }
}

export default FlamesGame;

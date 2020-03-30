import React, { Component } from 'react';

import Card from '../components/Card';

class Main extends Component {
  constructor() {
    super();
    this.state = { country: [] };
  }

  componentDidMount() {
    fetch(`https://restcountries.eu/rest/v2/all`)
      .then(data => data.json())
      .then(data => {
        this.setState({ country: data });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div>
        <Card
          country={this.state.country}
          cardColor={this.props.cardColor}
          textColor={this.props.textColor}
        />
        )}
      </div>
    );
  }
}

export default Main;

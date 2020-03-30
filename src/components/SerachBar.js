import React, { Component } from 'react';

import SearchField from 'react-search-field';

import Card from '../components/Card';

class SerachBar extends Component {
  constructor() {
    super();
    this.state = {
      countrySearch: '',
      countryName: []
    };
  }

  onEnter = () => {
    this.props.searchHandler(true);
    fetch(`https://restcountries.eu/rest/v2/name/${this.state.countrySearch}`)
      .then(response => response.json())
      .then(country => {
        localStorage.setItem('countries', []);
        this.setState({
          countryName: country
        });
      })
      .catch(err => console.error(err));
  };

  onChange = event => {
    this.setState({
      countrySearch: event
    });

    if (!event) {
      this.props.searchHandler(false);
      this.setState({
        countryName: []
      });
    }
  };

  render() {
    return (
      <>
        <div>
          <div style={{ width: 100, height: 20 }}>
            <SearchField
              placeholder="Search for a country..."
              onChange={this.onChange}
              onEnter={this.onEnter}
              classNames="test-class"
            />
          </div>
          {this.state.countryName.length > 0 && this.props.isActive === true && (
            <div>
              <br></br>
              <br></br>
              <Card
                country={this.state.countryName}
                cardColor={localStorage.getItem('cardColor')}
                textColor={localStorage.getItem('textColor')}
                cardMargin={18}
              />
            </div>
          )}
        </div>
        <br></br>
      </>
    );
  }
}

export default SerachBar;

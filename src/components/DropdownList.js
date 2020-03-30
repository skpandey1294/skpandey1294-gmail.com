import React, { Component } from 'react';

import { Dropdown, DropdownItem } from '@crave/farmblocks-dropdown';

import Card from './Card';

class DropdownList extends Component {
  constructor() {
    super();
    this.state = {
      countries: []
    };
  }

  onHandler = region => {
    this.props.filterHandler(true);
    fetch(`https://restcountries.eu/rest/v2/region/${region}`)
      .then(response => response.json())
      .then(countries => {
        this.setState({
          countries: countries
        });
      })
      .catch(err => console.error(err));
  };

  render() {
    return (
      <>
        <div>
          <div>
            <Dropdown
              text="Filter by Region"
              align="left"
              handleSelection={(value, event) => this.onHandler(value)}
            >
              <DropdownItem value={'Africa'}>Africa</DropdownItem>
              <DropdownItem value={'Americas'}>Americas</DropdownItem>
              <DropdownItem value={'Asia'}>Asia</DropdownItem>
              <DropdownItem value={'Europe'}>Europe</DropdownItem>
              <DropdownItem value={'Oceania'}>Oceania</DropdownItem>
            </Dropdown>
          </div>
          {this.state.countries.length > 0 && this.props.isActive === true && (
            <div>
              <br></br>
              <br></br>
              <Card
                country={this.state.countries}
                cardColor={localStorage.getItem('cardColor')}
                textColor={localStorage.getItem('textColor')}
                cardMargin={18}
              />
            </div>
          )}
        </div>
      </>
    );
  }
}

export default DropdownList;

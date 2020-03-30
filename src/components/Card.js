import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Card extends Component {
  render() {
    const countries = this.props.country.map(country => (
      <div>
        <button
          style={{
            width: 320,
            marginBottom: 40,
            marginRight: this.props.cardMargin,
            backgroundColor: this.props.cardColor,
            border: 1,
            color: this.props.textColor
          }}
        >
          <Link
            style={{ color: this.props.textColor, textDecoration: 'none' }}
            to={`/country/${country.capital}`}
          >
            <img
              src={country.flag}
              style={{ width: 300, height: 200 }}
              alt="flag"
            />
            <div
              style={{
                textAlign: 'left',
                marginLeft: 20,
                marginBottom: 30,
                lineHeight: 1.5
              }}
            >
              <br></br>
              <h3 style={{ color: this.props.textColor }}>
                <b>{country.name}</b>
              </h3>
              <div>
                <b>population</b>: {country.population}
              </div>
              <div>
                <b>Region</b>: {country.region}
              </div>
              <div>
                <b>Capital</b>: {country.capital}
              </div>
            </div>
          </Link>
        </button>
      </div>
    ));
    return (
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around'
        }}
      >
        {countries}
      </div>
    );
  }
}

export default Card;

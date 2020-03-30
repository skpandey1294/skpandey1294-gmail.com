import React, { Component, Fragment } from 'react';

import { Link } from 'react-router-dom';

class CountryDetails extends Component {
  constructor() {
    super();
    this.state = {
      country: []
    };
  }

  componentDidMount() {
    fetch(`https://restcountries.eu/rest/v2/capital/${this.props.capital}`)
      .then(data => data.json())
      .then(data => {
        console.log(data[0]);
        this.setState({
          country: data
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <Fragment>
        <div style={{ marginTop: 100 }}>
          {this.state.country[0] === undefined ? (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <h1> Loading... </h1>
            </div>
          ) : (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around'
              }}
            >
              <div style={{ alignSelf: 'start', marginLeft: 200 }}>
                <Link to="/">
                  <button
                    style={{
                      paddingLeft: 40,
                      paddingRight: 40,
                      paddingTop: 10,
                      paddingBottom: 10,
                      borderRadius: 5,
                      color: localStorage.getItem('textColor'),
                      backgroundColor: localStorage.getItem('cardColor')
                    }}
                  >
                    Back
                  </button>
                </Link>
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  marginTop: 100
                }}
              >
                <div>
                  <img
                    src={`${this.state.country[0].flag}`}
                    alt="flag"
                    style={{ width: 500 }}
                  />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <div>
                    <h1 style={{ color: localStorage.getItem('textColor') }}>
                      {this.state.country[0].name}
                    </h1>
                  </div>
                  <div style={{ display: 'flex', lineHeight: 1.8 }}>
                    <div style={{ marginRight: 100 }}>
                      <div>
                        <b>Native Name</b>: {this.state.country[0].nativeName}
                      </div>
                      <div>
                        <b>Population</b>: {this.state.country[0].population}
                      </div>
                      <div>
                        <b>Region</b>: {this.state.country[0].region}
                      </div>
                      <div>
                        <b>Sub Region</b>: {this.state.country[0].subregion}
                      </div>
                      <div>
                        <b>Capital</b>: {this.state.country[0].capital}
                      </div>
                    </div>
                    <div>
                      <div>
                        <b>Top Level Domain </b>:
                        {`  ${this.state.country[0].topLevelDomain}`}
                      </div>
                      <div>
                        <b>Currencies</b>:{' '}
                        {this.state.country[0].currencies[0].name}
                      </div>
                      <div>
                        <b>Languages</b>:{' '}
                        {this.state.country[0].languages.map(
                          language => `${language.name}, `
                        )}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div style={{ marginTop: 60 }}>
                      <b>Border Countries</b>:{' '}
                      {this.state.country[0].borders.map(border => (
                        <button
                          style={{
                            marginLeft: 10,
                            backgroundColor: localStorage.getItem('cardColor'),
                            border: 0
                          }}
                        >
                          {border}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </Fragment>
    );
  }
}

export default CountryDetails;

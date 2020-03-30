import React, { Component, Fragment } from 'react';
import Header from './Header';
import CountryDetails from './CountryDetails';

import { ThemeProvider, createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body{
  background-color:${props =>
    props.theme.mode === 'dark' ? '#202d36' : '#EEE'};
  color:${props => (props.theme.mode === 'dark' ? '#EEE' : '#111')};
}`;

class DetailPage extends Component {
  constructor() {
    super();
    this.state = {
      theme: { mode: localStorage.getItem('mode') },
      headerStyle: '#2b3743',
      cardColor: '#2b3743',
      textColor: '#ffffff'
    };
  }

  darkModeHandler = () => {
    if (localStorage.getItem('mode') === 'dark') {
      localStorage.setItem('mode', 'white');
      localStorage.setItem('headerStyle', '#ffffff');
      localStorage.setItem('cardColor', '#ffffff');
      localStorage.setItem('textColor', 'black');
    } else {
      localStorage.setItem('mode', 'dark');
      localStorage.setItem('headerStyle', '#2b3743');
      localStorage.setItem('cardColor', '#2b3743');
      localStorage.setItem('textColor', '#ffffff');
    }
    this.setState({
      theme:
        this.state.theme.mode === 'dark' ? { mode: 'white' } : { mode: 'dark' }
    });
  };

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <>
          <GlobalStyle />
          <Fragment>
            <Header
              headerStyle={localStorage.getItem('headerStyle')}
              darkModeHandler={this.darkModeHandler}
              textColor={localStorage.getItem('textColor')}
            />
            <CountryDetails
              capital={this.props.match.params.capital}
              textColor={localStorage.getItem('textColor')}
            />
          </Fragment>
        </>
      </ThemeProvider>
    );
  }
}

export default DetailPage;

import React, { Fragment, Component } from 'react';

import Header from './Header';
import DropdownList from './DropdownList';
import SearchBar from './SerachBar';
import Main from './Main';

import { ThemeProvider, createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body{
  background-color:${props =>
    props.theme.mode === 'dark' ? '#202d36' : '#EEE'};
  color:${props => (props.theme.mode === 'dark' ? '#EEE' : '#111')};
}`;

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: { mode: localStorage.getItem('mode') },
      search: false,
      filter: false
    };
  }

  componentDidMount() {
    if (!localStorage.getItem('mode')) {
      localStorage.setItem('mode', 'dark');
      localStorage.setItem('headerStyle', '#2b3743');
      localStorage.setItem('cardColor', '#2b3743');
      localStorage.setItem('textColor', '#ffffff');
    }
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

  searchHandler = bool => {
    this.setState({
      search: bool,
      filter: !this.state.filter
    });
  };

  filterHandler = bool => {
    this.setState({
      search: !this.state.search,
      filter: bool
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
            <br></br>
            <br></br>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginLeft: 25,
                marginRight: 25,
                borderWidth: 2,
                borderColor: 'red'
              }}
            >
              <SearchBar
                searchHandler={this.searchHandler}
                cardColor={this.state.cardColor}
                textColor={this.state.textColor}
                isActive={this.state.search}
              />

              <DropdownList
                filterHandler={this.filterHandler}
                isActive={this.state.filter}
              />
            </div>
            <br></br>
            <br></br>
            {this.state.search === false && this.state.filter === false && (
              <Main
                cardColor={localStorage.getItem('cardColor')}
                textColor={localStorage.getItem('textColor')}
              />
            )}
          </Fragment>
        </>
      </ThemeProvider>
    );
  }
}

export default HomePage;

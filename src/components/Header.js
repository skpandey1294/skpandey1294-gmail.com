import React, { Component, Fragment } from 'react';

class Header extends Component {
  render() {
    return (
      <div
        className="header"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor: this.props.headerStyle,
          paddingLeft: 45,
          paddingRight: 20,
          paddingTop: 20,
          paddingBottom: 20
        }}
      >
        <h2 style={{ color: localStorage.getItem('textColor') }}>
          <b>Where in the world?</b>
        </h2>
        <Fragment>
          <button
            style={{
              backgroundColor: 'Transparent',
              backgroundRepeat: 'no-repeat',
              border: 'none',
              cursor: 'pointer',
              overflow: 'hidden',
              outline: 'none'
            }}
            onClick={this.props.darkModeHandler}
          >
            <b style={{ color: this.props.textColor }}>Dark Mode</b>
          </button>
        </Fragment>
      </div>
    );
  }
}

export default Header;

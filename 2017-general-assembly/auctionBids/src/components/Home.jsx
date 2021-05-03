import React, { Component } from 'react';
import Nav from './Nav';
import Auction from './Auction';

class Home extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className='row'>
        <Auction />
        <Auction />
        <Auction />
        <Auction />
        <Auction />

        <Auction />
        <Auction />
        <Auction />
        <Auction />
        <Auction />

        <Auction />
        <Auction />
        <Auction />
        <Auction />
        <Auction />
        </div>
      </div>
    )
  }


}

module.exports = Home;
import React, { Component} from 'react';

class Auction extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seconds: Math.ceil(Math.random() * 10),
      cost: Math.round(Math.random() * 100) / 100
    }
  }
  // bid on item
  bid() {
    let cost = Math.round((this.state.cost + 0.01) * 100) / 100;
    this.setState({cost: cost, seconds: 10});
  }
  // tick per second
  tick() {
    this.setState({seconds: this.state.seconds - 1});
      if (this.state.seconds <= 0) {
        var autoBid = randomNum();
        if (autoBid >= 1) {
         this.bid();
        } else {
          clearInterval(this.interval)
        };
      }
  }
  // Starts timer tick down after page render 
  componentDidMount() {
    this.setState({ seconds: this.state.seconds });
    this.interval = setInterval(this.tick.bind(this), 1000);
  }

  // stops tick function if timer reaches zero
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className='auctionBox col-xs-2'>
        <a href='#'>Item Name</a>
        <img src='http://www.fillmurray.com/140/112' alt='placeholder img'/>
        <p>0:00:{ this.state.seconds }</p>
        <p>${ this.state.cost }</p>
        <p>user</p>
        <button 
          className='btn btn-warning' 
          onClick={ (e) => this.bid(e) }>
        Bid Now
        </button>
      </div>
    )
  }
}

module.exports = Auction;

function randomNum() {
  return Math.floor(Math.random() * 10);
}
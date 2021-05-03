import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <div>

        <nav>
          <ul>
            <li>
              <button className='navLinks btn btn-default'>Browse</button>
            </li>
            <li>
              <button className='navLinks btn btn-default'>Games</button>
            </li>
            <li>
              <button className='navLinks btn btn-default'>Badges</button>
            </li>
            <li>
              <button className='navLinks btn btn-default'>Quibids</button>
            </li>
            <li>
              <button className='navLinks btn btn-default'>Help</button>
            </li>
            <li>
              <button className='navLinks btn btn-default'>Join Now!</button>
            </li>
          </ul>
        </nav>

        <section>
          <div className='searchBar'>
            <form 
              className='form-inline'>
              <select 
                className='custom-select'>
                <option defaultValue>All Products</option>
                <option>Electronics</option>
                <option>Home & Garden</option>
                <option>Jewelry & Fashion</option>
                <option>Sports & Recreation</option>
                <option>Specialty Shops</option>
                <option>All Auctions</option>
                <option>Help</option>
              </select>
              <input 
                type='text'
                className='form-control'
                placeholder='Search live auctions, products, and more...' />
              <button
                type='button'
                className='btn btn-warning'>
                <span className='glyphicon glyphicon-search'></span>
              </button>
            </form>
          </div>
        </section>

        <section>
          <div className='infoCarousel'></div>
        </section>
      </div>
    )
  }
};

module.exports = Nav;
import React, { Component } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';


import "../Header/csHeader.css"

class Header extends Component {

    render() {
        
        return (
            <div className="total-header">
                <div className="top-header">
                    <div className="info-top-header">
                        <div className="left-nav">
                            <span>Cryptos:<a >12,050</a></span>
                            <span>Exchanges:<a>411</a></span>
                            <span>Market Cap:<a>$1,876,062,268,661</a></span>
                            <span>24h Vol:<a>$135,097,350,621</a></span>
                            <span>Dominance:<a> BTC: 42.5% ETH: 18.4%</a></span>
                            <span>ETH gas:<a> 41 Gwei <i className="fas fa-chevron-down"></i></a></span> 
                        </div>
                        <div className="right-nav">
                            <div class="dropdown">
                                <div className="dropbtn">
                                    <p>English<i className="fas fa-caret-down"></i></p>
                                </div>
                                
                                    <div class="dropdown">
                                        <div class="dropdown-content">
                                        <a href="!#"><input placeholder="Search"/><i className="fas fa-search"></i></a>
                                        <a href="!#">Link 1</a>
                                        <a href="!#">Link 2</a>
                                        <a href="!#">Link 3</a>
                                    </div>
                                </div>
                            </div>
                            <div className="panelbtn">
                                <img src="https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/USD.svg" alt="usd_stable" />
                                <p>USD<i className="fas fa-caret-down"></i></p>
                            </div>
                            <div className="change-bgcolor">
                                <p><i className="fas fa-moon"></i></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom-header">
                    <div className="info-bottom-header">
                        <div className="left-nav-bottom">
                            <div className="nav-bars">
                                <div>
                                    <button><img src="https://assets.website-files.com/5cbbb0da37d84e4838578f45/5cc08e530a5c750836baed0e_dark%20blue.svg" width="168px" height="62px"/></button>
                                </div>
                                <div><h5>Cryptocurrencies</h5></div>
                                <div><h5>Exchanges</h5></div>
                                <div><h5>NFT</h5></div>
                                <div><h5>Portfolio</h5></div>
                                <div><h5>Watchlist</h5></div>
                                <div><h5>Calendars</h5></div>
                                <div><h5>Products</h5></div>
                                <div><h5>Learn</h5></div>
                            </div>
                        </div>
                        <div className="right-nav-bottom">
                            <div>
                                <img src="https://s2.coinmarketcap.com/static/cloud/img/loyalty-program/diamond-icon.svg" alt="" width="20px" height="20px"/>
                            </div>
                            <div className="login-account">
                                <img src="https://s3.coinmarketcap.com/static/img/portraits/61359449293ccc2c4bcf07c7.png" alt="" width="30px" height="30px"/>
                            </div>
                            <div className="search-bar">
                                <input placeholder="Search"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
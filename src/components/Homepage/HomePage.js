import React, { Component } from 'react';

class HomePage extends Component {
  render () {
    return (
      <div className="total-homepage">
        <div className="total-top-homepage">
          <div className="total-adyoutube">
            <div className="top-adyoutube-video">
              <div className="adyoutube-video">

              </div>
            </div>
            <div className="top-adyoutube-video">
              <div className="adyoutube-content">

              </div>
            </div>
            
          </div>
          <div className="total-today-crypto">
          <div className="top-crypto-today">
              <div className="left-title-crypto-today">
                <h3>Todat's Cryptocurrency Prices by Market Cap</h3>
                <h5>The global crypto market cap is <bold>$1.94T</bold>,a<i className="fas fa-caret-up">1.17%</i> increase over the last day. <i>Read More</i> </h5>
              </div>
              <div className="right-title-crypto-today">
                <h4>Highlights</h4>
              </div>
            </div>
            <div className="bottom-crypto-today">
              <div className="trending-crypto-content">
                <div className="trending-title">

                </div>
              </div>
              <div className="biggest-gainers-crypto-content">

              </div>
              <div className="recently-added-crypto-content">

              </div>
            </div>
          </div>
        </div>
        <div className="total-middle-homepage">
          
        </div>
        <div className="total-bottom-homepage">
          
        </div>
      </div>
    )
  }
}

export default HomePage

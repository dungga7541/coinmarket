import React from "react";
import { Component } from "react";
import './cschart.css';
import logo from './imgs/Global Chart/chart1.PNG';
import logo2 from './imgs/Global Chart/chart1.PNG';
import logo3 from './imgs/Global Chart/chart2.PNG';
//COde cua bảo
class Chart extends Component {
    render() {
        return (
        <div className="global-chart">
            <div className="info-global-chart">
                <div className="content">
                    <div><h3>Global Cryptocurrency Charts</h3></div>
                    <div><h3>Total Cryptocurrency Market Cap</h3></div>
                </div>
            </div>
            <div className="chart-btn">
                <div className="top-btn">
                    <div className="top-right-nav">
                        <div className = "right-nav-button">
                            <div><button type="button">Linear Scale</button></div>
                            <div><button type="button">Log Scale</button></div>
                            <div><button type="button">Zoom</button></div>
                            <div><button type="button"><i className="fas fa-bars"></i></button></div>
                        </div>
                    </div>
                </div>
                <div className="bottom-btn">
                    <div className="bottom-left-nav">
                    <div><span><p>Zoom</p></span></div>
                        <div className="left-nav-bar">
                            <div><button type="button">1d</button></div>
                            <div><button type="button">7d</button></div>
                            <div><button type="button">1m</button></div>
                            <div><button type="button">3m</button></div>
                            <div><button type="button">1y</button></div>
                            <div><button type="button">YTD</button></div>
                            <div><button type="button">ALL</button></div>
                        </div>
                    </div>
                    <div className="bottom-right-nav">
                        <div className="right-nav-date">
                            <div><input type="date"></input></div>
                            <div> <p>--</p> </div>
                            <div><input type="date"></input></div>
                        </div>
                    </div>
                    <div className="bottom-img">
                        <div className="img-chart">
                            <div><img src={logo} width="1400"></img></div>
                        </div>
                    </div>
                    <div className="bottom-content">
                        <div><p>The above graph shows the total market cap of all cryptoassets, including stablecoins and tokens.</p></div>
                    </div>
                </div>
            </div>
            <div className="info-global-chart">
                <div className="content">
                    <div><h3>Total Cryptocurrency Market Capitalization (Excluding Bitcoin)</h3></div>
                </div>
            </div>
            <div className="chart-btn">
                <div className="top-btn">
                    <div className="top-right-nav">
                        <div className = "right-nav-button">
                            <div><button type="button">Linear Scale</button></div>
                            <div><button type="button">Log Scale</button></div>
                            <div><button type="button">Zoom</button></div>
                            <div><button type="button"><i className="fas fa-bars"></i></button></div>
                        </div>
                    </div>
                </div>
                <div className="bottom-btn">
                    <div className="bottom-left-nav">
                    <div><span><p>Zoom</p></span></div>
                        <div className="left-nav-bar">
                            <div><button type="button">1d</button></div>
                            <div><button type="button">7d</button></div>
                            <div><button type="button">1m</button></div>
                            <div><button type="button">3m</button></div>
                            <div><button type="button">1y</button></div>
                            <div><button type="button">YTD</button></div>
                            <div><button type="button">ALL</button></div>
                        </div>
                    </div>
                    <div className="bottom-right-nav">
                        <div className="right-nav-date">
                            <div><input type="date"></input></div>
                            <div> <p>--</p> </div>
                            <div><input type="date"></input></div>
                        </div>
                    </div>
                    <div className="bottom-img">
                        <div className="img-chart">
                            <div><img src={logo2} width="1400"></img></div>
                        </div>
                    </div>
                    <div className="bottom-content">
                        <div><p>The above chart shows the total cryptocurrency market capitalization, excluding Bitcoin. The total includes stablecoins and tokens. To many people in crypto this is a key Bitcoin graph to understand the entire space. It is also a way to view the total alt coin market cap.</p></div>
                    </div>
                </div>
            </div>
            <div className="info-global-chart">
                <div className="content">
                    <div><h3>Major Cryptoassets By Percentage of Total Market Capitalization (Bitcoin Dominance Chart)</h3></div>
                </div>
            </div>
            <div className="chart-btn">
                <div className="top-btn">
                    <div className="top-right-nav">
                        <div className = "right-nav-button">
                            <div><button type="button">Linear Scale</button></div>
                            <div><button type="button">Log Scale</button></div>
                            <div><button type="button">Zoom</button></div>
                            <div><button type="button"><i className="fas fa-bars"></i></button></div>
                        </div>
                    </div>
                </div>
                <div className="bottom-btn">
                    <div className="bottom-left-nav">
                    <div><span><p>Zoom</p></span></div>
                        <div className="left-nav-bar">
                            <div><button type="button">1d</button></div>
                            <div><button type="button">7d</button></div>
                            <div><button type="button">1m</button></div>
                            <div><button type="button">3m</button></div>
                            <div><button type="button">1y</button></div>
                            <div><button type="button">YTD</button></div>
                            <div><button type="button">ALL</button></div>
                        </div>
                    </div>
                    <div className="bottom-right-nav">
                        <div className="right-nav-date">
                            <div><input type="date"></input></div>
                            <div> <p>--</p> </div>
                            <div><input type="date"></input></div>
                        </div>
                    </div>
                    <div className="bottom-img">
                        <div className="img-chart">
                            <div><img src={logo3} width="1400"></img></div>
                        </div>
                    </div>
                    <div className="bottom-content">
                        <div><p>The above graph shows the individual proportions of the largest ten cryptoassets relative to the total market capitalization of all assets. Since BTC was the first asset, it has remained the largest by market cap, which is why it’s dominance in the market is a number that many people follow. We describe the assets tracked in this chart as cryptoassets because it includes tokens and stablecoins.</p></div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Chart;
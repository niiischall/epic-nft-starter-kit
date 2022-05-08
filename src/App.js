import React from "react";

import './styles/App.css';

// Constants
const OPENSEA_LINK = '';
const TOTAL_MINT_COUNT = 50;

const App = () => {
  // Render Methods
  const renderNotConnectedContainer = () => (
    <button className="cta-button connect-wallet-button">
      Connect to Wallet
    </button>
  );

  return (
    <div className="App">
      <div className="container">
        <div className="header-container">
          <p className="header gradient-text">EPIC NFT Collection</p>
          <p className="sub-text">
            Each unique. Each beautiful. Discover your EPIC NFT today.
          </p>
          {renderNotConnectedContainer()}
        </div>
        <footer className="footer-container">
          <span className="footer-text">Built wth ❤️</span>
        </footer>
      </div>
    </div>
  );
};

export default App;

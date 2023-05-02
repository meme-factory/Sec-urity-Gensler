import logo from './img/gensler.png';
import arbLogo from './img/arbitrumshield.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        The goal of this Project is to satirize institutions in their futile war against the crypto space.
        </p>
        <p>
        This industry needs a crypto meme army, well organized and determined to make every holder laugh out loud!
        </p>

        <div>
          <img width={50} src={arbLogo} className="arbLogo" alt="arbitrum logo" />
        </div>
        <a
          className="Coin-address"
          href="https://arbiscan.io/address/0x24c8be8686c67ba74a7eebed29d703de9b6ea941"
          target="_blank"
          rel="noopener noreferrer"
        >
          Token Address
        </a>
        <a
          className="Git-link"
          href="https://github.com/meme-factory/Sec-urity-Gensler"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Link
        </a>
        <a
          className="Twitter-link"
          href="https://twitter.com/Gensler_Token"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter Link
        </a>
        <a
          className="White-paper"
          href="https://github.com/meme-factory/Sec-urity-Gensler/blob/main/white-paper.md"
          target="_blank"
          rel="noopener noreferrer"
        >
          White Paper
        </a>
        <p>
        join the GENSLER crypto security meme commodity token Army!
        </p>
        <a
          className="Buy-token"
          href="https://www.dextools.io/app/en/arbitrum/pair-explorer/0x24575eba928b925248e38624e66225fc9bc12584s"
          target="_blank"
          rel="noopener noreferrer"
        >
          BUY SEC-urity GENSLER Token!
        </a>
        <a
          className="Locked-liquidity"
          href="https://www.pinksale.finance/pinklock/record/1003729?chain=Arbitrum"
          target="_blank"
          rel="noopener noreferrer"
        >
          100% LIQUIDITY LOCKED!
        </a>

      </header>
    </div>
  );
  
}

export default App;

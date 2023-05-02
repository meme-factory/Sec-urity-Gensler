import logo from './img/gensler.png'
import twitter from './img/twitter_white.png'
import github from './img/github_white.png'
import arbLogo from './img/arbitrumshield.png'
import './App.css'

function App() {
  return (
    <div className="App">
      
      <div style={{ position: 'fixed', top: 20, left: 20 }}>
        <a
          className="Git-link"
          href="https://github.com/meme-factory/Sec-urity-Gensler/blob/main/white-paper.md"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginRight: 20 }}
        >
          <img width={80} src={github} alt="Github" />
        </a>
        <a className="Twitter-link" href="https://twitter.com/Gensler_Token" target="_blank" rel="noopener noreferrer">
          <img width={80} src={twitter} alt="Github" />
        </a>
      </div>

      <div style={{ position: 'fixed', top: 20, right: 20, display: 'flex', alignItems: 'center' }}>
        <a
          className="Coin-address"
          href="https://arbiscan.io/address/0x24c8be8686c67ba74a7eebed29d703de9b6ea941"
          target="_blank"
          rel="noopener noreferrer"
        >
          0x24c8be8686c67ba74a7eebed29d703de9b6ea941
        </a>
        <img width={50} src={arbLogo} className="arbLogo" alt="arbitrum logo" />
      </div>

      <div style={{position: 'absolute', width: '100%', zIndex: 0}}>
        <img src={logo} className="App-logo" alt="logo" />
      </div>

      <header className="App-header">
        

        <div>
          <p>The goal of this Project is to satirize institutions in their futile war against the crypto space.</p>
          <p>
            This industry needs a crypto meme army, well organized and determined to make every holder laugh out loud!
          </p>
        </div>
        <div>
          <p>join the GENSLER crypto security meme commodity token Army!</p>
          <a
            className="Buy-token"
            href="https://www.dextools.io/app/en/arbitrum/pair-explorer/0x24575eba928b925248e38624e66225fc9bc12584s"
            target="_blank"
            rel="noopener noreferrer"
          >
            BUY SEC-urity GENSLER Token!
            <br />
            100% LIQUIDITY LOCKED!
          </a>
        </div>
      </header>
    </div>
  )
}

export default App

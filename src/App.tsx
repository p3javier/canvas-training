import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import CanvasImage from './components/CanvasImage/CanvasImage';
function App() {
  const [count, setCount] = useState(0);
  const [ showCanvas, setShowCanvas] = useState(false);

  return (
    <div className="App">
      <header className={`Base-header App-header-${showCanvas ? "normal": "expanded" }`}>
        { showCanvas ? <></> : <><img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
          {' | '}
          <a
            className="App-link"
            href="#"
            target="_self"
            rel="noopener noreferrer"
            onClick={() => setShowCanvas(true)}
          >
            Show Canvas
          </a>
        </p></>}
        
      </header>

      { showCanvas ? <CanvasImage /> : <></>}
    </div>
  )
}

export default App

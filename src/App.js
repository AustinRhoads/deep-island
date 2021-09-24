
import './App.css';
import hunter_down_sheet from './images/hunter_down_walk.png'

function App() {
  return (
    <div className="App">
      <div id="viewport">
        <div id="hunter">
            <img className="hd_sheet pixelart" alt="" src={hunter_down_sheet} />
        </div>

      </div>
    </div>
  );
}

export default App;

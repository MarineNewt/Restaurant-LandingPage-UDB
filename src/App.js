import './App.css';
// import { useState } from "react";
import phom1 from './images/main3.jpg'
import phom2 from './images/main1.jpg'
import phom3 from './images/main2.jpg'

function App() {
//  const [menu, setmenu] = useState("")
  return (
    <div>
      <div className="App-Section">
        <div className="App-SectionC" >
        <img
            className="mainbackground-image"
            src={phom1}
            alt="Background"
        />
        <div className="content-container">
          <div>
            <h1 className="center-logo"> U DupBop</h1>
            <h3 className="center-sublogo">Asian Fusion </h3>
          </div>
        </div>

        </div>
      </div>
      <div className="App-Section">
        <div className="App-SectionC"  >
        <img
            className="mainbackground-image"
            src={phom1}
            alt="Background"
        />
        <div className="content-container">
          <div>
            <h1 className="center-logo menu">Explore The Menu</h1>
            <div className="menubutton-section">
              <button className="menubutton" > Bowls </button>
              <button className="menubutton" > Bento </button>
            </div>
            <div className="menubutton-section">
              <button className="menubutton" > Hot Stone </button>
              <button className="menubutton" > Korean Chicken </button>
            </div>
            <div className="menubutton-section">
              <button className="menubutton" > Sushi & Poke </button>
              <button className="menubutton" > Side Dishes </button>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className="App-Section">
        <div className="App-SectionC" >
        <div className="content-container">
          <div>
            <h1 className="center-logo"> Location, hours, contact</h1>
          </div>
        </div>

        </div>
      </div>
    </div>
  );
}

export default App;

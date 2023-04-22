import './App.css';
import { useState } from "react";
import phom1 from './images/main3.jpg';
import phom2 from './images/Alt3.jpg';
import phom3 from './images/Alt1.jpg';
import {Menu1, Menu2, Menu3, Menu4, Menu5, Menu6} from './Menu.js';

function App() {
  const [menu, setmenu] = useState("0")
  const menuHeaders = ["empty", "Bowls", "Bento", "Hot Stone", "Korean Chicken", "Sushi & Poke", "Sides"]
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
            className="mainbackground-image two"
            src={phom2}
            alt="Background"
        />
        <img
            className="mainbackground-image two"
            src={phom3}
            alt="Background"
        />
        <div className="content-container">
          <div style={{width: '100%'}}>
            <h1 className="center-logo menu">Explore The Menu</h1>
            <div className="menubutton-section">
              <button className="menubutton" onClick={(event) => {setmenu(1)}}> Bowls </button>
              <button className="menubutton" onClick={(event) => {setmenu(2)}}> Bento </button>
            </div>
            <div className="menubutton-section">
              <button className="menubutton" onClick={(event) => {setmenu(3)}}> Hot Stone </button>
              <button className="menubutton" onClick={(event) => {setmenu(4)}}> Korean Chicken </button>
            </div>
            <div className="menubutton-section">
              <button className="menubutton" onClick={(event) => {setmenu(5)}}> Sushi & Poke </button>
              <button className="menubutton"onClick={(event) => {setmenu(6)}}> Side Dishes </button>
            </div>
          </div>
        </div>
        </div>
      </div>
      { menu > 0 && <div>
        <div></div>
        <h1 className='center-logo sub'>{menuHeaders[menu]}</h1>
        <div className="Menu-Section" style={{}}>
          {menu === 1 && Menu1.map((item) => {return <div className="menu-item"><div style={{display: 'flex', position: 'relative'}}><p className='menu-item-name'>{item.name}</p><p className='menu-item-price'>- ${item.price}</p> {item.hot === true && <p></p>} </div></div>})}
          {menu === 2 && Menu2.map((item) => {return <div className="menu-item"><div style={{display: 'flex', position: 'relative'}}><p className='menu-item-name'>{item.name}</p><p className='menu-item-price'>- ${item.price}</p> {item.hot === true && <p></p>} </div></div>})}
          {menu === 3 && Menu3.map((item) => {return <div className="menu-item"><div style={{display: 'flex', position: 'relative'}}><p className='menu-item-name'>{item.name}</p><p className='menu-item-price'>- ${item.price}</p> {item.hot === true && <p></p>} </div></div>})}
          {menu === 4 && Menu4.map((item) => {return <div className="menu-item"><div style={{display: 'flex', position: 'relative'}}><p className='menu-item-name'>{item.name}</p><p className='menu-item-price'>- ${item.price}</p> {item.hot === true && <p></p>} </div></div>})}
          {menu === 5 && Menu5.map((item) => {return <div className="menu-item"><div style={{display: 'flex', position: 'relative'}}><p className='menu-item-name'>{item.name}</p><p className='menu-item-price'>- ${item.price}</p> {item.hot === true && <p></p>} </div></div>})}
          {menu === 6 && Menu6.map((item) => {return <div className="menu-item"><div style={{display: 'flex', position: 'relative'}}><p className='menu-item-name'>{item.name}</p><p className='menu-item-price'>- ${item.price}</p> {item.hot === true && <p></p>} </div></div>})}
        </div>
      </div>}
      <div className="App-Section" style={{backgroundColor: 'black'}}>
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

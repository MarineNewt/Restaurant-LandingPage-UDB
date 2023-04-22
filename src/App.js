import './App.css';
import { useState } from "react";
import phom1 from './images/main3.jpg';
import phom2 from './images/Alt3.jpg';
import phom3 from './images/Alt1.jpg';
import phom4 from './images/main2.jpg';
import phom5 from './images/Alt4.jpg';

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
      { menu > 0 && <div style={{backgroundColor: 'antiquewhite'}}>
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
      <div className="App-Section info">
        <div className="App-SectionC" >
        <div className="content-container" >
          <div style={{width: '100vw', display: 'flex', flexWrap: 'wrap', justifyContent: "center"}}>
            <div className="InfoSection">
              <br></br>
              <img
              className="info-image"
              src={phom4}
              alt="Background"
              />
              <b>
                <p>Open Daily</p> 	
                <p>11:00 AM - 9:00 PM</p> 
              </b>
                <p>*Holiday Hours May Differ</p>
            </div>
            <div className="InfoSection">
             <img
              className="info-image"
              src={phom5}
              alt="Background"
              />
              <b>
                <p>Contact:</p> 	
                <p>Phone: (206)-632-6975 </p> 
              </b>
              <a href="https://www.doordash.com/store/u-dupbop-seattle-1034523/" target="_blank" rel="noopener noreferrer"><button className="orderButton">Order Online</button></a>
            </div>
            <div className="InfoSection">
              <br></br>
              <iframe title="Location"className="info-image" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.383751477055!2d-122.3154076246606!3d47.65754098445985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549015a33651a57d%3A0xa5c46e9f7ea2371c!2sU%20DupBop%20Asian%20Fusion!5e0!3m2!1sen!2sus!4v1682182822179!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              <b>
                <p>4124 University Way NE, </p> 
                <p>Seattle, WA 98105</p>
              </b>
            </div>
            
          </div>
        </div>

        </div>
      </div>
    </div>
  );
}

export default App;

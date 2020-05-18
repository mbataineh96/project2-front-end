import React from 'react';
import './App.css';
import './Tile.css';

import {Tile} from './Tile.js';

const intialTilesEasy = [
  {id: "0", name: "Bridget", url: "https://user-images.githubusercontent.com/56237004/82157107-20e0f300-9845-11ea-8b31-5bef21a293fe.png"},
  {id: "1", name: "Poppy", url: "https://user-images.githubusercontent.com/56237004/82161045-36fbad00-985f-11ea-8d40-edc884f6eba9.png"},
  {id: "2", name: "SatinChenille", url: "https://user-images.githubusercontent.com/56237004/82161800-8513af00-9865-11ea-9598-f0f72d10d3af.jpg"},
  {id: "3", name: "Cooper", url: "https://user-images.githubusercontent.com/56237004/82161295-19c7de00-9861-11ea-8323-e91ea36687fc.jpeg"},
  {id: "4", name: "Branch", url: "https://user-images.githubusercontent.com/56237004/82161912-39add080-9866-11ea-9907-9a7ce3f545f9.jpg"},
  {id: "5", name: "Rosiepuff", url: "https://user-images.githubusercontent.com/56237004/82162625-96f85080-986b-11ea-8bc2-e51a106461f0.png"},
  {id: "6", name: "Peppy", url: "https://user-images.githubusercontent.com/56237004/82162833-fe62d000-986c-11ea-8994-5d889d9ffb93.png"},
  {id: "7", name: "Smidge", url: "https://user-images.githubusercontent.com/56237004/82162881-4a157980-986d-11ea-88ad-6994a43799a8.jpg"},
  {id: "8", name: "Creek", url: "https://user-images.githubusercontent.com/56237004/82162959-9f518b00-986d-11ea-982c-64bf17e512c4.png"},
  {id: "9", name: "Grist", url: "https://user-images.githubusercontent.com/56237004/82163021-08d19980-986e-11ea-8469-c1534b1ee93a.jpg"},
  {id: "10", name: "Bridget", url: "https://user-images.githubusercontent.com/56237004/82157107-20e0f300-9845-11ea-8b31-5bef21a293fe.png"},
  {id: "11", name: "Poppy", url: "https://user-images.githubusercontent.com/56237004/82161045-36fbad00-985f-11ea-8d40-edc884f6eba9.png"},
  {id: "12", name: "SatinChenille", url: "https://user-images.githubusercontent.com/56237004/82161800-8513af00-9865-11ea-9598-f0f72d10d3af.jpg"},
  {id: "13", name: "Cooper", url: "https://user-images.githubusercontent.com/56237004/82161295-19c7de00-9861-11ea-8323-e91ea36687fc.jpeg"},
  {id: "14", name: "Branch", url: "https://user-images.githubusercontent.com/56237004/82161912-39add080-9866-11ea-9907-9a7ce3f545f9.jpg"},
  {id: "15", name: "Rosiepuff", url: "https://user-images.githubusercontent.com/56237004/82162625-96f85080-986b-11ea-8bc2-e51a106461f0.png"},
  {id: "16", name: "Peppy", url: "https://user-images.githubusercontent.com/56237004/82162833-fe62d000-986c-11ea-8994-5d889d9ffb93.png"},
  {id: "17", name: "Smidge", url: "https://user-images.githubusercontent.com/56237004/82162881-4a157980-986d-11ea-88ad-6994a43799a8.jpg"},
  {id: "18", name: "Creek", url: "https://user-images.githubusercontent.com/56237004/82162959-9f518b00-986d-11ea-982c-64bf17e512c4.png"},
  {id: "19", name: "Grist", url: "https://user-images.githubusercontent.com/56237004/82163021-08d19980-986e-11ea-8469-c1534b1ee93a.jpg"},
];


function App() {

  

  return (
    <div className="App">

      <div id="user-bar">
        <img src={"https://user-images.githubusercontent.com/56237004/82163472-091f6400-9871-11ea-9f1d-54595344fc11.png"}
        alt={"DreamWorks Trolls Logo"} className="logo" />

        <div className="button-box">
          <button type="button" className="tgl-register">Register</button>
          <button type="button" className="tgl-login">Login</button>
        </div>
      </div>

      <div id="form-container">
        <div id="register-box" className="form-box">
          <form className="input-group">
            <input type="text" id="username-input" className="input-field" placeholder="username" required />
            <input type="password" id="password-input" className="input-field" placeholder="password" required />
            <button type="button" className="register-enter">Register</button>
          </form>
        </div>
        <div id="login-box" className="form-box">
          <form className="input-group">
            <input type="text" className="input-field" placeholder="username" required />
            <input type="password" className="input-field" placeholder="password" required />
            <button type="button" className="login-enter">Login</button>
          </form>
        </div>
      </div>
          
      <div id="game-board-container">
        <div id="game-board">
          {intialTilesEasy.map(image => <Tile key={image.id} image={image} />)}
        </div>
      </div>

    </div>
  );
}

export default App;

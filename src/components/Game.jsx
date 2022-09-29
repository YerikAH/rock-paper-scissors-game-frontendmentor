import React from "react";
import { useReducer, useState } from "react";
import { initialState, optionsMore } from "../reducers/app.reducer";

// images
import logo from "../images/logo-bonus.svg";

export default function Game() {
  //0 = piedra
  //1 = papel
  //2 = tijera
  const [state, dispatch] = useReducer(optionsMore, initialState);
  const [randomNumber, setRandomNumber] = useState(0);

  const handleTijera = () => {
    setRandomNumber(parseInt(Math.random() * 5));
    dispatch({
      select: "TIJERA",
      randomNumber: randomNumber,
    });
    console.log(randomNumber);
  };
  const handlePapel = () => {
    setRandomNumber(parseInt(Math.random() * 5));
    console.log(randomNumber);
    dispatch({ select: "PAPEL", randomNumber: randomNumber });
  };
  const handlePiedra = () => {
    setRandomNumber(parseInt(Math.random() * 5));
    dispatch({ select: "PIEDRA", randomNumber: randomNumber });
    console.log(randomNumber);
  };
  const handleLagarto = () => {
    setRandomNumber(parseInt(Math.random() * 5));
    dispatch({ select: "LAGARTO", randomNumber: randomNumber });
    console.log(randomNumber);
  };
  const handleTiburon = () => {
    setRandomNumber(parseInt(Math.random() * 5));
    dispatch({ select: "TIBURON", randomNumber: randomNumber });
    console.log(randomNumber);
  };

  const handleReset = () => {
    dispatch({ select: "RESET" });
  };
  return (
    <div>
      <div className="navegator" role="nav">
        <ul>
          <li>
            <a href="">
              <img src={logo} alt="logo" />
            </a>
          </li>
          <li>
            <a href="">
              <span>SCORE</span>
              <span>0</span>
            </a>
          </li>
        </ul>
      </div>
      {state.menu && (
        <div>
          <h2>Piedra papel o tijera</h2>
          <button onClick={handlePiedra}>Piedra</button>
          <button onClick={handlePapel}>Papel</button>
          <button onClick={handleTijera}>Tijera</button>
          <button onClick={handleLagarto}>Lagarto</button>
          <button onClick={handleTiburon}>Tiburon</button>
        </div>
      )}
      {!state.menu && (
        <p>
          Tu elegiste: {state.choice}, tu enemigo eligio:{state.enemy}, El
          resultado es: {state.result}
          <button onClick={handleReset}>Reset</button>
        </p>
      )}
    </div>
  );
}

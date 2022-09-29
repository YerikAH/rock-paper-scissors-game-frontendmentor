import React from "react";
import { useReducer, useState } from "react";
import { initialState, optionsMore } from "../reducers/app.reducer";
import {
  DivCircleOptionOne,
  DivCircleOptionTwo,
  FiveDivImage,
  FiveDivImageContainer,
  ImageLogo,
  Navegator,
  NavegatorUl,
  NavegatorUlLi,
  NavegatorUlLiA,
  NavegatorUlLiASpecial,
} from "./Styles";

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
    <React.Fragment>
      <Navegator className="navegator" role="nav">
        <NavegatorUl>
          <NavegatorUlLi>
            <NavegatorUlLiA href="#">
              <ImageLogo src={logo} alt="logo" />
            </NavegatorUlLiA>
          </NavegatorUlLi>
          <NavegatorUlLi>
            <NavegatorUlLiASpecial href="">
              <span>SCORE</span>
              <span>0</span>
            </NavegatorUlLiASpecial>
          </NavegatorUlLi>
        </NavegatorUl>
      </Navegator>
      {state.menu && (
        <FiveDivImageContainer>
          <FiveDivImage>
            <DivCircleOptionOne>
              <DivCircleOptionTwo>
                <button onClick={handlePiedra}>Piedra</button>
              </DivCircleOptionTwo>
            </DivCircleOptionOne>
            <DivCircleOptionOne>
              <DivCircleOptionTwo>
                <button onClick={handlePapel}>Papel</button>
              </DivCircleOptionTwo>
            </DivCircleOptionOne>
            <DivCircleOptionOne>
              <DivCircleOptionTwo>
                <button onClick={handleTijera}>Tijera</button>
              </DivCircleOptionTwo>
            </DivCircleOptionOne>
            <DivCircleOptionOne>
              <DivCircleOptionTwo>
                <button onClick={handleTiburon}>Tiburon</button>
              </DivCircleOptionTwo>
            </DivCircleOptionOne>
            <DivCircleOptionOne>
              <DivCircleOptionTwo>
                <button onClick={handleLagarto}>Lagarto</button>
              </DivCircleOptionTwo>
            </DivCircleOptionOne>
          </FiveDivImage>
        </FiveDivImageContainer>
      )}
      {!state.menu && (
        <p>
          Tu elegiste: {state.choice}, tu enemigo eligio:{state.enemy}, El
          resultado es: {state.result}
          <button onClick={handleReset}>Reset</button>
        </p>
      )}
    </React.Fragment>
  );
}

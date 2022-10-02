import React, { useEffect } from "react";
import { useReducer, useState } from "react";
import { initialState, optionsMore } from "../reducers/app.reducer";
import {
  ContainerChoiceAll,
  ContainerChoiceImge,
  DivAletoreStop,
  DivCircleOptionOne,
  DivCircleOptionTwo,
  DivImageBlue,
  DivImagePurple,
  DivImageRed,
  DivImageSky,
  DivImageYellow,
  DivResult,
  DivResultContent,
  FiveDivImage,
  FiveDivImageContainer,
  ImageLogo,
  Navegator,
  NavegatorUl,
  NavegatorUlLi,
  NavegatorUlLiA,
  NavegatorUlLiASpecial,
  ParrChoiceUser,
  SpanScoreCounts,
  SpanScoreText,
} from "./Styles";

// images
import logo from "../images/logo-bonus.svg";

export default function Game() {
  //0 = piedra
  //1 = papel
  //2 = tijera

  const [countTime, setCountTime] = useState(false);
  const [choiceRender, setChoiceRender] = useState("");
  const [choiceRenderEnemy, setChoiceRenderEnemy] = useState("");
  const [state, dispatch] = useReducer(optionsMore, initialState);
  const [randomNumber, setRandomNumber] = useState(0);
  const [styleDinamic, setStyleDinamic] = useState({});

  const handleTijera = () => {
    setRandomNumber(parseInt(Math.random() * 5));
    dispatch({
      select: "TIJERA",
      randomNumber: randomNumber,
    });
    console.log(randomNumber);
    setChoiceRender("yellow");
    validateColor();
  };
  const handlePapel = () => {
    setChoiceRender("blue");
    setRandomNumber(parseInt(Math.random() * 5));
    console.log(randomNumber);
    dispatch({ select: "PAPEL", randomNumber: randomNumber });
    validateColor();
  };
  const handlePiedra = () => {
    setChoiceRender("red");
    setRandomNumber(parseInt(Math.random() * 5));
    dispatch({ select: "PIEDRA", randomNumber: randomNumber });
    validateColor();

    console.log(randomNumber);
  };
  const handleLagarto = () => {
    setChoiceRender("purple");
    setRandomNumber(parseInt(Math.random() * 5));
    dispatch({ select: "LAGARTO", randomNumber: randomNumber });
    validateColor();

    console.log(randomNumber);
  };
  const handleTiburon = () => {
    setChoiceRender("sky");
    setRandomNumber(parseInt(Math.random() * 5));
    dispatch({ select: "TIBURON", randomNumber: randomNumber });
    validateColor();

    console.log(randomNumber);
  };

  const handleReset = () => {
    dispatch({ select: "RESET" });
    if (countTime) {
      setCountTime(false);
      setStyleDinamic({});
    }
  };
  function validateColor() {
    setTimeout(() => {
      setCountTime(true);
    }, 2000);
    setTimeout(() => {
      setStyleDinamic({
        boxShadow:
          "inset 0px 6px 5px transparent, 0px 0px 0px 15px #ffffff10, 0px 0px 50px #ffffff10, 0px 0px 0px 40px #ffffff05, 0px 0px 0px 70px #ffffff08",
      });
    }, 2500);
    if (randomNumber == 0) {
      setChoiceRenderEnemy("red");
    } else if (randomNumber == 1) {
      setChoiceRenderEnemy("blue");
    } else if (randomNumber == 2) {
      setChoiceRenderEnemy("yellow");
    } else if (randomNumber == 3) {
      setChoiceRenderEnemy("sky");
    } else if (randomNumber == 4) {
      setChoiceRenderEnemy("purple");
    }
    console.log(state);
    console.log(initialState);
  }

  return (
    <React.Fragment>
      <Navegator className="navegator" role="nav">
        <NavegatorUl>
          <NavegatorUlLi>
            <ImageLogo src={logo} alt="logo" />
          </NavegatorUlLi>
          <NavegatorUlLi>
            <NavegatorUlLiASpecial href="">
              <SpanScoreText>SCORE</SpanScoreText>
              <SpanScoreCounts>0</SpanScoreCounts>
            </NavegatorUlLiASpecial>
          </NavegatorUlLi>
        </NavegatorUl>
      </Navegator>
      {state.menu && (
        <FiveDivImageContainer>
          <FiveDivImage>
            <DivCircleOptionOne bottom right color="red" just="-60px">
              <DivCircleOptionTwo>
                <DivImageRed onClick={handlePiedra}></DivImageRed>
              </DivCircleOptionTwo>
            </DivCircleOptionOne>
            <DivCircleOptionOne
              right
              top
              color="blue"
              justop="70px"
              justright="-50px"
            >
              <DivCircleOptionTwo>
                <DivImageBlue onClick={handlePapel}></DivImageBlue>
              </DivCircleOptionTwo>
            </DivCircleOptionOne>
            <DivCircleOptionOne
              top
              bottom
              left
              right
              mar
              color="yellow"
              justop="-50px"
            >
              <DivCircleOptionTwo>
                <DivImageYellow onClick={handleTijera}></DivImageYellow>
              </DivCircleOptionTwo>
            </DivCircleOptionOne>
            <DivCircleOptionOne
              left
              top
              color="sky"
              justop="70px"
              justleft="-50px"
            >
              <DivCircleOptionTwo>
                <DivImageSky onClick={handleTiburon}></DivImageSky>
              </DivCircleOptionTwo>
            </DivCircleOptionOne>
            <DivCircleOptionOne left bottom color="purple" just="-60px">
              <DivCircleOptionTwo>
                <DivImagePurple onClick={handleLagarto}></DivImagePurple>
              </DivCircleOptionTwo>
            </DivCircleOptionOne>
          </FiveDivImage>
        </FiveDivImageContainer>
      )}
      {!state.menu && (
        <DivResult>
          <DivResultContent>
            <ContainerChoiceAll>
              {state.result === "Ganaste" ? (
                <>
                  <ContainerChoiceImge>
                    <DivCircleOptionOne
                      color={choiceRender}
                      style={styleDinamic}
                    >
                      <DivCircleOptionTwo>
                        {choiceRender === "red" && <DivImageRed></DivImageRed>}
                        {choiceRender === "blue" && (
                          <DivImageBlue></DivImageBlue>
                        )}
                        {choiceRender === "yellow" && (
                          <DivImageYellow></DivImageYellow>
                        )}
                        {choiceRender === "purple" && (
                          <DivImagePurple></DivImagePurple>
                        )}
                        {choiceRender === "sky" && <DivImageSky></DivImageSky>}
                      </DivCircleOptionTwo>
                    </DivCircleOptionOne>
                  </ContainerChoiceImge>
                  <ParrChoiceUser>YOU PICKED</ParrChoiceUser>
                </>
              ) : (
                <>
                  <ContainerChoiceImge>
                    <DivCircleOptionOne color={choiceRender}>
                      <DivCircleOptionTwo>
                        {choiceRender === "red" && <DivImageRed></DivImageRed>}
                        {choiceRender === "blue" && (
                          <DivImageBlue></DivImageBlue>
                        )}
                        {choiceRender === "yellow" && (
                          <DivImageYellow></DivImageYellow>
                        )}
                        {choiceRender === "purple" && (
                          <DivImagePurple></DivImagePurple>
                        )}
                        {choiceRender === "sky" && <DivImageSky></DivImageSky>}
                      </DivCircleOptionTwo>
                    </DivCircleOptionOne>
                  </ContainerChoiceImge>
                  <ParrChoiceUser>YOU PICKED</ParrChoiceUser>{" "}
                </>
              )}
            </ContainerChoiceAll>
            {!countTime ? (
              <DivAletoreStop></DivAletoreStop>
            ) : (
              <React.Fragment>
                <ContainerChoiceAll>
                  {state.result === "Perdiste" ? (
                    <>
                      <ContainerChoiceImge>
                        <DivCircleOptionOne
                          color={choiceRenderEnemy}
                          style={styleDinamic}
                        >
                          <DivCircleOptionTwo>
                            {choiceRenderEnemy === "red" && (
                              <DivImageRed></DivImageRed>
                            )}
                            {choiceRenderEnemy === "blue" && (
                              <DivImageBlue></DivImageBlue>
                            )}
                            {choiceRenderEnemy === "yellow" && (
                              <DivImageYellow></DivImageYellow>
                            )}
                            {choiceRenderEnemy === "purple" && (
                              <DivImagePurple></DivImagePurple>
                            )}
                            {choiceRenderEnemy === "sky" && (
                              <DivImageSky></DivImageSky>
                            )}
                          </DivCircleOptionTwo>
                        </DivCircleOptionOne>
                      </ContainerChoiceImge>
                      <ParrChoiceUser>THE HOUSE PICKED</ParrChoiceUser>
                    </>
                  ) : (
                    <>
                      <ContainerChoiceImge>
                        <DivCircleOptionOne color={choiceRenderEnemy}>
                          <DivCircleOptionTwo>
                            {choiceRenderEnemy === "red" && (
                              <DivImageRed></DivImageRed>
                            )}
                            {choiceRenderEnemy === "blue" && (
                              <DivImageBlue></DivImageBlue>
                            )}
                            {choiceRenderEnemy === "yellow" && (
                              <DivImageYellow></DivImageYellow>
                            )}
                            {choiceRenderEnemy === "purple" && (
                              <DivImagePurple></DivImagePurple>
                            )}
                            {choiceRenderEnemy === "sky" && (
                              <DivImageSky></DivImageSky>
                            )}
                          </DivCircleOptionTwo>
                        </DivCircleOptionOne>
                      </ContainerChoiceImge>
                      <ParrChoiceUser>THE HOUSE PICKED</ParrChoiceUser>
                    </>
                  )}
                </ContainerChoiceAll>
              </React.Fragment>
            )}
          </DivResultContent>
          <p>
            Tu elegiste: {state.choice}, tu enemigo eligio:{state.enemy}, El
            resultado es: {state.result}
            <button onClick={handleReset}>Reset</button>
          </p>
        </DivResult>
      )}
    </React.Fragment>
  );
}

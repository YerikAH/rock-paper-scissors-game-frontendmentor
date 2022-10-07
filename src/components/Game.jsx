import React, { useEffect } from "react";
import { useReducer, useState } from "react";
import { initialState, optionsMore } from "../reducers/app.reducer";
import {
  ButtonForReset,
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
  DivResultTextResults,
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
  Footer,
  TitleTextWinnerOrLoser,
  ButtonFooter,
} from "./Styles";

// images
import logo from "../images/logo-bonus.svg";

export default function Game({ setModal }) {
  //0 = piedra
  //1 = papel
  //2 = tijera

  const [countTime, setCountTime] = useState(false);
  const [choiceRender, setChoiceRender] = useState("");
  const [choiceRenderEnemy, setChoiceRenderEnemy] = useState("");
  const [state, dispatch] = useReducer(optionsMore, initialState);
  const [randomNumber, setRandomNumber] = useState(0);
  const [styleDinamic, setStyleDinamic] = useState({});
  const [styleSeparator, setStyleSeparator] = useState({});
  const [styleRelative, setStyleRelative] = useState({});

  const handleTijera = () => {
    setRandomNumber(parseInt(Math.random() * 5));
    dispatch({
      select: "SCISSORS",
      randomNumber: randomNumber,
    });
    setChoiceRender("yellow");
    validateColor();
  };
  const handlePapel = () => {
    setChoiceRender("blue");
    setRandomNumber(parseInt(Math.random() * 5));
    dispatch({ select: "PAPER", randomNumber: randomNumber });
    validateColor();
  };
  const handlePiedra = () => {
    setChoiceRender("red");
    setRandomNumber(parseInt(Math.random() * 5));
    dispatch({ select: "ROCK", randomNumber: randomNumber });
    validateColor();
  };
  const handleLagarto = () => {
    setChoiceRender("purple");
    setRandomNumber(parseInt(Math.random() * 5));
    dispatch({ select: "LIZARD", randomNumber: randomNumber });
    validateColor();
  };
  const handleTiburon = () => {
    setChoiceRender("sky");
    setRandomNumber(parseInt(Math.random() * 5));
    dispatch({ select: "SPOCK", randomNumber: randomNumber });
    validateColor();
  };

  const handleReset = () => {
    dispatch({ select: "RESET" });
    if (countTime) {
      setCountTime(false);
      setStyleDinamic({});
      setStyleSeparator({});
      setStyleRelative({});
    }
  };
  function validateColor() {
    setTimeout(() => {
      setCountTime(true);
    }, 1000);
    setTimeout(() => {
      setStyleDinamic({
        boxShadow:
          "inset 0px 6px 5px transparent, 0px 0px 0px 15px #ffffff10, 0px 0px 50px #ffffff10, 0px 0px 0px 40px #ffffff05, 0px 0px 0px 70px #ffffff08",
      });
      setStyleSeparator({
        maxWidth: "1200px",
      });
    }, 1250);
    setTimeout(() => {
      if (window.innerWidth > 720) {
        setStyleRelative({
          overflow: "visible",
          top: "-70%",
        });
      } else {
        setStyleRelative({});
      }
    }, 1500);
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
  }

  useEffect(() => {
    if (localStorage.getItem("score")) {
      let tempVar = parseInt(localStorage.getItem("score"));
      dispatch({ select: "DATA", newScore: tempVar });
    } else {
      dispatch({ select: "RESET" });
    }
  }, []);

  return (
    <React.Fragment>
      <Navegator className="navegator" role="nav">
        <NavegatorUl>
          <NavegatorUlLi>
            <ImageLogo src={logo} alt="logo" />
          </NavegatorUlLi>
          <NavegatorUlLi>
            <NavegatorUlLiASpecial>
              <SpanScoreText>SCORE</SpanScoreText>
              <SpanScoreCounts>{state.count}</SpanScoreCounts>
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
          <DivResultContent style={styleSeparator}>
            <ContainerChoiceAll>
              {state.result === "WIN" ? (
                <>
                  <ContainerChoiceImge>
                    <DivCircleOptionOne
                      color={choiceRender}
                      style={styleDinamic}
                      endtt
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
                    <DivCircleOptionOne color={choiceRender} endtt>
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
              <ContainerChoiceImge>
                <DivAletoreStop></DivAletoreStop>
              </ContainerChoiceImge>
            ) : (
              <React.Fragment>
                <ContainerChoiceAll>
                  {state.result === "LOSE" ? (
                    <>
                      <ContainerChoiceImge>
                        <DivCircleOptionOne
                          color={choiceRenderEnemy}
                          style={styleDinamic}
                          endtt
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
                        <DivCircleOptionOne color={choiceRenderEnemy} endtt>
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

          <DivResultTextResults style={styleRelative}>
            {countTime && (
              <>
                <TitleTextWinnerOrLoser>
                  YOU {state.result}
                </TitleTextWinnerOrLoser>
                <ButtonForReset onClick={handleReset}>
                  PLAY AGAIN
                </ButtonForReset>
              </>
            )}
          </DivResultTextResults>
        </DivResult>
      )}
      <Footer>
        <ButtonFooter onClick={() => setModal(true)}>RULES</ButtonFooter>
      </Footer>
    </React.Fragment>
  );
}

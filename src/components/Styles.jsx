import styled from "styled-components";
import bgOptions from "../images/bg-pentagon.svg";
import scissorrs from "../images/icon-scissors.svg";
import paper from "../images/icon-paper.svg";
import rock from "../images/icon-rock.svg";
import lizard from "../images/icon-lizard.svg";
import spock from "../images/icon-spock.svg";

export const Navegator = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;
export const NavegatorUl = styled.ul`
  display: flex;
  max-width: 720px;
  width: 100%;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  border: 4px solid #fff5;
  border-radius: 0.5em;
  height: 6rem;
`;
export const NavegatorUlLi = styled.li`
  height: 100%;
  max-height: 117px;
  display: flex;
  align-items: center;
`;
export const ImageLogo = styled.img`
  height: 70%;
`;
export const NavegatorUlLiA = styled.a``;
export const NavegatorUlLiASpecial = styled.a`
  background: var(--white);
  height: 100%;
  border-radius: 0.5em;
  display: grid;
  place-items: center;
  padding: 0.5rem 1rem;
`;
export const SpanScoreText = styled.span`
  font-size: 0.7rem;
  letter-spacing: 0.25em;
  color: var(--Score-Text);
`;
export const SpanScoreCounts = styled.span`
  font-size: 2rem;
  font-weight: 700;
  color: var(--Dark-text);
`;

export const FiveDivImage = styled.div`
  background-image: url(${bgOptions});
  height: 17.5625rem;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  max-width: 270px;
  position: relative;
  scale: 0.7;
  background-size: contain;
`;
export const FiveDivImageContainer = styled.div`
  width: 100vw;
  height: 75%;
  display: flex;
  place-items: start;
  justify-content: center;
`;
export const DivCircleOptionOne = styled.div`
  width: 100%;
  max-width: 120px;
  position: absolute;
  bottom: ${(props) => (props.bottom ? "0" : "auto")};
  right: ${(props) => (props.right ? "0" : "auto")};
  top: ${(props) => (props.top ? "0" : "auto")};
  left: ${(props) => (props.left ? "0" : "auto")};
  margin: ${(props) => (props.mar ? "0 auto" : "0")};
  border-radius: 255px;
  height: 100%;
  max-height: 120px;
  box-shadow: inset 3px -5px 1px rgba(0, 0, 0, 0.37);
  background: ${(props) =>
    props.color === "yellow" &&
    "linear-gradient( 239deg, rgba(235, 168, 34, 1) 32%, rgba(236, 158, 13, 1) 100% )"};
  background: ${(props) =>
    props.color === "red" &&
    "linear-gradient( 239deg, hsl(349, 71%, 52%) 32%, hsl(349, 70%, 56%) 100% )"};
  background: ${(props) =>
    props.color === "blue" &&
    "linear-gradient( 239deg, hsl(230, 89%, 62%) 32%, hsl(230, 89%, 65%) 100% )"};
  background: ${(props) =>
    props.color === "sky" &&
    "linear-gradient( 239deg, hsl(189, 59%, 53%) 32%, hsl(189, 58%, 57%) 100% )"};
  background: ${(props) =>
    props.color === "purple" &&
    "linear-gradient( 239deg, hsl(261, 73%, 60%) 32%, hsl(261, 72%, 63%) 100% )"};

  bottom: ${(props) => props.just && props.just};
  top: ${(props) => props.justop && props.justop};
  right: ${(props) => props.justright && props.justright};
  left: ${(props) => props.justleft && props.justleft};
  display: grid;
  place-items: center;
  transition: 2s;
`;

export const DivCircleOptionTwo = styled.div`
  width: 100%;
  max-width: 90px;
  border-radius: 255px;
  height: 100%;
  max-height: 90px;
  background-color: var(--white);
  box-shadow: inset 3px 2px 2px 1px rgba(0, 0, 0, 0.37);
  display: grid;
  place-items: center;
`;
export const DivImageYellow = styled.div`
  background-image: url(${scissorrs});
  width: 60%;
  height: 60%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
export const DivImageBlue = styled.div`
  background-image: url(${paper});
  width: 60%;
  height: 60%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
export const DivImageRed = styled.div`
  background-image: url(${rock});
  width: 60%;
  height: 60%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
export const DivImageSky = styled.div`
  background-image: url(${spock});
  width: 60%;
  height: 60%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
export const DivImagePurple = styled.div`
  background-image: url(${lizard});
  width: 60%;
  height: 60%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
export const DivResult = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 80%;
  padding: 2rem;
`;
export const DivResultContent = styled.div`
  max-width: 720px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 50%);
  position: relative;
  height: 40%;
`;
export const DivAletoreStop = styled.div`
  width: 100%;
  max-width: 90px;
  position: absolute;
  bottom: auto;
  right: auto;
  top: auto;
  left: auto;
  margin: 0;
  border-radius: 255px;
  height: 100%;
  max-height: 90px;
  background-color: #0005;
  margin-top: 20px;
`;
export const ParrChoiceUser = styled.h2`
  color: var(--white);
  letter-spacing: 0.2em;
  font-size: 0.8rem;
  text-align: center;
`;
export const ContainerChoiceImge = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

export const ContainerChoiceAll = styled.div`
  display: grid;
  grid-template-rows: 120px auto;
  row-gap: 1.5rem;
`;

export const DivResultTextResults = styled.div`
  height: 40%;
`;
export const TitleTextWinnerOrLoser = styled.h4`
  font-size: 3rem;
  color: var(--white);
  text-align: center;
  margin-top: 2rem;
  letter-spacing: 2px;
`;
export const ButtonForReset = styled.button`
  width: 100%;
  padding: 0.7rem 1rem;
  font-size: 1rem;
  margin-top: 1rem;
  color: var(--Dark-text);
  letter-spacing: 0.2em;
  font-weight: 600;
  background-color: var(--white);
  border: none;
  width: 12.7rem;
  border-radius: 0.5em;
  transition: 0.3s;
  &:hover {
    color: var(--red);
  }
`;
// box-shadow: inset 0px 6px 5px transparent, 0px 0px 0px 15px #ffffff10, 0px 0px 50px #ffffff10, 0px 0px 0px 40px #ffffff05, 0px 0px 0px 70px #ffffff08;

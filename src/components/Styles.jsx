import styled from "styled-components";
import bgOptions from "../images/bg-pentagon.svg";

export const Navegator = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const NavegatorUl = styled.ul`
  display: flex;
  max-width: 720px;
  width: 100%;
  justify-content: space-between;
`;
export const NavegatorUlLi = styled.li``;
export const ImageLogo = styled.img``;
export const NavegatorUlLiA = styled.a``;
export const NavegatorUlLiASpecial = styled.a`
  display: grid;
`;
export const FiveDivImage = styled.div`
  background-image: url(${bgOptions});
  height: 19.5625rem;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  max-width: 329px;
  position: relative;
  scale: 0.7;
`;
export const FiveDivImageContainer = styled.div`
  width: 100vw;
  height: 82%;
  display: flex;
  place-items: start;
  justify-content: center;
`;
export const DivCircleOptionOne = styled.div`
  width: 100%;
  max-width: 80px;
  position: absolute;
  bottom: 0;
  right: 0;
  border-radius: 255px;
  height: 100%;
  max-height: 80px;
`;
export const DivCircleOptionTwo = styled.div`
  width: 100%;
  max-width: 60px;
  position: absolute;
  bottom: 0;
  right: 0;
  border-radius: 255px;
  height: 100%;
  max-height: 60px;
`;

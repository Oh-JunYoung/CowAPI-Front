import { useLocation, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import { colors } from "../styles/colors";
const NavigationBar = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("jwt") === null ? 0 : 1;
  const location = useLocation().pathname;
  const prefix = useLocation().pathname.split("/").length === 3 ? "../" : ""; // path에 따라 이미지 상대경로 설정
  return (
    <HeaderContainer>
      <Wrapper>
        <ButtonDiv fontSize={30} onClick={() => navigate("/")}>
          Cow API
        </ButtonDiv>
        <NaviContainer>
          <ButtonDiv navi onClick={() => navigate("/")} bold={location === "/"}>
            Home
          </ButtonDiv>
          <ButtonDiv
            navi
            bold={location === "/ai"}
            onClick={() => (user === 1 ? navigate("/ai") : navigate("/login"))}
          >
            AI
          </ButtonDiv>

          <ButtonDiv
            navi
            onClick={() => navigate("/notice-list/1")}
            bold={location === "/notice-list/"}
          >
            Support
          </ButtonDiv>

          <ButtonDiv
            navi
            onClick={() => {
              localStorage.clear();
              navigate("/");
            }}
          >
            Log Out
          </ButtonDiv>
        </NaviContainer>
      </Wrapper>
    </HeaderContainer>
  );
};

export default NavigationBar;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 70px;
  width: 100%;
  background-color: ${colors.whiteColor};
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  max-width: 1024px;
  @media only screen and (max-width: 1024px) {
    padding: 0 20px;
  }
`;

const NaviContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;

const ButtonDiv = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : 16)}px;
  font-weight: bold;
  cursor: pointer;
  ${({ bold }) =>
    bold &&
    css`
      color: ${colors.blueColor};
      font-weight: 800;
    `}
  ${({ navi }) =>
    navi &&
    css`
      margin: 0 10px;
      padding: 0 10px;
    `}
`;

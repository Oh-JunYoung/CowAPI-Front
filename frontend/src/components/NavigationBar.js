import { useLocation } from "react-router-dom";
import styled from "styled-components";

const NavigationBar = () => { 
  const user = localStorage.getItem("jwt") === null ? 0 : 1;
  const prefix = useLocation().pathname.split("/").length === 3 ? '../' : ''; // path에 따라 이미지 상대경로 설정
  return (
    <NavContainer>
      <LogoContainer>
        <img src={`${prefix}logo.png`} alt="logo" onClick={() => { window.location.href = "/"}} />
        <img src={`${prefix}domain.png`} alt="domain" onClick={() => { window.location.href = "/" }} />
      </LogoContainer>
      <LogoContainer>
        <Icons src={`${prefix}dashboard.png`} onClick={() => { window.location.href = "/" }} />
        {user === 1 ? <Icons src={`${prefix}ai.png`} onClick={() => { window.location.href = "/ai" }} /> : <></>}
        {user === 1 ? <Icons src={`${prefix}notice.png`} onClick={() => { window.location.href = "/notice-list/1" }} /> : <></>}
        {user === 1 ? <Icons src={`${prefix}qna.png`} onClick={() => { window.location.href = "/qna-list/1" }} /> : <></>}
        <Icons src={`${prefix}mypage.png`} onClick={() => { 
          const path = user === 1 ? "/mypage" : "/login";
          window.location.href = path;
        } } />
        <Icons src={`${prefix}exit.png`} onClick={() => { 
          localStorage.clear();
          window.location.href = "/";
        } } />
      </LogoContainer>
    </NavContainer>
  );
}

export default NavigationBar;

const NavContainer = styled.div`
  display : flex;
  flex-direction : row;
  justify-content: space-between;
  height: 100px;
  width : 100vw;
  background-color: rgba(242,205,177);
  padding: 0px;
  margin: 0px;
`;

const LogoContainer = styled.div`
  display : flex;
  padding : 20px;
`

const Icons = styled.img`
    width: 40px;
    height: 40px;
    margin : 10px;
`;

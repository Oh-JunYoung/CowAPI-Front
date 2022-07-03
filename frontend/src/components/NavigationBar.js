import { useLocation } from "react-router-dom";
import styled from "styled-components";

const NavigationBar = () => { 
  const user = 1;
  const prefix = useLocation().pathname.split("/").length === 3 ? '../' : ''; // path에 따라 이미지 상대경로 설정
  return (
    <NavContainer>
      <LogoContainer>
        <img src={`${prefix}logo.png`} alt="logo"/>
        <img src={`${prefix}domain.png`} alt="domain"/>
      </LogoContainer>
      <LogoContainer>
        <Icons src={`${prefix}dashboard.png`} />
        {user === 1 ? <Icons src={`${prefix}notice.png`} /> : <></>}
        {user === 1 ? <Icons src={`${prefix}qna.png`} /> : <></>}
        <Icons src={`${prefix}mypage.png`} />
        <Icons src={`${prefix}exit.png`}/>
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

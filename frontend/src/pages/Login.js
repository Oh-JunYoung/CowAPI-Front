import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../components/Component";

import NavigationBar from "../components/NavigationBar";

import { signIn, signUp } from "../utils/Api";

const Login = () => { 
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("jwt") !== null) {
      navigate("/");
    }
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <NavigationBar />
      <LoginContainer>
        <EpContainer>
          <InputBox>
            <TextBox>Email</TextBox>
            <Input onChange={(e) => { 
              setEmail(e.target.value);
            }}/>
            <Button func={() => { signIn(email, password)}} name="로그인"/>
          </InputBox>
          <InputBox>
            <TextBox>Password</TextBox>
            <Input onChange={(e) => {
              setPassword(e.target.value);
            }} />
            <Button func={() => { signUp(email, password) }} name="회원가입" />
            </InputBox>
        </EpContainer>
        <InputBox>
          <TextBox>소셜 계정 로그인</TextBox>
          <Button func={() => console.log("네이버")} name="NAVER" />
        </InputBox>
      </LoginContainer>
    </>
  );
}

export default Login;

const LoginContainer = styled.div`
  margin-top: 8vh;
  margin-left : 15vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height : 60vh;
  width : 70vw;
`;

const EpContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 30px;
`;

const TextBox = styled.div`
  min-width : 120px;
  font-size : 25px;
`

const Input = styled.input`
  width : 400px;
  font-size : 25px;
`
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../components/Component";

import NavigationBar from "../components/NavigationBar";

import { signIn, signUp } from "../utils/Api";

const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("jwt") !== null) {
      navigate(-1);
    }
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { naver } = window;

  const Naver = useCallback(() => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: "RJ5004rmMkQn9WqoFpw1",
      callbackUrl: window.location.href,
      isPopup: false,
      loginButton: { color: "green", type: 3, height: 40 },
      callbackHandle: true,
    });
    naverLogin.init();
  }, [naver.LoginWithNaverId]);

  const naverLogin = () => {
    console.log(naver);
    Naver();
    UserProfile();
  };

  const UserProfile = useCallback(() => {
    window.location.href.includes("access_token") && GetUser();
    function GetUser() {
      const location = window.location.href.split("=")[1];
      const token = location.split("&")[0];
      console.log("token: ", token);
      axios
        .post(
          `${process.env.REACT_APP_URL}/login/oauth/naver`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          console.log(res);
          localStorage.setItem("jwt", res.data.authorization);
          const isAdmin = res.data.isAdmin ? 1 : 0;
          localStorage.setItem("admin", isAdmin);
          localStorage.setItem("user", res.data.email);
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [navigate]);

  useEffect(naverLogin, [Naver, UserProfile, naver]);

  return (
    <>
      <NavigationBar />
      <LoginContainer>
        <EpContainer>
          <InputBox>
            <TextBox>Email</TextBox>
            <Input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Button
              func={() => {
                signIn(email, password);
              }}
              name="로그인"
            />
          </InputBox>
          <InputBox>
            <TextBox>Password</TextBox>
            <Input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Button
              func={() => {
                signUp(email, password);
              }}
              name="회원가입"
            />
          </InputBox>
        </EpContainer>
        <InputBox>
          <TextBox>소셜 계정 로그인</TextBox>
          <div func={() => console.log("네이버")} id="naverIdLogin">
            naver
          </div>
        </InputBox>
      </LoginContainer>
    </>
  );
};

export default Login;

const LoginContainer = styled.div`
  margin-top: 8vh;
  margin-left: 15vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 60vh;
  width: 70vw;
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
  min-width: 120px;
  font-size: 25px;
`;

const Input = styled.input`
  width: 400px;
  font-size: 25px;
`;

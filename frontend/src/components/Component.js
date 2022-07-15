import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

// 공용
export const Button = (props) => {
  let flag = 1;
  return <Btn onClick={() => {
    if (flag === 1) {
      props.func();
      flag = 0;
    }
  }}> {props.name} </Btn>;
};

export const Title = (props) => {
  return <Tit>{props.name}</Tit>;
};

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify};
  margin-top: 20px;
  min-height: 38px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-left: 40px;
  margin-right: 40px;
  margin-bottom: 20px;
  height: 70vh;
`;

// qna, notice 리스트
export const BoardContainer = (props) => {
  const navigate = useNavigate();
  return (
    <Bd>
      <One style={{ height: "10%" }}>
        <QnaNo>No.</QnaNo>
        <QnaTitle>제목</QnaTitle>
        <QnaDate>날짜</QnaDate>
        <QnaUser>사용자</QnaUser>
      </One>
      {props.list.map((li) => {
        return (
          <One
            key={li.id}
            onClick={() => {
              navigate(`/${props.path}/${li.id}`);
            }}
          >
            <QnaNo>{li.id}</QnaNo>
            <QnaTitle>{li.title}</QnaTitle>
            <QnaDate>{li.updatedAt.substr(0, 10)}</QnaDate>
            <QnaUser>{li.email}</QnaUser>
          </One>
        );
      })}
    </Bd>
  );
};

export const PageContainer = (props) => {
  const cur = props.cur;
  const start = parseInt(props.cur / 5) * 5 + 1 - (props.cur % 5 === 0 ? 5 : 0);
  const last = props.last > start + 4 ? start + 4 : props.last;

  const arr = ["<<"];
  for (let i = start; i <= last; i++) arr.push(i);
  arr.push(">>");
  return (
    <ButtonContainer justify="space-around">
      {arr.map((p) => {
        return (
          <PageNo
            key={p}
            style={
              cur == p ? { fontWeight: "bolder" } : { fontWeight: "normal" }
            }
            onClick={(e) => {
              const path = window.location.pathname.split("/")[1];
              if (e.target.innerText == "<<") {
                if (start - 1 > 0) window.location.href = `/${path}/${start - 1}`;
              } else if (e.target.innerText == ">>") {
                if (last + 1 <= props.last)
                  window.location.href = `/${path}/${last + 1}`;
              } else window.location.href = `/${path}/${e.target.innerText}`;
            }}
          >
            {p}
          </PageNo>
        );
      })}
    </ButtonContainer>
  );
};

// detail
export const DetailContainer = (props) => {
  return (
    <>
      <InputContainer>
        <TextBox>제목</TextBox>
        <InputBox
          value={props.title}
          readOnly={props.readOnly}
          onChange={(e) => {
            props.setTitle(e.target.value);
          }}
        />
      </InputContainer>
      <InputContainer>
        <TextBox>내용</TextBox>
        <ContentBox
          value={props.content}
          readOnly={props.readOnly}
          onChange={(e) => {
            props.setContent(e.target.value);
          }}
        />
      </InputContainer>
    </>
  );
};

// mypage
export const MyPageContainer = (props) => {
  return (
    <>
      <InputContainer>
        <TextBox>email</TextBox>
        <ReadOnlyBox>{props.email}</ReadOnlyBox>
      </InputContainer>
      <InputContainer>
        <TextBox>password</TextBox>
        <InputBox
          onChange={(e) => {
            props.setPassword(e.target.value);
          }}
        />
      </InputContainer>
      <div style={{ height: "100px" }} />
      <InputContainer>
        <TextBox>가입날짜</TextBox>
        <ReadOnlyBox>{props.createdAt.substr(0, 10)}</ReadOnlyBox>
      </InputContainer>
      <InputContainer>
        <TextBox>★ Secret key</TextBox>
        <ReadOnlyBox>{props.secretKey}</ReadOnlyBox>
      </InputContainer>
    </>
  );
};

const Btn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  width: 150px;
  border: black 1px solid;
  font-size: 25px;
`;

const Tit = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  font-size: 40px;
  /* width: 100px; */
  margin-top: 20px;
  margin-left: 20px;
`;

const Bd = styled.div`
  //border: black 1px solid;
  height: 70%;
`;

const One = styled.div`
  display: flex;
  flex-direction: row;
  height: 18%;
  margin-top: -1px;
`;

const QnaNo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: black 1px solid;
  width: 10%;
  text-align: center;
  font-size: x-large;
  margin-left: -1px;
`;

const QnaTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: black 1px solid;
  width: 50%;
  text-align: center;
  font-size: x-large;
  margin-left: -1px;
`;

const QnaDate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: black 1px solid;
  width: 20%;
  text-align: center;
  font-size: x-large;
  margin-left: -1px;
`;

const QnaUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: black 1px solid;
  width: 20%;
  text-align: center;
  font-size: x-large;
  margin-left: -1px;
  margin-right: -1px;
`;

const PageNo = styled.div`
  font-size: x-large;
  margin: 10px;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px;
`;

const TextBox = styled.div`
  min-width: 180px;
  font-size: 30px;
`;
const InputBox = styled.input`
  width: 70%;
`;

const ReadOnlyBox = styled.div`
  width: 70%;
  text-align: center;
  font-size: x-large;
`;

const ContentBox = styled.textarea`
  width: 70%;
  height: 300px;
`;

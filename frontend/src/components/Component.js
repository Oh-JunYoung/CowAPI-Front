import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";
import { colors } from "../styles/colors";

// 공용
export const Button = (props) => {
  let flag = 1;
  return (
    <Btn
      onClick={() => {
        if (flag === 1) {
          props.func();
          flag = 0;
        }
      }}
    >
      {" "}
      {props.name}{" "}
    </Btn>
  );
};

export const Title = (props) => {
  return <Tit>{props.name}</Tit>;
};

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  margin-right: 40px;
  height: 100%;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const RowBox = styled.div`
  display: flex;
  align-items: flex-end;
  margin: 113px 0 20px 0;
  width: 100%;
`;

export const TextDiv = styled.div`
  font-size: ${({ fontSize }) => fontSize}px;
  margin: ${({ margin }) => margin};
  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
    `}
  ${({ pointer }) =>
    pointer &&
    css`
      cursor: pointer;
    `}
`;

export const SideBar = styled.div`
  width: 263px;
  display: flex;
  flex-direction: column;
  margin-top: 113px;
`;

// qna, notice 리스트
export const BoardContainer = (props) => {
  const navigate = useNavigate();
  return (
    <Bd>
      {props.list.map((li) => {
        return (
          <One
            key={li.id}
            onClick={() => {
              navigate(`/${props.path}/${li.id}`);
            }}
          >
            <QnaTitle>{li.title}</QnaTitle>
            <QnaContent>{li.content}</QnaContent>
            <QnaDate>{li.updatedAt.substring(0, 13)}</QnaDate>
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
    <ButtonContainer justify="center">
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
                if (start - 1 > 0)
                  window.location.href = `/${path}/${start - 1}`;
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
    <ModifyContainer>
      <InputContainer>
        <InputBox
          value={props.title}
          readOnly={props.readOnly}
          onChange={(e) => {
            props.setTitle(e.target.value);
          }}
        />
      </InputContainer>
      {props.updatedAt && (
        <InputContainer>
          <TextDiv margin="43px 0">{props.updatedAt.substring(0, 13)}</TextDiv>
        </InputContainer>
      )}

      <InputContainer>
        <ContentBox
          value={props.content}
          readOnly={props.readOnly}
          onChange={(e) => {
            props.setContent(e.target.value);
          }}
        />
      </InputContainer>
    </ModifyContainer>
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
  height: 39px;
  width: 61px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  border-radius: 3px;
  background-color: ${colors.blackColor};
  color: ${colors.whiteColor};
  font-size: 16px;
  cursor: pointer;

  :hover {
    background-color: ${colors.hoverBlackColor};
  }
`;

const Tit = styled.div`
  display: flex;
  align-items: center;
  font-size: 40px;
  margin-top: 20px;
  margin-left: 20px;
`;

const Bd = styled.div`
  width: 689px;
  border-top: 2px solid ${colors.normalGrayBorderColor};
`;

const One = styled.div`
  height: 180px;
  width: calc(100% - 20px);
  display: flex;
  padding-left: 20px;
  flex-direction: column;
  border-bottom: 2px solid ${colors.lightGrayBolderColor};
  cursor: pointer;
  :hover {
    background-color: ${colors.lightGrayColor};
  }
`;

const QnaTitle = styled.div`
  width: 70%;
  height: 60px;
  display: flex;
  align-items: center;
  font-size: 22px;
  font-weight: bold;
`;

const QnaContent = styled.div`
  width: 70%;
  height: 60px;
  display: flex;
  align-items: center;
  font-size: 14px;
`;

const QnaDate = styled.div`
  width: 70%;
  height: 60px;
  display: flex;
  align-items: center;
  font-size: 12px;
`;

const PageNo = styled.div`
  font-size: x-large;
  margin: 10px;
  cursor: pointer;
`;

const ModifyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 690px;
`;

const InputContainer = styled.div`
  display: flex;
`;

const TextBox = styled.div`
  min-width: 180px;
  font-size: 30px;
`;
const InputBox = styled.input`
  width: 100%;
  height: 85px;
  padding-left: 20px;
  font-size: 30px;
  border-radius: 3px;
  border: 1px solid ${colors.lightGrayBolderColor};
`;

const ReadOnlyBox = styled.div`
  width: 70%;
  text-align: center;
  font-size: x-large;
`;

const ContentBox = styled.textarea`
  resize: none;
  width: 100%;
  height: 300px;
  padding: 20px;
  font-size: 14px;
  border-radius: 3px;
  border: 1px solid ${colors.lightGrayBolderColor};
`;

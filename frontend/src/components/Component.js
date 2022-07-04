import styled from "styled-components";

export const Button = (props) => {
  return <Btn onClick={props.func}> {props.name} </Btn>;
};

export const Title = (props) => {
  return <Tit>{props.name}</Tit>;
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-left: 40px;
  margin-right: 40px;
  margin-bottom: 20px;
  background-color: yellow;
  height: 70vh;
`;

export const Board = styled.div``;

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

const Bd = styled.div``;

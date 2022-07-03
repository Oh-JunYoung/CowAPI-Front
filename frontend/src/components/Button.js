import styled from "styled-components";

const Button = (props) => { 
  return (
    <Btn onClick={props.func}> {props.name} </Btn>
  )
}

export default Button;

const Btn = styled.div`
  display : flex;
  align-items: center;
  justify-content: center;
  height : 36px;
  width : 150px;
  border: black 1px solid;
  font-size : 25px;
`
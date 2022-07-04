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
  margin-bottom : 20px;
  height : 70vh;
`

export const BoardContainer = (props) => { 
  return (
    <Bd>
      <One style={{height:"10%"}}>
        <QnaNo>No.</QnaNo>
        <QnaTitle>제목</QnaTitle>
        <QnaDate>날짜</QnaDate>
        <QnaUser>사용자</QnaUser>
      </One>
      {
        props.list.map((li) => { 
          return (
            <One key={li.id}>
              <QnaNo>{li.id}</QnaNo>
              <QnaTitle>{li.title}</QnaTitle>
              <QnaDate>{li.updatedAt.substr(0,10)}</QnaDate>
              <QnaUser>{li.email}</QnaUser>
            </One>
          );
        })
      }
    </Bd>
  );
}

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify};
  margin-top : 20px;
  min-height : 38px;
`
export const PageContainer = (props) => { 
  const cur = props.cur;
  const start = parseInt(props.cur / 5) * 5 + 1 - (props.cur % 5 === 0 ? 5 : 0);
  const last = props.last > start + 4 ? start + 4 : props.last;
  
  const arr = ['<<'];
  for (let i = start; i <= last; i++)
    arr.push(i);
  arr.push('>>');
  return (
    <ButtonContainer justify="space-around">
      {
        arr.map((p) => {
          return (
            <PageNo key={p}
              style={cur == p ? { fontWeight: "bolder" } : { fontWeight: "normal" }}
              onClick={(e) => { 
                if (e.target.innerText == '<<') {
                  if(start - 1 > 0)
                    window.location.href = `./${start - 1}`;
                } else if (e.target.innerText == '>>') {
                  if(last + 1 <= props.last)
                    window.location.href = `./${last + 1}`;
                } else
                  window.location.href = `./${e.target.innerText}`;
              }}
            >{p}</PageNo>
          );
        })
      }
    </ButtonContainer>
  );
}

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
`

const Bd = styled.div`
  //border: black 1px solid;
  height: 70%;
`

const One = styled.div`
  display: flex;
  flex-direction : row;
  height : 18%;
  margin-top: -1px;
`

const QnaNo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: black 1px solid;
  width: 10%;
  text-align:center;
  font-size: x-large;
  margin-left: -1px;
`

const QnaTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: black 1px solid;
  width: 50%;
  text-align:center;
  font-size: x-large;
  margin-left: -1px;
`

const QnaDate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: black 1px solid;
  width: 20%;
  text-align:center;
  font-size: x-large;
  margin-left: -1px;
`

const QnaUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: black 1px solid;
  width: 20%;
  text-align:center;
  font-size: x-large;
  margin-left: -1px;
  margin-right:-1px;
`

const PageNo = styled.div`
  font-size: x-large;
  margin : 10px;
`

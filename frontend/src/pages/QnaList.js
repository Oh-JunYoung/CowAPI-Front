import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import { Button, Title, Container, BoardContainer, ButtonContainer, PageContainer } from "../components/Component";
import { getQnaList } from "../utils/Api";

const QnaList = () => { 
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("jwt") === null) {
      alert("로그인 후 이용 바랍니다.");
      navigate(-1);
    }
  });

  const [page, setPage] = useState(useParams().page);
  //const [list, setList] = useState([]);
  //const [last, setLast] = useState(0);
  useEffect(() => {
    const getList = async () => {
      const data = await getQnaList(page);
      if (/*data.lastPage*/ last < page) { 
        alert("게시물이 존재하지 않습니다.");
        navigate(-1);
      }
      //setLast(data.lastPage);
      //setList(data.qnas);
    }
    getList();
  }, []);

  return (
    <>
      <NavigationBar />
      <Title name="QnA"/>
      <Container>
        <BoardContainer list={dummy} />
        <ButtonContainer justify="flex-end">
          <Button name="작성" />
        </ButtonContainer>
        <PageContainer last={last} cur={page} />
      </Container>
    </>
  );
}

export default QnaList;

const dummy = [
  {
    id: "1",
    title: "wqer",
    updatedAt: "2022-07-04T05:45:32.000+00:00",
    email : "qwer"
  },
  {
    id: "2",
    title: "wqer",
    updatedAt: "2022-07-04T05:45:32.000+00:00",
    email : "qwer"
  },
  {
    id: "3",
    title: "wqer",
    updatedAt: "2022-07-04T05:45:32.000+00:00",
    email : "qwer"
  },
  {
    id: "4",
    title: "wqer",
    updatedAt: "2022-07-04T05:45:32.000+00:00",
    email : "qwer"
  },
  {
    id: "5",
    title: "wqer",
    updatedAt: "2022-07-04T05:45:32.000+00:00",
    email : "qwer"
  },
]

const last = 2;
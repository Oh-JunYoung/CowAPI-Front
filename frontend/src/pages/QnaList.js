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
  const [list, setList] = useState([]);
  const [last, setLast] = useState(0);
  useEffect(() => {
    const getList = async () => {
      const data = await getQnaList(page);
      if (data.lastPage/5 + 1 < page) { 
        alert("게시물이 존재하지 않습니다.");
        navigate(-1);
      }
      const one = data.lastPage % 5 === 0 ? 0 : 1;
      setLast(parseInt(data.lastPage/5)+one);
      setList(data.qnas);
    }
    getList();
  }, []);

  return (
    <>
      <NavigationBar />
      <Title name="QnA"/>
      <Container>
        <BoardContainer list={list} path="qna" />
        <ButtonContainer justify="flex-end">
          <Button name="작성" func={() => { window.location.href='/qna/-1'}}/>
        </ButtonContainer>
        <PageContainer last={last} cur={page} />
      </Container>
    </>
  );
}

export default QnaList;
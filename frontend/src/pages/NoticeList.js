import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import { Button, Title, Container, BoardContainer, ButtonContainer, PageContainer } from "../components/Component";
import { getNoticeList } from "../utils/Api";

const NoticeList = () => { 
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
      const data = await getNoticeList(page);
      if (data.lastPage < page) { 
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
      <Title name="공지"/>
      <Container>
        <BoardContainer list={dummy} />
        <ButtonContainer justify="flex-end">
          { localStorage.getItem("admin") == '1' ? <Button name="작성" /> : <></>}
        </ButtonContainer>
        <PageContainer last={last} cur={page} />
      </Container>
    </>
  );
}

export default NoticeList;

const dummy = [
  {
    id: "1",
    title: "wqer",
    updateAt: "asdf",
    email : "qwer"
  },
]

const last = 1;
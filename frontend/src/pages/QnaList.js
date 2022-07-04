import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import { Button, Title, Container } from "../components/Component";

const QnaList = (props) => { 
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("jwt") === null) {
      alert("로그인 후 이용 바랍니다.");
      navigate(-1);
    }
  });

  const [page, setPage] = useState(useParams().page);

  

  return (
    <>
      <NavigationBar />
      <Title name="QnA"/>
      <Container>질문리스트</Container>
    </>
  );
}

export default QnaList;
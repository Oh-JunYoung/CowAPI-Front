import { useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar";
import { Container, DetailContainer, Title, ButtonContainer, Button } from "../components/Component";
import { useParams } from "react-router-dom";
import { createNotice, getNoticeDetail, updateNotice, deleteNotice } from "../utils/Api";

const Notice = () => { 
  const [id, setId] = useState(useParams().id); // id가 -1이면 작성 아니면 수정,삭제
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [email, setEmail] = useState("");
  const userEmail = localStorage.getItem("user");
  useEffect(() => {
    const getDetail = async () => {
      const data = await getNoticeDetail(id);
      setTitle(data.title);
      setContent(data.content);
      setEmail(data.email);
    };

    if(id != -1)
      getDetail();
  }, []);

  return (
    <>
      <NavigationBar />
      <Title name="공지" />
      <Container>
        <DetailContainer title={title} content={content} setTitle={setTitle} setContent={setContent} />
        <ButtonContainer justify="flex-end">
          {
            id != -1 ?
              email == userEmail ? 
                <>
                  <Button name="수정" func={() => { updateNotice(id, title, content)}}/>
                  <div style={{ width: "10px" }} />
                  <Button name="삭제" func={() => { deleteNotice(id)}}/>
                  <div style={{ width: "100px" }} />
                </> : <></>
                :
              <>
                <Button name="작성" func={() => { createNotice(title, content)}}/>
                <div style={{ width: "100px" } }/>
              </>}
        </ButtonContainer>
      </Container>
    </>
  );
}

export default Notice;
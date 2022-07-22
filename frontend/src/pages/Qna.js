import { useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar";
import {
  Container,
  DetailContainer,
  Title,
  ButtonContainer,
  Button,
  Wrapper,
  SideBar,
  TextDiv,
  RowBox,
} from "../components/Component";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { createQna, getQnaDetail, updateQna, deleteQna } from "../utils/Api";
import PageTitle from "../components/share/PageTitle";
import { colors } from "../styles/colors";
const Qna = () => {
  const navigate = useNavigate();
  const [id, setId] = useState(useParams().id); // id가 -1이면 작성 아니면 수정,삭제
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [email, setEmail] = useState("");
  const [updatedAt, setUpdatedAt] = useState("");
  const userEmail = localStorage.getItem("user");
  useEffect(() => {
    const getDetail = async () => {
      const data = await getQnaDetail(id);
      setTitle(data.title);
      setContent(data.content);
      setEmail(data.email);
      setUpdatedAt(data.updatedAt);
    };

    if (id != -1) getDetail();
  }, []);

  return (
    <>
      <NavigationBar />

      <PageTitle
        title="Support"
        subTitle="공지사항 및 궁금한 점을 묻고 답할 수 있습니다."
        bgColor={colors.navyColor}
      />
      <Wrapper>
        <SideBar>
          <TextDiv
            fontSize={20}
            pointer
            onClick={() => navigate("/notice-list/1")}
          >
            공지사항
          </TextDiv>

          <TextDiv
            fontSize={20}
            pointer
            bold
            margin="15px 0 0 0"
            onClick={() => navigate("/qna-list/1")}
          >
            Q&A
          </TextDiv>
        </SideBar>
        <Container>
          <RowBox>
            <TextDiv fontSize={30} bold margin="0 auto 0 0">
              Q&A
            </TextDiv>
            {id != -1 ? (
              email == userEmail ? (
                <ButtonContainer>
                  <Button
                    name="수정"
                    func={() => {
                      updateQna(id, title, content);
                    }}
                  />
                  <div style={{ width: "10px" }} />
                  <Button
                    name="삭제"
                    func={() => {
                      deleteQna(id);
                    }}
                  />
                </ButtonContainer>
              ) : (
                <></>
              )
            ) : (
              <>
                <Button
                  name="작성"
                  func={() => {
                    createQna(title, content);
                  }}
                />
              </>
            )}
          </RowBox>
          <DetailContainer
            title={title}
            content={content}
            setTitle={setTitle}
            setContent={setContent}
            updatedAt={updatedAt}
            readOnly={id == -1 || email == userEmail ? false : true}
          />
        </Container>
      </Wrapper>
    </>
  );
};

export default Qna;

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import {
  Button,
  Container,
  BoardContainer,
  ButtonContainer,
  PageContainer,
  SideBar,
  RowBox,
  Wrapper,
  TextDiv,
} from "../components/Component";
import { getQnaList } from "../utils/Api";
import { colors } from "../styles/colors";
import PageTitle from "../components/share/PageTitle";
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
      if (data.lastPage / 5 + 1 < page) {
        alert("게시물이 존재하지 않습니다.");
        navigate(-1);
      }
      const one = data.lastPage % 5 === 0 ? 0 : 1;
      setLast(parseInt(data.lastPage / 5) + one);
      setList(data.qnas);
    };
    getList();
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

          <TextDiv fontSize={20} pointer bold margin="15px 0 0 0">
            Q&A
          </TextDiv>
        </SideBar>
        <Container>
          <RowBox>
            <TextDiv fontSize={30} bold>
              Q&A
            </TextDiv>
            <Button
              name="글쓰기"
              func={() => {
                window.location.href = "/qna/-1";
              }}
            />
          </RowBox>
          <BoardContainer list={list} path="qna" />
          <PageContainer last={last} cur={page} />
        </Container>
      </Wrapper>
    </>
  );
};

export default QnaList;

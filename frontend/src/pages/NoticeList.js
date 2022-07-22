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
import { colors } from "../styles/colors";
import { getNoticeList } from "../utils/Api";
import PageTitle from "../components/share/PageTitle";
const NoticeList = () => {
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
      const data = await getNoticeList(page);
      if (data.lastPage / 5 + 1 < page) {
        alert("게시물이 존재하지 않습니다.");
        navigate(-1);
      }
      setLast(parseInt(data.lastPage / 5) + 1);
      setList(data.notices);
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
          <TextDiv fontSize={20} pointer bold>
            공지사항
          </TextDiv>
          <TextDiv
            fontSize={20}
            margin="15px 0 0 0"
            pointer
            onClick={() => navigate("/qna-list/1")}
          >
            Q&A
          </TextDiv>
        </SideBar>
        <Container>
          <RowBox>
            <TextDiv fontSize={30} bold>
              공지사항
            </TextDiv>
            {localStorage.getItem("admin") == "1" ? (
              <Button
                name="글쓰기"
                func={() => {
                  window.location.href = "/notice/-1";
                }}
              />
            ) : (
              <></>
            )}
          </RowBox>
          <BoardContainer list={list} path="notice" />
          <PageContainer last={last} cur={page} />
        </Container>
      </Wrapper>
    </>
  );
};

export default NoticeList;

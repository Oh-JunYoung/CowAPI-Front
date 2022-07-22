// libraries
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// Component
import NavigationBar from "../components/NavigationBar";
import styled, { css } from "styled-components";
import { AiTable } from "../components/AiTable";
import { Title } from "../components/Component";
import { DashboardTable } from "../components/DashboardTable";
import PageTitle from "../components/share/PageTitle";
import StyledTable from "../components/share/StyledTable";
import { colors } from "../styles/colors";

const DashBoard = () => {
  const [totalUser, setToalUser] = useState(1);
  const [todayUser, setTodayUser] = useState(1);
  const [updatedAt, setUpdatedAt] = useState(1);
  const [aiList, setAiList] = useState({
    aiList: [
      {
        name: "test",
        responseTime: 1,
        accuracy: 1,
        updatedAt: 1,
      },
    ],
  });

  const navigate = useNavigate();

  const url = process.env.REACT_APP_URL;

  useEffect(() => {
    const f = () => {
      const source = new EventSource(`${url}/dashboard`);

      source.addEventListener("dashboard", async (event) => {
        const parsedData = JSON.parse(event.data);
        setUpdatedAt(parsedData.updatedAt);
        setToalUser(parsedData.todayUser);
        setTodayUser(parsedData.todayUser);
        setAiList(parsedData.aiList);
      });
    };

    f();
  }, [url]);

  const handleClick = (name) => {
    console.log(name);
  };

  return (
    <>
      <NavigationBar />
      <PageTitle
        title="AI API STATUS"
        subTitle="AI API 상태에 대해 체크할 수 있습니다."
      />
      <MainUpdate>
        <TextDiv blueText>오늘 방문자 수 : {todayUser}</TextDiv>
        <Line />
        <TextDiv blueText>총 방문자 수 : {totalUser}</TextDiv>
        <Line />
        <TextDiv blueText>업데이트 시각 : {updatedAt}</TextDiv>
      </MainUpdate>

      <Container>
        <TextWrapper>
          <TextDiv bold>About</TextDiv>
          <TextDiv>
            네이버 오픈 API 상태 체크는 내부 서버 프로세스가 10분 단위로 모든
            오픈 API에 대해 실제 개발 프로세스와 동일한 과정으로 호출해서 응답
            시간과 호출 성공 여부를 로깅하고, 이를 웹페이지를 통해 각 API의 정상
            작동 여부와 응답 속도를 확인할 수 있도록 합니다. 이와 별개로
            내부적으로 물리적 서버와 서버 인스턴스에 대해 이중으로 모니터링하고
            있습니다.
          </TextDiv>
        </TextWrapper>
        <TextWrapper>
          <TextDiv bold>AI API 상태</TextDiv>
        </TextWrapper>
        <TableContainer>
          <DashboardTable aiList={aiList.aiList}></DashboardTable>
        </TableContainer>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainUpdate = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.lightBlueColor};
`;

const Line = styled.div`
  border-right: 0.5px solid ${colors.blueColor};
  height: 60%;
`;

const TextWrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  margin: 60px 0 0 0;
  /* border: 1px solid red; */
`;

const TextDiv = styled.div`
  line-height: 30px;
  font-weight: 400;
  @media only screen and (max-width: 1024px) {
    padding: 0 20px;
  }
  ${({ bold }) =>
    bold &&
    css`
      margin-bottom: 16px;
      font-weight: bold;
      font-size: 24px;
    `}
  ${({ blueText }) =>
    blueText &&
    css`
      width: 300px;
      display: flex;
      justify-content: center;
      font-weight: 500;
      color: ${colors.blueColor};
    `}
`;

const TableContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default DashBoard;

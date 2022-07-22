import { useEffect, useState } from "react";
import { Title } from "../components/Component";
import NavigationBar from "../components/NavigationBar";
import styled from "styled-components";
import { AiTable } from "../components/AiTable";
import { useNavigate } from "react-router-dom";
import { getAiList } from "../utils/Api";
import PageTitle from "../components/share/PageTitle";
// import arrow from "../assets/arrow.png";
const AiList = () => {
  const [values, setValues] = useState({
    vision: [],
    nlp: [],
  });
  const navigate = useNavigate();

  useEffect(() => {
    const getAis = async () => {
      const data = await getAiList();
      setValues({
        vision: data.aiList.filter((el) => el.field === "vision"),
        nlp: data.aiList.filter((el) => el.field === "nlp"),
      });
    };

    getAis();
  }, []);

  const handleClick = (name) => {
    navigate(`./${name}`, { state: { name } });
  };

  return (
    <>
      <NavigationBar />
      <PageTitle title="AI" />
      <Container>
        <TableContainer>
          <TableTitle>Computer Vision</TableTitle>
          <AiTable HOVER lists={values.vision} handleClick={handleClick} />
        </TableContainer>
        <TableContainer>
          <TableTitle>NLP</TableTitle>
          <AiTable HOVER lists={values.nlp} handleClick={handleClick} />
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

const TableContainer = styled.div`
  margin-top: 60px;
  width: 1024px;
  display: flex;
  flex-direction: column;
`;

const TableTitle = styled.div`
  width: 1024px;
  font-size: 24px;
  font-weight: 700;
  display: flex;
  align-items: center;
`;

export default AiList;

import { useEffect, useState } from "react";
import { Title } from "../components/Component";
import NavigationBar from "../components/NavigationBar";
import styled from "styled-components";
import { AiTable } from "../components/AiTable";
import { useNavigate } from "react-router-dom";
import { getAiList } from "../utils/Api";

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
    }

    getAis();
  }, []);

  const handleClick = (name) => {
    navigate(`./${name}`, { state: { name } });
  };

  return (
    <>
      <NavigationBar />
      <Title name="AI" />
      <Container>
        <TableContainer>
          <TableTitle>Computer Vision</TableTitle>
          <AiTable lists={values.vision} handleClick={handleClick} />
        </TableContainer>
        <TableContainer>
          <TableTitle>NLP</TableTitle>
          <AiTable lists={values.nlp} handleClick={handleClick} />
        </TableContainer>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
`;

const TableContainer = styled.div`
  margin-top: 100px;
  width: 100%;
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TableTitle = styled.div`
  width: 90%;
  font-size: 40px;
`;

export default AiList;
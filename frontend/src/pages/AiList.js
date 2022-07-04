import { useEffect, useState } from "react";
import { Title } from "../components/Component";
import NavigationBar from "../components/NavigationBar";
import styled from "styled-components";
import { AiTable } from "../components/AiTable";
import { useNavigate } from "react-router-dom";

const AiList = () => {
  const [values, setValues] = useState({
    vision: [],
    nlp: [],
  });
  const navigate = useNavigate();

  useEffect(() => {
    setValues({
      vision: dummyAiList.filter((el) => el.field === "vision"),
      nlp: dummyAiList.filter((el) => el.field === "nlp"),
    });
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

export const dummyAiList = [
  {
    field: "vision",
    name: "asdqfd",
    responseTime: 1,
    accuracy: 1,
  },
  {
    field: "vision",
    name: "asdd",
    responseTime: 1,
    accuracy: 1,
  },
  {
    field: "vision",
    name: "a213sd",
    responseTime: 1,
    accuracy: 1,
  },
  {
    field: "vision",
    name: "as15rr2d",
    responseTime: 1,
    accuracy: 1,
  },
  {
    field: "vision",
    name: "a1wesd",
    responseTime: 1,
    accuracy: 1,
  },
  {
    field: "nlp",
    name: "asdfe1e",
    responseTime: 1,
    accuracy: 1,
  },
  {
    field: "nlp",
    name: "asdwe1",
    responseTime: 1,
    accuracy: 1,
  },
  {
    field: "nlp",
    name: "asafs1d",
    responseTime: 1,
    accuracy: 1,
  },
  {
    field: "nlp",
    name: "as123f1d",
    responseTime: 1,
    accuracy: 1,
  },
  {
    field: "nlp",
    name: "as134d",
    responseTime: 1,
    accuracy: 1,
  },
  {
    field: "nlp",
    name: "a1231sd",
    responseTime: 1,
    accuracy: 1,
  },
];

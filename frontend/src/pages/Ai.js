import { useLocation } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import styled from "styled-components";
// import { Title } from "../components/Component";
import { AiTable, OneTable, OneColumnTable } from "../components/AiTable";
import { useEffect, useState } from "react";
import { getAiOne } from "../utils/Api";
import PageTitle from "../components/share/PageTitle";
const Ai = () => {
  const { name } = useLocation().state;
  const [values, setValues] = useState({
    name: "",
    responseTime: 0,
    accuracy: 0,
    requestURI: "requestURI",
    method: "GET",
    req: "req",
    res: "res",
  });

  useEffect(() => {
    const getAi = async () => {
      const data = await getAiOne(name);
      setValues(data);
    };

    getAi();
  }, []);

  return (
    <>
      <NavigationBar />
      <PageTitle title={`AI : ${name}`} />

      <Container>
        <TextDiv bold>
          {values.field === "nlp" ? "NLP" : "Computer Vision"}
        </TextDiv>
        <AiTable
          lists={[
            {
              name: values.name,
              responseTime: values.responseTime,
              accuracy: values.accuracy,
            },
          ]}
        />
        <OneTable requestURI={values.requestURI} method={values.method} />
        <OneColumnTable req={values.req} res={values.res} />
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  height: 70vh;
`;

const TextDiv = styled.div`
  margin: 60px 0 16px 0;
  font-weight: bold;
  font-size: 24px;
  width: 1024px;
`;

export default Ai;

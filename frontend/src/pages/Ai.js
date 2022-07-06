import { useLocation } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import styled from "styled-components";
import { Title } from "../components/Component";
import { AiTable, OneTable } from "../components/AiTable";
import { useEffect, useState } from "react";
import { getAiOne } from "../utils/Api";

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
    }
    
    getAi();
  }, []);

  return (
    <>
      <NavigationBar />
      <Title name={`AI : ${name}`} />
      <Container>
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
        <BContainer>
          <Label>요청</Label>
          <Label>응답</Label>
          <Bbox>{values.req}</Bbox>
          <Bbox>{values.res}</Bbox>
        </BContainer>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 80vh;
`;

const BContainer = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Label = styled.div`
  width: 45%;
`;

const Bbox = styled.div`
  width: 45%;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;

export default Ai;

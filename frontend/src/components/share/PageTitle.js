import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";

const Container = styled.div`
  width: 100%;
  height: 182px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ bgColor }) => bgColor};
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1024px;
  align-items: center;
  color: ${colors.whiteColor};
`;

const Title = styled.div`
  font-size: 38px;
  font-weight: bold;
  @media only screen and (max-width: 1024px) {
    margin-left: 20px;
  }
`;
const SubTitle = styled.div`
  font-size: 18px;
`;
const Line = styled.div`
  margin: 0 13px;
  height: 20px;
  border-right: 1px solid ${colors.whiteColor};
`;

function PageTitle({ title, subTitle, bgColor = `${colors.blueColor}` }) {
  return (
    <Container bgColor={bgColor}>
      <Wrapper>
        <Title>{title}</Title>
        {subTitle && <Line />}

        <SubTitle>{subTitle}</SubTitle>
      </Wrapper>
    </Container>
  );
}

export default PageTitle;

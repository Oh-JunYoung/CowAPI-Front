import { DashboardTr } from "./DashboardTr.js";
import styled from "styled-components";
import { colors } from "../styles/colors.js";
export const DashboardTable = ({ aiList }) => {
  return (
    <Block>
      <TableStyles>
        <thead>
          <tr>
            <td>AI</td>
            <td>응답시간</td>
            <td>정확도</td>
            <td>업데이트 시각</td>
          </tr>
        </thead>

        <tbody>
          {aiList.map((ai, index) => (
            <DashboardTr ai={ai} key={index} />
          ))}
        </tbody>
      </TableStyles>
    </Block>
  );
};

const Block = styled.div`
  width: 1024px;
`;

const TableStyles = styled.table`
  width: 100%;
  max-width: 1024px;
  border-collapse: collapse;
  thead {
    background-color: ${colors.lightGrayColor};
    border-top: 1px solid ${colors.grayBolderColor};
    border-bottom: 0.5px solid ${colors.grayBolderColor};
  }
  thead > tr > td {
    font-weight: 600;
  }
  tbody > tr {
    height: 68px;
  }
  th,
  td {
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid ${colors.lightGrayBolderColor};
  }

  th {
    color: ${colors.fontDarkGrayColor};
    font-size: 14px;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    flex: 1;
  }
  tr {
    height: 40px;
    display: flex;
  }
  td {
    flex: 1;
    font-size: 14px;
    color: #464646;
    align-items: center;
    display: flex;
    justify-content: center;
    font-weight: 400;
  }
`;

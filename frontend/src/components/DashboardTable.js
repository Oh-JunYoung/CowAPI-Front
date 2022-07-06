import { DashboardTr } from "./DashboardTr.js";
import styled from "styled-components";

export const DashboardTable = ({ aiList }) => {
  return (
    <Block>
    <TableStyles>
        <thead>
          <tr>
              <td>Ai</td>
              <td>ResponseTime</td>
              <td>Accuracy</td>
              <td>updated time</td>
          </tr>
        </thead>

        <tbody>
            {aiList.map((ai, index) => (
                <DashboardTr ai={ai} key = {index}/>
            ))}
        </tbody>

      </TableStyles>
    </Block>
  );
};


const Block = styled.div`
  overflow-y: scroll;
  max-height: 162px;
  height: 100%;
  width: 90%;
  margin-top: 18px;
`;

const TableStyles = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #f8f8f8;

  thead {
    position: sticky;
    top: 0;
    background-color: #f8f8f8;
  }

  th,
  td {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
  }

  th {
    color: #464646;
    font-size: 14px;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    flex: 1;
  }

  tr {
    height: 40px;
    display: flex;
  }
  td {
    flex: 1;
    background-color: #fff;
    font-size: 14px;
    color: #464646;
    align-items: center;
    display: flex;
    justify-content: center;
    font-weight: 400;
    /* border-bottom: 1px solid #ececec; */
  }
`;
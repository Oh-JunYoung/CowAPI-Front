import styled, { css } from "styled-components";
import { colors } from "../styles/colors";

export const AiTable = ({
  HOVER,
  margin = "25px 0 0 0",
  lists,
  handleClick,
}) => {
  return (
    <Block margin={margin}>
      <TableStyles>
        <thead>
          <tr>
            <th>AI</th>
            <th>응답시간</th>
            <th>정확도</th>
          </tr>
        </thead>
        <tbody>
          {lists.map((el, index) => (
            <tr
              className={HOVER && "navi"}
              key={index}
              onClick={() => handleClick(el.name)}
            >
              <td>{el.name}</td>
              <td>{el.responseTime} ms</td>
              <td>{el.accuracy}</td>
            </tr>
          ))}
        </tbody>
      </TableStyles>
    </Block>
  );
};

const Block = styled.div`
  width: 1024px;
  margin: ${({ margin }) => margin};
`;

const TableStyles = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: ${({ margin }) => margin};
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
    &.navi {
      cursor: pointer;
      :hover {
        background-color: ${colors.lightGrayColor};
      }
    }
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

export const OneTable = (props) => {
  return (
    <Block margin="-1px 0 50px 0">
      <TableStyles>
        <thead>
          <tr>
            <th>요청 URI</th>
            <th>HTTP METHOD</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.requestURI}</td>
            <td>{props.method}</td>
          </tr>
        </tbody>
      </TableStyles>
    </Block>
  );
};

export const OneColumnTable = (props) => {
  return (
    <Block>
      <TableStyles>
        <thead>
          <tr>
            <th>요청</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.req}</td>
          </tr>
        </tbody>
      </TableStyles>
      <TableStyles margin="-0.5px 0 0 0">
        <thead>
          <tr>
            <th>응답</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.res}</td>
          </tr>
        </tbody>
      </TableStyles>
    </Block>
  );
};

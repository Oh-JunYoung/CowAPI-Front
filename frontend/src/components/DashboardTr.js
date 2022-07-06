export const DashboardTr = ({ ai, key }) => {
  return (
          <tr key={key}>
            <td>{ai.name}</td>
            <td>{ai.responseTime}</td>
            <td>{ai.accuracy}</td>
            <td>{ai.updatedAt}</td>
          </tr>
  );
};
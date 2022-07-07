export const DashboardTr = ({ ai }) => {
  return (
    <tr>
      <td>{ai.name}</td>
      <td>{ai.responseTime}</td>
      <td>{ai.accuracy}</td>
      <td>{ai.updatedAt}</td>
    </tr>
  );
};

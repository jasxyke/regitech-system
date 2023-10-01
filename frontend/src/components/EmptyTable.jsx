const EmptyTable = ({ data }) => {
  return (
    <tr>
      <td colSpan={5}>
        <h4>No {data} found</h4>
      </td>
    </tr>
  );
};

export default EmptyTable;

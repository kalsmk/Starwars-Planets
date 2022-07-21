import styled from "styled-components";

const styledTable = styled.div`
  table {
    margin: 0 auto;
  }

  table,
  th,
  td {
    border: 1px solid grey;
    border-collapse: collapse;
  }

  tr {
    height: 55px;
    padding: 23px;
    border: 1px solid grey;
  }

  td a {
    text-decoration: none;
  }

  td a:hover {
    text-decoration: underline;
  }

  th {
    width: 200px;
  }

  .row:nth-child(even) {
    background-color: rgba(204, 214, 214);
  }
`;

export default styledTable;

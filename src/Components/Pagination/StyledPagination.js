import styled from "styled-components";

const styledPagination = styled.div`
  ul.pagination {
    display: flex;
    justify-content: space-evenly;
    font-size: 14px;
    margin: 25px 15px;
    padding: 0;
  }

  .next {
    color: ${({ nextDisabled }) => (nextDisabled ? "grey" : "blue")};
    cursor: ${({ nextDisabled }) => (nextDisabled ? "default" : "pointer")};
  }

  .previous {
    color: ${({ previousDisabled }) => (previousDisabled ? "grey" : "blue")};
    cursor: ${({ previousDisabled }) =>
      previousDisabled ? "default" : "pointer"};
  }

  .pagination li {
    cursor: pointer;
    color: blue;
  }

  .pagination li:hover {
    color: red;
  }

  .pagination li.active {
    border-radius: 20px;
    width: 20px;
    height: 20px;
    background-color: red;
    color: white;
  }

  .pagination li {
    display: inline-block;
  }

  .prev-next-disabled a:hover {
    cursor: default;
    color: grey;
  }

  .prev-next-disabled a {
    cursor: default;
    color: grey;
  }
`;

export default styledPagination;

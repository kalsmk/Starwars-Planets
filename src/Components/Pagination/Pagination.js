import ReactPaginate from "react-paginate";
import PropTypes from "prop-types";
import StyledPagination from "./StyledPagination";

function Pagination(props) {
  const { pageChange, currentPage, totalPages } = props;

  return (
    <StyledPagination
      previousDisabled={currentPage === 1}
      nextDisabled={currentPage === totalPages}
    >
      <ReactPaginate
        activeClassName="active"
        containerClassName="pagination"
        nextLabel="Next"
        onPageChange={pageChange}
        pageCount={totalPages}
        previousLabel="Previous"
        renderOnZeroPageCount={null}
        forcePage={currentPage - 1}
        disabledClassName="prev-next-disabled"
        previousClassName="previous"
        nextClassName="next"
      />
    </StyledPagination>
  );
}

Pagination.propTypes = {
  pageChange: PropTypes.func,
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
};

export default Pagination;

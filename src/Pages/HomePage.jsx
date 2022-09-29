import React, { useState, useEffect } from "react";
import Table from "../Components/Table/Table";
import API from "../Api/index";
import Pagination from "../Components/Pagination/Pagination";

function HomePage() {
  const [planetsData, setPlanetsData] = useState([]);
  const [pageNum, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isDataFetchError, setDataFetchError] = useState(false);
  const [fetchErrorMessage, setFetchErrorMessage] = useState("");

  const changePageNumber = (id) => {
    setPageNumber(id + 1);
    setIsLoading(true);
  };

  useEffect(() => {
    async function getPlanetsDataAPI(pageNum) {
      try {
        const fetchApiData = await API.Get(pageNum);
        setPlanetsData(fetchApiData);
        setIsLoading(false);
      } catch (error) {
        setDataFetchError(true);
        setFetchErrorMessage("Something went wrong! Please try again later.");
        setIsLoading(false);
      }
    }
    getPlanetsDataAPI(pageNum);
    window.scrollTo(0, 0);
  }, [pageNum]);

  const ShowPagination = () => {
    if (!isDataFetchError && !isLoading) {
      const pageCount = Math.ceil(planetsData.count / 10);
      return (
        <Pagination
          pageChange={(data) => changePageNumber(data.selected)}
          currentPage={pageNum}
          totalPages={pageCount}
        />
      );
    }
    return null;
  };

  return (
    <div>
      <h1>Star Wars Planets</h1>
      {isLoading && <p>Loading Data...</p>}
      {!isDataFetchError && !isLoading && (
        <Table
          planetsData={planetsData.results}
          pageNum={pageNum}
          pagination={ShowPagination()}
          changePageNumber={changePageNumber}
        />
      )}
      {isDataFetchError && <p>{fetchErrorMessage}</p>}
    </div>
  );
}

export default HomePage;

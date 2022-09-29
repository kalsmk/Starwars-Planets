import React from "react";
import PropTypes from "prop-types";
import { surfaceArea, dataFormat } from "../../utils/helpers";
import StyledTable from "./StyledTable";

function Table(props) {
  const { planetsData, pagination } = props;

  return (
    <StyledTable>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Climate</th>
            <th>Terrain</th>
            <th>Population</th>
            <th>Surface water</th>
          </tr>
        </thead>
        <tbody>
          {planetsData.map((data, index) => {
            return (
              <tr key={`${index}-${data.name}`} className="row">
                <td>
                  <a href={data.url} target="_blank" rel="noopener noreferrer">
                    {data.name}
                  </a>
                </td>
                <td>{data.climate === "unknown" ? "-" : data.climate}</td>
                <td>{data.terrain === "unknown" ? "-" : data.terrain}</td>
                <td>{dataFormat(data.population)}</td>
                <td>{surfaceArea(data.surface_water)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {pagination}
    </StyledTable>
  );
}

Table.propTypes = {
  planetsData: PropTypes.array,
  pagination: PropTypes.node,
};

export default Table;

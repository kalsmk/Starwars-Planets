import React from "react";
import PropTypes from "prop-types";
import utils from "../../utils/helpers";
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
            <th>Residents</th>
            <th>Terrain</th>
            <th>Population</th>
            <th>
              Surface Area Covered By Water &#40;km<sup>2</sup>&#41;
            </th>
          </tr>
        </thead>
        <tbody>
          {planetsData.map((data, index) => {
            return (
              <tr key={`${index}-${data.name}`} className="row">
                <td>
                  <a href={data.url} target="_blank" rel="noopener noreferrer">
                    {utils.DataFormat(data.name)}
                  </a>
                </td>
                <td>{utils.DataFormat(data.climate)}</td>
                <td>{utils.DataFormat(data.residents.length)}</td>
                <td>{utils.DataFormat(data.terrain)}</td>
                <td>{utils.DataFormat(data.population, "number")}</td>
                <td>{utils.SurfaceArea(data.surface_water, data.diameter)}</td>
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

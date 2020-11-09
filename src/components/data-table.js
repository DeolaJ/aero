/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const TableWrapper = styled.table`
  width: 100%;  
  border: 1px solid #1A3AAB;
  border-collapse: separate;
  border-radius: 3px;
  border-spacing: 0px;
  thead {
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
    border-collapse: separate;
  }
  tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
  }
  th, td {
    padding: 1rem .3rem; 
    text-align: left;
    vertical-align: top;
    border-left: none;   
  }
  th, td {
    padding: 1rem .3rem;
    text-align: left;
  }
  td {
    border-top: 1px solid #1A3AAB;   
  }
  tbody tr td {
    border-top: 0.5px solid #C4C4C4;
  }
  thead .last-row .first-item, tbody .last-row .last-item {
    border-radius: 0 0 0 3px;
  }
`;

const TableHeadRowWrapper = styled.tr`

`;
const TableHeadRow = styled.th`
  color: #3F3E3E;
`;

const TableBodyRowWrapper = styled.tr`

`;

const TableBodyRow = styled.td`

`;

const DataTable = ({
  tableContent,
}) => (
  <TableWrapper>
    <thead>
      {
        (tableContent.length > 0) && tableContent.map((row, index) => {
          if (index > 0) { return null; }
          return (
            <React.Fragment key={row}>
              <TableHeadRowWrapper className={(row === 0) ? 'first-row' : ((row === tableContent.length - 1) ? 'last-row' : null)}>
                {
                  Object.keys(row).length > 0 && Object.keys(row).map((column) => (
                    <React.Fragment key={column}>
                      <TableHeadRow
                        className={
                          (column === 0)
                            ? 'first-item'
                            : ((column === Object.keys(row).length - 1) ? 'last-item' : null)
                        }
                      >
                        {row[column]}
                      </TableHeadRow>
                    </React.Fragment>
                  ))
                }
              </TableHeadRowWrapper>
            </React.Fragment>
          );
        })
      }
    </thead>
    <tbody>
      {
        tableContent.length > 0 && tableContent.map((row, index) => {
          if (index === 0) { return null; }
          return (
            <React.Fragment key={row}>
              <TableBodyRowWrapper className={(row === 0) ? 'first-row' : ((row === tableContent.length - 1) ? 'last-row' : null)}>
                {
                  Object.keys(row).length > 0 && Object.keys(row).map((column) => (
                    <React.Fragment key={column}>
                      <TableBodyRow className={(column === 0) ? 'first-item' : ((column === Object.keys(row).length - 1) ? 'last-item' : null)}>
                        {row[column]}
                      </TableBodyRow>
                    </React.Fragment>
                  ))
                }
              </TableBodyRowWrapper>
            </React.Fragment>
          );
        })
      }
    </tbody>
  </TableWrapper>
);

DataTable.propTypes = {
  tableContent: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DataTable;

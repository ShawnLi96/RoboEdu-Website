import React, { useMemo } from 'react'
import styled from 'styled-components'
import { useTable, useSortBy } from 'react-table'
import { COLUMNS } from '../data/columns'
import MOCK_DATA from '../MOCK_DATA.json'
import '../css/table.css'
import '../data/fetch'



export default function InfoTable(){

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])

    const tableInstance = useTable({
        columns,
        data
    })
    
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance

  var formatter = new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
  });

  // for (let i = 0; i < data.length; i++){
  //     let total = 0;
  //     if (data[i].aftercare) total += 50;
  //     if (data[i].beforecare) total += 50;
  //     if (data[i].lunch) total += 50;

  //     data[i].subtotal = formatter.format(total);
  // }

  return (
    <Container>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  {" "}
                  {column.render("Header")}{" "}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {
            // for each order by parent ID
            // for each student by  order ID
            // fetch camperlist info by student ID
            rows.map((order) => {
              prepareRow(order);
              return (
                <tr {...order.getRowProps()}>
                  {order.map((student) => {
                    return (
                      <tr {...student.getRowProps()}>
                        {student.cells.map((cell) => {
                          return (
                            <td {...cell.getCellProps()}>
                              {" "}
                              {typeof cell.value === "boolean" ? (
                                <Icon state={cell.value} />
                              ) : (
                                cell.render("Cell")
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5vh;
`;

const Icon = styled.div`
  width: 15px;
  height: 15px;
  background-repeat: no-repeat;
  background-image: url(${(props) => (props.state ? check : cross)});
  background-size: cover;
  margin-left: auto;
  margin-right: auto;
  padding: 5px;
`

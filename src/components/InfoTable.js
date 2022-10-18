import React, { useMemo } from 'react'
import styled from 'styled-components'
import { useTable, useSortBy } from 'react-table'
import { COLUMNS } from '../data/columns'
import MOCK_DATA from '../MOCK_DATA.json'
import '../css/table.css'

import check from '../images/check.png'
import cross from '../images/cross.png'


export default function InfoTable(){

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])
    
    const tableInstance = useTable({
        columns,
        data
    }, useSortBy)
    
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance
    return (
        <Container>
            <table {...getTableProps()}>
                <thead>
                    {
                        headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map((column) => (
                                    <th {...column.getHeaderProps(column.getSortByToggleProps())}> {column.render('Header')} </th>
                                ))
                            }
                            
                        </tr>
        

                        ))
                    }

                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        rows.map((row) => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {
                                        row.cells.map((cell) => {
                                            return <td {...cell.getCellProps()}> {
                                                (typeof cell.value === "boolean") ? <Icon state={cell.value}/> : cell.render('Cell')}
                                            </td>
                                        })

                                    }
                                </tr>
                            )
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
`

const Icon = styled.div`
    width: 25px;
    height: 25px;
    background-repeat: no-repeat;
    background-image: url(${(props) => props.state ? check : cross});
    background-size: cover;
    margin-left: auto;
    margin-right: auto;
    padding: 5px;    
    

`

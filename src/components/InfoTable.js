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

    var formdata = new FormData();
    
    formdata.append("authkey", "f1a4e3f7e24acd3d2af968f44b856adacbb5d9951118b360de4323339f7abe521ade6f721e44ede2a3bb5986ffb114bf");
    formdata.append("studentid", 3);


  

    fetch(`http://localhost:160/students/getstudent`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({studentid: 3, authkey: "f1a4e3f7e24acd3d2af968f44b856adacbb5d9951118b360de4323339f7abe521ade6f721e44ede2a3bb5986ffb114bf"})
    }).then(res => {
        console.log(res)
        return res.json();
    }).then((res) => console.log(res))

    
      
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

    var formatter = new Intl.NumberFormat('en-CA', {
        style: 'currency',
        currency: 'CAD'
    });

    for (let i = 0; i < data.length; i++){
        let total = 0;
        if (data[i].aftercare) total += 50;
        if (data[i].beforecare) total += 50;
        if (data[i].lunch) total += 50;

        data[i].subtotal = formatter.format(total);
    }

    return (
        <Container>
            <table {...getTableProps()}>
                <thead>
                    {
                        headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map((column) => (
                                    <th {...column.getHeaderProps()}> {column.render('Header')} </th>
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
    width: 15px;
    height: 15px;
    background-repeat: no-repeat;
    background-image: url(${(props) => props.state ? check : cross});
    background-size: cover;
    margin-left: auto;
    margin-right: auto;
    padding: 5px;    
    

`

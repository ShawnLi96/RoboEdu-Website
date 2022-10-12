import React, { useMemo} from 'react';
import styled from 'styled-components';
import { useTable } from 'react-table';
import { devices } from './devices';



export default function InfoTable(){

    const data = useMemo(() =>
        [
            {
            campTime: 'July 1-7',
            student: 'Baron Yu',
            program: 'A1-D',
            lunch: true,
            beforecare: true,
            aftercare: false,
            },
            {
            campTime: 'July 1-7',
            student: 'Tian Qian',
            program: 'A1-D',
            lunch: false,
            beforecare: true,
            aftercare: false,
            },
        ],
        []
        );
    
    const columns = useMemo(() =>
        [
            'Camptime',
            'Program', 
            'Lunch',
            'Beforecare',
            'Aftercare',
            'Subtotal'
        ]
    );
    
    
    
    return (
        <>
            

        </>
    );
    

}


const Container = styled.table`
    position: relative;
    margin: auto;
    display: flex;
    margin-top: 5vh;
    justify-content: center;
    @media ${devices.mobile}{
        width: 80vw;
    }

    @media ${devices.laptop}{
        width: 50vw;
    }
`

const Row = styled.tr`

`
const Header = styled.th`
    font-weight: bold;
    margin-top: 2vw;

    @media ${devices.mobile}{
        font-size: 15px;
        margin-left: auto;
        margin-right: auto;
    }

    @media ${devices.laptop}{
        font-size: 20px;

    }
    
    @media ${devices.laptopL}{
        font-size: 40px;
    }

`

const Cell = styled.td`
    font-size: 10px;
`

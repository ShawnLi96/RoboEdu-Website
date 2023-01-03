import React, { useState } from 'react';
import styled from 'styled-components';
import Nav from "../Nav";
import bg from '../../images/background.png'
import { devices } from '../../data/devices';

// components
import StudentInfoHeader from './StudentInfoHeader'
import StudentInfoTable from './StudentInfoTable'

export default function StudentInfoPage(){
    return(
        <Container>
            <Nav/>
            <StudentInfoHeader/>
            <StudentInfoTable/>
        </Container>
    );
}

const Container = styled.div`
    background-image: url(${bg});
    width: 100vw;
    position: relative;
    
`
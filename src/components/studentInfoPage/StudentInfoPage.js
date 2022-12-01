import React, { useState } from 'react';
import styled from 'styled-components';
import { devices } from '../../data/devices';

// components
import StudentInfoHeader from './StudentInfoHeader'
import StudentInfoTable from './StudentInfoTable'

export default function StudentInfoPage(){
    const Container = styled.div`
      position: relative;
    `

    return(
        <Container>
            <StudentInfoHeader/>
            <StudentInfoTable/>
        </Container>
    );
}
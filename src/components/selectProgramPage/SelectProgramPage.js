import React, { useState } from 'react';
import styled from 'styled-components';
import Nav from "../Nav";
import bg from '../../images/background.png'
import { devices } from '../../data/devices';

// components
import SelectProgramHeader from './SelectProgramHeader'
import SelectProgramChart from './SelectProgramChart' 

export default function SelectProgramPage(){
    return(
        <Container>
            <Nav/>
            <SelectProgramHeader/>
            <SelectProgramChart/>
        </Container>
    );
}

const Container = styled.div`
    background-image: url(${bg});
    width: 100vw;
    position: relative;
    
`
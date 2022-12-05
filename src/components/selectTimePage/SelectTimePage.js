import React, { useState } from 'react';
import styled from 'styled-components';
import Nav from "../Nav";
import bg from '../../images/background.png'
import { devices } from '../../data/devices';

// components
import SelectTimeHeader from './SelectTimeHeader'
import SelectTimeTable from './SelectTimeTable'
import SelectTimeButton1 from './SelectTimeButton1'
import SelectTimeButton2 from './SelectTimeButton2'
import SelectTimeButton3 from './SelectTimeButton3'

export default function SelectTimePage(){
    return(
        <Container>
            <Nav/>
            <SelectTimeHeader/>
            <SelectTimeButton1/>
            <SelectTimeTable/>
            <SelectTimeButton2/>
            <SelectTimeButton3/>
        </Container>
    );
}

const Container = styled.div`
    background-image: url(${bg});
    width: 100vw;
    position: relative;
    
`
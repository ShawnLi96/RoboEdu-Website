import React, { useState } from 'react';
import styled from 'styled-components';
import Nav from "../Nav";
import bg from '../../images/background.png'
import { devices } from '../../data/devices';

// components
import SelectTimeHeader from './SelectTimeHeader'
import SelectTimeTable from './SelectTimeTable'
import SelectTimeButton from './SelectTimeButton'

export default function SelectTimePage(){
    return(
        <Container>
            <Nav/>
            <SelectTimeHeader/>
            <SelectTimeTable/>
            <SelectTimeButton/>
        </Container>
    );
}

const Container = styled.div`
    background-image: url(${bg});
    width: 100vw;
    position: relative;
    
`
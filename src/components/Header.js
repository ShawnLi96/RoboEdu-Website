import React from 'react';
import styled from 'styled-components';

export default function Header(){
    
    const Container = styled.div`
        margin-left: auto;
        margin-right: auto;
        text-align: center;
    `
    return (
        <Container>
            <div> {/* this div should have a bottom border */}
                <h1> *** 2023 Summer Camp *** </h1>
                <h2>线下夏令营</h2>
            </div>
            <p>2023 On-site Summer Camp</p>
        </Container>
    );    
}

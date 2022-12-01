import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";

export default function StudentInfoHeader() {
    const Container = styled.div`
      position: relative;
    `
    
    return(
        <Container>
            <h1>Students Information</h1>
        </Container>
    );
}
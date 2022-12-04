import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";

export default function SelectTimeHeader() {
    const Container = styled.div`
      position: relative;
    `
    
    const headerStyle = {
        color: "white",
        padding: "30px"
    };

    return(
        <Container>
            <h1 style={headerStyle}>Select A Time</h1>
        </Container>
    );
}
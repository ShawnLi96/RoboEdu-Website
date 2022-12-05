import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { devices } from "../../data/devices";

export default function SelectTimeButton3(){
    const Container = styled.div`
      position: relative;
    `

    const buttonStyle = {
        color: "black",
        width: "200px",
        height: "40px",
        float: "right",
        margin: "30px"
    };
    
    return(
        <Container>
            <button style={buttonStyle}>Back</button>
        </Container>
    );
}
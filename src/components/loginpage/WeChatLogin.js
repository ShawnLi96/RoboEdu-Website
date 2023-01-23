import React from 'react'
import styled from 'styled-components'
import  { devices } from '../../data/devices'
import "../../css/index.css";



export default function WeChatLogin() {

    return (
        <Container>
            <Text>Please Scan the QR Code</Text>
            <QR/>
        </Container>
    );


}

const Container = styled.div`
    background-color: #475F6F;
    display: flex;
    justify-content: center;
    align-items: center;
    @media ${devices.mobile}{
        padding: 20px;
    }
    @media ${devices.tablet}{

    }
`

const Text = styled.div`
    color: white;
    font-family: "roboFont";
    @media ${devices.mobile}{
        font-size: 20px;
        width: 100px;
    }

    @media ${devices.tablet}{
        font-size: 30px;
        width: 250px;
    }

`

const QR = styled.div`
    background-color: white;
    @media ${devices.mobile}{
        width: 100px;
        height: 100px;

    }

    @media ${devices.tablet}{
        width: 250px;
        height: 250px;
        margin-left: 100px;

    }
`
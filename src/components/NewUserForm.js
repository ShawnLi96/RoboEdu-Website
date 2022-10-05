import React, {useState} from 'react';
import styled from 'styled-components';




export default function NewUserForm(){

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');

    return (
        <Container>

            <FlexContainer>
                <div>
                    <Label>First Name <span style={{color: "red"}}> &nbsp;* </span> </Label>
                    <ShortInput
                        value={firstName}
                        onChange={(e) => { setFirstName(e.target.value); }} 
                        />
                </div>
                <div>
                    <Label> Last Name <span style={{color: "red"}}> &nbsp;* </span> </Label>
                    <ShortInput
                        value={lastName}
                        onChange={(e) => { setLastName(e.target.value); }} 
                        />
                </div>
            </FlexContainer>    
            <Label> 邮件 Email <span style={{color: "red"}}> &nbsp;* </span> </Label> 
            <LongInput
                value={email}
                onChange={(e) => { setEmail(e.target.value); }} 
                />
            <Label> 联系电话 Phone <span style={{color: "red"}}> &nbsp;* </span> </Label> 
            <LongInput
                value={phoneNumber}
                onChange={(e) => { setEmail(e.target.value); }} 
                />
        </Container>
    );}

const FlexContainer = styled.div`
    justify-content: space-between;
    display: flex;
    align-items: center;
`

const Label = styled.div`
    font-weight: bold;
    margin-top: 2vw;
    font-size: 20px;
`
const Subtitle = styled.div`
    color: grey;
    font-size: 15px;
`

const Icon = styled.div`
    width: 1.5vw;
    height: 1.5vw;
    margin-left: 0.5vw;
    position: absolute;
    align-items: center;
    background-repeat: no-repeat;
    background-size: 1.5vw;
    background-image: ${(props) => `url(${props.img})`};

`
const LongInput = styled.input`
    font-size: 1.5vw;
    font-weight: bold;
    width: 50vw;
    height: 40px;
    type: "text";
    required
    autofocus
    align-items: center;

`

const ShortInput = styled(LongInput)`
    width: 20vw;
`

const Container = styled.div`
    width: 50vw;
    margin-left: auto;
    margin-right: auto;
`
import React, {useState} from 'react';
import styled from 'styled-components';
import wechatLogo from '../images/wechatLogo.png'
export default function Form(){

    const [ID, setID] = useState('');
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [grade, setGrade] = useState('');
    const [parent, setParent] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');


    return (
        <Container>
            <Label>家长微信 WeChat ID</Label>
            <Icon />
            <LongInput
                value={ID}
                onChange={(e) => { setID(e.target.value); }} 
                />

            <div style={{display: "flex"}}>
                <Label>学生姓名 Student First and Last Name </Label> <div style={{color: "red"}}> &nbsp;* </div>
            </div>
            <Subtitle>多子女家庭，每个孩子需要单独报名</Subtitle>
            <LongInput
                value={name}
                onChange={(e) => { setName(e.target.value); }} 
                />

            
        </Container>
    );
}

const Label = styled.div`
    font-weight: bold;
`
const Subtitle = styled.div`
    color: grey;
`
const TextBox = styled.div`
    display: flex;
`
const Icon = styled.div`
    background-repeat: no-repeat;
    background-size: 1.5vw;
    background-image: url(${wechatLogo})

`
const LongInput = styled.input`
    font-size: 1vw;
    width: 40vw;
    height: 1.5vw;
    type: "text"
    required
    autofocus
    margin-top: 
`

const Container = styled.div`
    width: 40vw;
    margin-left: auto;
    margin-right: auto;
    background-color: lightblue;
`
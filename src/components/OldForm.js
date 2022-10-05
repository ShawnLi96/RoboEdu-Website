import React, {useState} from 'react';
import styled from 'styled-components';
import Drop from './Drop';
import wechatLogo from '../images/wechatLogo.png';




export default function OldForm(){

    const [ID, setID] = useState('');
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [grade, setGrade] = useState('');
    const [parent, setParent] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');

    console.log(gender);
    console.log(grade);

    return (
        <Container>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

            <Label>学生姓名 Student First and Last Name <span style={{color: "red"}}> &nbsp;* </span> </Label> 
            <LongInput
                value={name}
                onChange={(e) => { setName(e.target.value); }} 
                />
            <Drop gender = {gender} grade = {grade} updateGender = {setGender} updateGrade = {setGrade}/>
            <FlexContainer>
                <div>
                    <Label>家长姓名 Parent name <span style={{color: "red"}}> &nbsp;* </span> </Label>
                    <ShortInput
                        value={parent}
                        onChange={(e) => { setParent(e.target.value); }} 
                        />
                </div>
                <div>
                    <Label> 联系电话 Phone <span style={{color: "red"}}> &nbsp;* </span> </Label>
                    <ShortInput
                        value={phoneNumber}
                        onChange={(e) => { setPhoneNumber(e.target.value); }} 
                        />
                </div>
            </FlexContainer>    

            
            
            <Label> 邮件 Email <span style={{color: "red"}}> &nbsp;* </span> </Label> 
            <LongInput
                value={email}
                onChange={(e) => { setEmail(e.target.value); }} 
                />
           
                
            
        </Container>
    );
}

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
    width: 40vw;
    height: 40px;
    type: "text";
    required
    autofocus
    align-items: center;

`

const ShortInput = styled(LongInput)`
    width: 15vw;
`

const Container = styled.div`
    width: 40vw;
    height: 40vw;
    margin-left: auto;
    margin-right: auto;
`
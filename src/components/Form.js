import React, {useState} from 'react';
import styled from 'styled-components';
import Drop from './Drop';
import wechatLogo from '../images/wechatLogo.png';




export default function Form(){

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
            <Label>家长微信 WeChat ID</Label>
            <Icon />
            <LongInput
                value={ID}
                onChange={(e) => { setID(e.target.value); }} 
                />
            
            <Label>学生姓名 Student First and Last Name <span style={{color: "red"}}> &nbsp;* </span> </Label> 
            <Subtitle>多子女家庭，每个孩子需要单独报名</Subtitle>
            <LongInput
                value={name}
                onChange={(e) => { setName(e.target.value); }} 
                />
            <Drop gender = {gender} grade = {grade} updateGender = {setGender} updateGrade = {setGrade}/>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                    <Label>家长姓名 Parent name <span style={{color: "red"}}> &nbsp;* </span> </Label>
                    <ShortInput
                        value={parent}
                        onChange={(e) => { setParent(e.target.value); }} 
                        />
                </div>
                <div>
                    <Label>电话 Phone <span style={{color: "red"}}> &nbsp;* </span> </Label>
                    <ShortInput
                        value={phoneNumber}
                        onChange={(e) => { setPhoneNumber(e.target.value); }} 
                        />
                </div>
            </div>    

            
            
            <Label> 邮件 Email <span style={{color: "red"}}> &nbsp;* </span> </Label> 
            <LongInput
                value={email}
                onChange={(e) => { setEmail(e.target.value); }} 
                />
           
                
            
        </Container>
    );
}


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
    background-repeat: no-repeat;
    background-size: 1.5vw;
    background-image: url(${wechatLogo})

`
const LongInput = styled.input`
    font-size: 1vw;
    width: 40vw;
    height: 40px;
    type: "text"
    required
    autofocus
    margin-top: 
`

const ShortInput = styled(LongInput)`
    width: 15vw;
`

const Container = styled.div`
    width: 40vw;
    margin-left: auto;
    margin-right: auto;
`
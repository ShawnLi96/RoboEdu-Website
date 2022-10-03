import React, {useState} from 'react';
import styled from 'styled-components';
import wechatLogo from '../images/wechatLogo.png'
import {Dropdown, DropdownButton} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Form(){

    const [ID, setID] = useState('');
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [grade, setGrade] = useState('');
    const [parent, setParent] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    console.log(gender);
    console.log(grade);
    function createGrades() {
        let arr = [];
        for (let i = 1; i < 13; i++){
            arr[i - 1] = <Dropdown.Item value = {i} onClick = {(e) => setGrade({i})}> {i} </Dropdown.Item>;
        }

        console.log(arr);
        return arr;
    }
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
            <DropdownContainer>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {(gender === '') ? "Select Gender": gender}
                        
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick = {(e) => {setGender("Male")}} value = "Male">Male</Dropdown.Item>
                        <Dropdown.Item onClick = {(e) => {setGender("Female")}} value = "Female">Female</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {(grade === '') ? "Select Grade": grade}
                        
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Menu>
                            {createGrades()}
                        </Menu>
                    </Dropdown.Menu>
                </Dropdown>

            </DropdownContainer>
           
                
            
        </Container>
    );
}

const DropdownContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 40vw;
    margin-top: 3vw;
    background-color: black;

`

const Menu = styled.div`
    overflow-y: scroll;
    height: 15vw;
`

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
`
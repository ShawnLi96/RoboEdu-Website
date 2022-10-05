import react from 'react'
import {Dropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';



export default function Drop(props) {
    function createGrades() {
        let arr = [];
        for (let i = 1; i < 13; i++){
            arr[i - 1] = <DropdownItem value = {i} onClick = {(e) => props.updateGrade(i)}> {i} </DropdownItem>;
        }

        console.log(arr);
        return arr;
    }

    return (
        <Container>
            <DropdownContainer>
                <div>
                    <Label>性别 Gender <span style={{color: "red"}}> &nbsp;* </span></Label>
                    <Dropdown>
                        <DropdownButton variant="secondary">
                        {(props.gender === '') ? "请选择": ((props.gender === "Male") ? "男 ": "女 ") +  props.gender}
                            
                        </DropdownButton>
                        <Dropdown.Menu>
                            <DropdownItem onClick = {() =>{props.updateGender("Male");}} value = "Male">男 Male</DropdownItem>
                            <DropdownItem onClick = {() =>{props.updateGender("Female");}} value = "Female">女 Female</DropdownItem>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div>
                    <Label>目前年级 Current Grade <span style={{color: "red"}}> &nbsp;* </span></Label>
                    <Dropdown>
                        <DropdownButton variant="secondary">
                        {(props.grade === '') ? "请选择": props.grade}
                            
                        </DropdownButton>
                        <Dropdown.Menu>
                            <Menu>
                                {createGrades()}
                            </Menu>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>


            </DropdownContainer>
                
        </Container>
    );
}

const DropdownButton = styled(Dropdown.Toggle)`
    background-color: white;
    color: black;
    width: 15vw;
    height: 40px;
    border-color: black;
    font-size: 17px;
    &:hover, :active{
        background-color: #C0C0C0;
        transition: 0.25s;
        border-color: black;
        color: black;
    }
`
const DropdownItem = styled(Dropdown.Item)`

    &:hover, :active{
        background-color: #C0C0C0;
        border-color: black;
        color: black;
    }
`

const Container = styled.div`
    width: 50%;
    margin-top: 2vw;
`
const DropdownContainer = styled.div`
    display: flex;
    width: 40vw;
    justify-content: space-between;
`


const Menu = styled.div`
    overflow-y: scroll;
    height: 15vw;
`
const Label = styled.div`
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 0.5vw;

`

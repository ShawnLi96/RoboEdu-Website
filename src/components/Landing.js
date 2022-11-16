import Header from './Header'
import styled from 'styled-components'


export default function Landing() {
  
  return (
    <Container>
      <Header/>
      <FlexContainer>
        <Button href='/#/LoginPage'> Login Page </Button>
        <Button href='/#/Home'> Test Table </Button>

      </FlexContainer>
    </Container>

  );
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const FlexContainer = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-around;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5vw;
`


const Button = styled.a`
  text-align: center;
  border-style solid;
  color: black;
  height: 6vh;
  width: 20vw;
  border-radius: 25%;
  font-size: 2vw;
  &:hover{
    background-color: #C0C0C0;
    transition: 0.25s;


`

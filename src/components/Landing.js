import Header from './Header'
import styled from 'styled-components'


export default function Landing() {
  
  return (
    <Container>
      <Header/>
      <FlexContainer>
        <Button href='/#/ExistingUserForm'> Sign in </Button>
        <Button href='/#/NewUserForm'> New User </Button>
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
  width: 50vw;
  justify-content: space-between;
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

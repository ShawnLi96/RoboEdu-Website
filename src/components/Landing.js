import Header from './Header'
import Form from './Form'
import styled from 'styled-components'

export default function Landing() {

  const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
  `
  return (
    <Container>
      <Header/>
      <Form/>
    </Container>

  );
}


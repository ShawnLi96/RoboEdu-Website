import './styles.css';
import styled from 'styled-components'
import Landing from './components/Landing'
import NewUserForm from './components/loginpage/NewUserForm'
import LoginPage from './components/loginpage/LoginPage'
import Home from './components/registration/Home'
import StudentInfoPage from './components/studentInfoPage/StudentInfoPage'
import SelectTimePage from './components/selectTimePage/SelectTimePage'
import { HashRouter as Router,Routes, Route} from 'react-router-dom';
import React from 'react'
export default function App() {
    const Container = styled.div`
      position: relative;
    `
    return (
      <Router>
        <Container>
          <Routes>
            <Route exact path='/' element={<Landing/>}></Route>
            <Route exact path='/NewUserForm' element={<NewUserForm/>}></Route>
            <Route exact path='/LoginPage' element={<LoginPage/>}></Route>
            <Route exact path= '/Home' element={<Home/>}></Route> 
            <Route exact path= '/StudentInfoPage' element={<StudentInfoPage/>}></Route> 
            <Route exact path= '/SelectTimePage' element={<SelectTimePage/>}></Route> 
  
          </Routes>
        </Container>
      </Router>
    );
}
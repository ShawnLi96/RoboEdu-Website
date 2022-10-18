import './styles.css';
import styled from 'styled-components'
import Landing from './components/Landing'
import NewUserForm from './components/NewUserForm'
import ExistingUserForm from './components/ExistingUserForm'
import InfoTable from './components/InfoTable'
import Home from './components/Home'

import { HashRouter as Router,Routes, Route} from 'react-router-dom';

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
            <Route exact path='/ExistingUserForm' element={<ExistingUserForm/>}></Route>
            <Route exact path= '/Home' element={<Home/>}></Route>
  
          </Routes>
        </Container>
      </Router>
    );
}
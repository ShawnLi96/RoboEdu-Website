import './App.css';
import Landing from './components/Landing'
import NewUserForm from './components/NewUserForm'
import { HashRouter as Router,Routes, Route, Link } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Landing/>}></Route>
          <Route exact path='/NewUserForm' element={<NewUserForm/>}></Route>

        </Routes>
      </div>
    </Router>
  );
}


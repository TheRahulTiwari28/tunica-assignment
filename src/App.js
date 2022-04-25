import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SignIn from './components/Logins/SignIn'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import AddStudent from './pages/AddStudent';
import SignUp from './components/Logins/SignUp';
// import { Switch } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/addstudent" exact>
          <AddStudent/>
        </Route>
        <Route path="/signin" exact>
          <SignIn/>
        </Route>
        <Route path="/signup" exact>
          <SignUp/>
        </Route>
      </Switch>
      <Redirect to='/'/>
    </Router>
    </>
  );
}

export default App;

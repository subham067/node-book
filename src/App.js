
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NoteState from './compononts/notes/NoteState'
import Home from './compnents/home'
import About from './compnents/About'
import Navbar from './compnents/Navbar'
import Login from './compnents/login'
import Singup from './compnents/Singup'


function App() {

  return (
    <>
      <NoteState>
        <Router>


          <Switch>
            <Route path="/about">
              <Navbar />
              <About />
            </Route>
            <Route path="/login">
              <Navbar />
             <Login />
            </Route>
            <Route path="/Singup">
              <Navbar />
             <Singup />
            </Route>
            <Route path="/">
              <Navbar />
              <Home />
             
            </Route>
          </Switch>

        </Router>
      </NoteState>
    </>
  );
}

export default App;

import HomeContainer from './containers/HomeContainer';
import SignupContainer from './containers/SignupContainer';
import LoginContainer from './containers/LoginContainer';
import LogoutContainer from './containers/LogoutContainer';
import {BrowserRouter as Router,Routes,Route } from "react-router-dom"; 
import './App.css';
import './Bootstrap.css'  


function App() {  

  return (

    <Router>
    <Routes>
      
      <Route path="/" element={<HomeContainer />} /> 
      <Route path="/login" element={<LoginContainer />} />     
      <Route path="/logout" element={<LogoutContainer />} />   
      <Route path="/signup" element={<SignupContainer />} />

      </Routes>
      </Router>  
  );
}

export default App;

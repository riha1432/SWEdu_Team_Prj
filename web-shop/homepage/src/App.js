
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import IntroductionPage from './pages/introduction/IntroductionPage';




function App() {
  return (
      <Router>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/introduction' element={<IntroductionPage />} />
        </Routes>
      </Router>
  );
}

export default App;

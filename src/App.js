import logo from './logo.svg';
import './App.css';
import Setting from './components/setting/Setting';

import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './components/login/Login';
import Home from './components/Home';
import Profile from './components/user/Profile';

function App() {
  let navigate = useNavigate();
  function handleClick() {
    navigate("/login");
  }
  return (
    // <BrowserRouter>
    //   <Routes>
    //     {/* <Route exact path="/">
    //       <Home />
    //     </Route> */}
    //     <Route path='/login' element={Login} />
    //     <Route path='/setting' element={Setting} />
    //   </Routes>
    // </BrowserRouter>

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

    
  <button onClick={handleClick}>login</button>;
      <Routes>
        <Route exact path="/" element={<Home />}>
          {/* <Home /> */}
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/setting' element={<Setting />} />
        <Route path="profile/*" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;

// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import Alert from './components/Alert';
import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";
function App() {
  let [theme, setTheme] = useState('light');
  let [type, setType] = useState(null);
  let showAlert = (type, message)=>{
    setType({
      type: type,
      message: message 
    })
    setTimeout(() => {
      setType(null);
    }, 1500);

  }
  let changeTheme = ()=>{
    if(theme === 'light'){
      setTheme('dark');
      document.body.style.backgroundColor =  '#101862';
      document.body.style.color =  'white';
      showAlert('success', 'Dark theme successfull')
    }
    else{
      setTheme('light');
      document.body.style.backgroundColor =  'white';
      document.body.style.color =  'black';
      showAlert('success', 'Light theme successfull')
  }
}
  return (
   
    <>
     <Navbar title="TextUtils" about="About" theme={theme} changeTheme={changeTheme}/>
     <Alert alert={type}/>
     <TextArea heading="Enter text to analyse" />
     </>
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<TextArea heading="Enter text to analyse" />}></Route>
    // <Route path="/about" element={ <About />}></Route>
    // </Routes>
    // </Router>
  );
}

export default App;

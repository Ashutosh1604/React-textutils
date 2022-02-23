import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react';
import{
  BrowserRouter as Router,
  Routes,
  Route

}from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light'); //weather dark mode is enabled or not
  const [alert,setAlert]= useState(null);

   
 /* 
 //code for color palettes
 const removeBodyClasses=()=>
  {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
  }


  const togglePalette = (cls) =>
  {
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);
    document.body.style.color='white';
  }*/



   //function to toggle mode
  const toggleMode = ( )=>
  {
    
    
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor='rgb(12 34 69)';
      showAlert("Dark mode has been enabled!","success");
      
    }
    else{

      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled!","success");
      
    }
  }




  const showAlert = (message,type)=>
  {
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(()=>{
       setAlert(null);
    },1500);
  }

  return (
  <>
 
<Router>
<Navbar title="TextUtils" aboutText="About us"  mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
<div class="container my-3">

<Routes>
<Route exact path="/about" element={<About  mode={mode}/>}>

</Route>
<Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your text here to analyze" mode={mode}/>}>

</Route>

</Routes>


</div>
</Router>
</>
  );
}

export default App;

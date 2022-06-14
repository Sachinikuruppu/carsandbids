import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';

import Register from './components/register';
import  GoogleLoginComponent from './components/googlelogin';
import FacebookLoginComponent from './components/facebooklogin';
import Login from './components/login';



function App() {
  return (
    <div className="App">
   <BrowserRouter>
          <Routes>
        
          <Route path="register" element={<Register/>}/> 
          <Route path="googlelogin" element={<GoogleLoginComponent/>}/> 
          <Route path="Fblogin" element={<FacebookLoginComponent/>}/>
          <Route path="login" element={<Login/>}/>
         
          
          {/* <Route path="/index" exact component={Test}/>  */}
          </Routes>
           </BrowserRouter> 
    </div>
  );
}

export default App;

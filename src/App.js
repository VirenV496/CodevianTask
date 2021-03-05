import React from 'react'
import Login from './pages/Login/Login'
import SignUp from './pages/Register/Register'
import Datatable from './pages/Datatable/Datatable'
import PureComp from './pages/PureComp/PureComp';

import {
  BrowserRouter,
  Switch,
  Route 
  
} from "react-router-dom";
import Header from './Components/Header/Header';


function App() {
  return (
    <div>
     <BrowserRouter> 
     <Header/>
          <Switch>
        {/*     
            <Route exact path="/" component={Datatable} /> */}
            <Route path="/Login" component={Login} />
            <Route path="/SignUp" component={SignUp}/>
            <Route path="/Datatable" component={Datatable}/>
            <Route path="/PureComp" component={PureComp}/>
          
          </Switch>
     
     </BrowserRouter>
         
    </div>
  )
}

export default App

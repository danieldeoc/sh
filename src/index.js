import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import SignInPage from './pages/SignIn/signIn';
import SignInResponsePage from './pages/SignIn/signInResponse';
import SignInDetails from './pages/SignIn/signInDetails';
import HomePage from './pages/home';
import {BrowserRouter, Route, Routes} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route path='/signIn' element={<SignInPage />} />
            <Route path='/signIn/SignInDetails' element={<SignInDetails />} />
            <Route path='/signIn/sucess' element={<SignInResponsePage />} />           
        </Routes>    
    </BrowserRouter>
  
);
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import SignInPage from './pages/SignIn/signIn';
import SignInResponsePage from './pages/SignIn/signInResponse';
import SignInDetails from './pages/SignIn/signInDetails';
import HomePage from './pages/home';
import HotelView from './pages/Hotel/hotelView';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Rooms from './pages/Hotel/rooms/roomsList';
import AddRoom from './pages/Hotel/rooms/addRoom';
import LoginPage from './pages/SignIn/login';
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route exact path='/login' element={<LoginPage />} />

            <Route path='/signIn' element={<SignInPage />} />
            <Route path='/signIn/SignInDetails' element={<SignInDetails />} />
            <Route path='/signIn/sucess' element={<SignInResponsePage />} />           

            <Route path='/hotel/' element={<HotelView />} />  
            
            <Route path='/hotel/rooms/' element={<Rooms />} />  
            <Route path='/hotel/rooms/addRoom' element={<AddRoom />} />  
        </Routes>    
    </BrowserRouter>
);
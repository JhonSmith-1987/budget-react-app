import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {store} from "./Redux/Store";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import HomePage from "./Pages/HomePage/HomePage";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/home/*" element={<HomePage/>}/>
                <Route index element={<Navigate to="/login"/>}/>
            </Routes>
        </BrowserRouter>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

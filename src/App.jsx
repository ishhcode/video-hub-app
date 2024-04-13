import React from "react";
import { Route, Routes } from 'react-router-dom';
import Layout from "./Layout";
import HomePage from "./pages/HomePage.jsx"
function App() {
    return (
        <> 
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="" element={<HomePage />}/>
                </Route>
            </Routes>        
        </>
    );
}

export default App;
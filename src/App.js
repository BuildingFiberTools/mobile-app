// src/App.js
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from "./HomePage";
import BuildingPage from "./BuildingPage";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/building/:code" element={<BuildingPage/>}/>
            </Routes>
        </Router>
    );
};

export default App;

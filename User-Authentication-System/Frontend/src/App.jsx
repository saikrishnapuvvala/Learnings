import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Loginform from "./Loginform";
import Welcome from "./Welcome";


function App() {

    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Loginform />} />
            <Route path="/welcome" element={<Welcome />} />
        </Routes>
        </BrowserRouter>
    );
}

export default App;
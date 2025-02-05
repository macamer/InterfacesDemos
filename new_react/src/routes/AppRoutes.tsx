import React from 'react';
import { BrowserRouter as Router, Routes, Route } from
import Navbar from "../components/navbar/Navbar.tsx";

const AppRoutes: React.FC = () => {
    return (
    <Router>
        <Navbar/>

        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
    )
}

export default AppRoutes;
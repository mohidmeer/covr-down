import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <div className="overflow-hidden  ">
            <NavBar />
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
};

export default MainLayout;

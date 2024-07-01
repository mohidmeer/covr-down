import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const AuthLayout = () => {
    return (
        <div>
            {/* <NavBar /> */}
            <main>
                <Outlet/>
            </main>
            {/* <Footer/> */}
        </div>
    );
};

export default AuthLayout;

import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

const ManagerLayout = () => {
    return (
        <div>
            <NavBar />
            <main  className="container mx-auto flex gap-10 mt-20">
                <SideBar/>
                <Outlet/>
            </main>
        </div>
    );
};

export default ManagerLayout;

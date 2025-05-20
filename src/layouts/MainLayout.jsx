import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function MainLayout() {
    
    return (

        <div className="flex flex-col min-h-screen bg-gray-100">
            <div className="flex flex-1 overflow-hidden">
                <Sidebar/>

                <div className="flex flex-col flex-1 overflow-auto">
                    <Header/>

                    <Outlet />
                </div>
            </div>
        </div>

    );
}

export default MainLayout;
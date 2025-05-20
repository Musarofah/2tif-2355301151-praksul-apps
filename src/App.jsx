// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Dashboard from "./pages/Dashboard";
import './assets/tailwind.css'

// import Orders from "./pages/Orders";
// import Customers from "./pages/customers";
// import NotFound from "./pages/NotFound";
import Error400 from "./pages/Error400";
import Error401 from "./pages/Error401";
import Error403 from "./pages/Error403";
import Loading from "./components/Loading";
import ErrorPage from './components/ErrorPage';
import GuestLayout from './layouts/GuestLayout';
// import GuestLayout from './layouts/GuestLayout';

// import MainLayout from "./layouts/MainLayout";
// import AuthLayout from "./layouts/AuthLayout";
// import Login from "./pages/auth/Login";
// import Register from "./pages/auth/Register";
// import Forgot from "./pages/auth/Forgot";
import React, { lazy, Suspense } from 'react';
const MainLayout = lazy(() => import('./layouts/MainLayout'));
const AuthLayout = lazy(() => import('./layouts/AuthLayout'));


const Orders = lazy(() => import('./pages/Orders'));
const Customers = lazy(() => import('./pages/customers'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Login = lazy(() => import('./pages/auth/Login'));
const Register = lazy(() => import('./pages/auth/Register'));
const Forgot = lazy(() => import('./pages/auth/Forgot'));
const Dashboard = React.lazy(() => import("./pages/Dashboard"))
const Users = lazy(() => import('./pages/Users'));

const Guest = lazy(() => import('./pages/guest/Guest'));

const KetersediaanP = lazy(() => import('./pages/KetersediaanP'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/error-400" element={<Error400 />} />
            <Route path="/error-401" element={<Error401 />} />
            <Route path="/error-403" element={<Error403 />} />
            <Route path="/users" element={<Users />} />
            <Route path="/ketersediaanp" element={<KetersediaanP />} />
          </Route>

          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot" element={<Forgot />} />
          </Route>

          <Route element={<GuestLayout />}>
            <Route path="/guest" element={<Guest />} />
          </Route>

          <Route path="*" element={<NotFound />} />

        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

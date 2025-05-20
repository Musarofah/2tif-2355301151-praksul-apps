// src/layouts/GuestLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';

const GuestLayout = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
};

export default GuestLayout;

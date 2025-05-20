import React from 'react';
import ErrorPage from '../components/ErrorPage'; // Pastikan path ke ErrorPage benar

const NotFound = () => {
  return (
    <ErrorPage
      code="404"
      description="Oops! Halaman yang kamu cari tidak ditemukan."
      image="img/bg error.jpg" // Ganti dengan path gambar yang sesuai untuk Not Found
    />
  );
};

export default NotFound;
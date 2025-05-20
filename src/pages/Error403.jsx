import React from 'react';
import ErrorPage from '../components/ErrorPage';

const Error403 = () => {
  return (
    <ErrorPage
      code="403"
      description="Forbidden. You do not have permission to access this resource."
      image="public/img/bg error.jpg" // Ganti dengan path gambar yang sesuai
    />
  );
};

export default Error403;
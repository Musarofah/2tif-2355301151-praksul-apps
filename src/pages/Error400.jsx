import React from 'react';
import ErrorPage from '../components/ErrorPage';

const Error400 = () => {
  return (
    <ErrorPage
      code="400"
      description="Bad Request. The server could not understand the request due to invalid syntax."
      image="img/bg error.jpg" // Ganti dengan path gambar yang sesuai
    />
  );
};

export default Error400;
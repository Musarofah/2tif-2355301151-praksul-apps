import React from 'react';
import ErrorPage from '../components/ErrorPage';

const Error401 = () => {
  return (
    <ErrorPage
      code="401"
      description="Unauthorized. Access to the requested resource requires authentication."
      image="img/bg error.jpg" // Ganti dengan path gambar yang sesuai
    />
  );
};

export default Error401;
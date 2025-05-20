import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = ({
  code = '404',
  title = 'Oops...',
  description = "Something went wrong. Sorry, we can't find the page you're looking for.",
  image,
  buttonText = 'Go Back to Dashboard',
}) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/'); // Sesuaikan dengan route dashboard kamu
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 md:p-16 max-w-3xl w-full">
        {title && (
          <div className="text-center mb-6">
            <h2 className="text-4xl font-bold text-gray-700">{title}</h2>
          </div>
        )}
        {image && (
          <div className="flex justify-center mb-8">
            <img src={image} alt={`Error ${code}`} className="max-w-md h-auto" />
          </div>
        )}
        <h1 className="text-6xl font-extrabold text-blue-500 text-center mb-4">{code}</h1>
        <p className="text-lg text-gray-600 text-center mb-6">{description}</p>
        <div className="flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg"
            onClick={handleBackClick}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;

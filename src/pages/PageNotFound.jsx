import React from 'react';
import NotFound from '../assets/404.json';
import Lottie from 'react-lottie';
export default function PageNotFound() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: NotFound,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="mt-24">
      <div className="flex w-1/2 m-auto justify-center ">
        <h2 className="font-bold md:text-3xl pr-6 sm:text-lg ml-8 ">
          Pagina no encontrada
        </h2>
     
      </div>
      <Lottie options={defaultOptions} height={300} width={300} />
    </div>
  );
}
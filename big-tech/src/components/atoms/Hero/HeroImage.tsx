import React from 'react';

function HeroImage() {
  return (
    <div className="relative w-full h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/images/banner_bg.jpg)', backgroundColor: '#000' }}>
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold">Welcome to Our Website</h1>
      </div>
    </div>
  );
}

export default HeroImage;

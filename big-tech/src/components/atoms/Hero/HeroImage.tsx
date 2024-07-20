import Image from 'next/image';
import React from 'react';

function HeroImage() {
  return (
    <div className="relative w-full h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/images/banner_bg.jpg)', backgroundColor: '#000' }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-center max-w-[1300px] mx-auto">
        <div className='w-10 h-10 my-3'>
          <Image src={"/images/fire.png"} alt='fire icon' width={1000} height={1000}/>
        </div>
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-8 sm:w-full md:w-[70%]">
          Join Future Of Algorithmic <span className='text-[#00c4f4]'>Crypto</span> Trading Strategies
        </h1>
        
        <div className="w-full max-w-2xl mt-8 px-4 md:px-8">
          <div className="relative">
            <div className="flex justify-between mb-1">
              <div className="text-center">
                <p className="text-xs font-semibold text-[#00c4f4]">PRE SELL</p>
                <p className='text-xs font-semibold text-[#00c4f4] py-2'>|</p>
              </div>
              <div className="text-center">
                <p className="text-xs font-semibold text-orange-400">SOFT CAP</p>
                <p className='text-xs font-semibold text-orange-400 py-2'>|</p>
              </div>
              <div className="text-center">
                <p className="text-xs font-semibold text-green-400">BONUS</p>
                <p className="text-xs font-semibold text-green-400 py-2">|</p>
              </div>
            </div>
            <div className="overflow-hidden h-2 mb-2 text-xs flex bg-gray-200 relative">
              <div style={{ width: '65%' }} className="flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#00c4f4]"></div>
            </div>
            <div className="flex justify-between mb-2 text-white font-semibold text-[10px] sm:text-[10px] md:text-[13px] lg:text-[16px]">
              <span className="inline-block">65% TARGET RAISED</span>
              <span className="inline-block">1 ETH = $1000 = 3177.38 CIC</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroImage;

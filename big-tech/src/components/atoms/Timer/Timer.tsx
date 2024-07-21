"use client"
import React, { useState, useEffect } from 'react'

function Timer() {
  const calculateTimeLeft = () => {
    const difference = +new Date('2024-08-01') - +new Date();
    let timeLeft:any = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-white text-center font-semibold text-3xl mt-5 mb-10'>ICO Will Start In..</h1>
      <div className='flex flex-wrap justify-center items-center gap-5'>
        <div className='bg-[#0b1d33] flex flex-col justify-center items-center rounded w-32 h-24'>
          <h1 className='text-[#00c4f4] font-semibold text-3xl'>{timeLeft.days || '00'}</h1>
          <p className='text-[#a4b4c3] font-semibold text-[14px] text-center py-1'>Days</p>
        </div>
        <div className='bg-[#0b1d33] flex flex-col justify-center items-center rounded w-32 h-24'>
          <h1 className='text-[#ff9700] font-semibold text-3xl'>{timeLeft.hours || '00'}</h1>
          <p className='text-[#a4b4c3] font-semibold text-[14px] text-center py-1'>Hour</p>
        </div>
        <div className='bg-[#0b1d33] flex flex-col justify-center items-center rounded w-32 h-24'>
          <h1 className='text-[#ff1d45] font-semibold text-3xl'>{timeLeft.minutes || '00'}</h1>
          <p className='text-[#a4b4c3] font-semibold text-[14px] text-center py-1'>Minute</p>
        </div>
        <div className='bg-[#0b1d33] flex flex-col justify-center items-center rounded w-32 h-24'>
          <h1 className='text-[#12d176] font-semibold text-3xl'>{timeLeft.seconds || '00'}</h1>
          <p className='text-[#a4b4c3] font-semibold text-[14px] text-center py-1'>Second</p>
        </div>
      </div>
    </div>
  )
}

export default Timer

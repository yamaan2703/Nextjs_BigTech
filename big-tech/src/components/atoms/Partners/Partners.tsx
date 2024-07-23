import React from 'react';
import { FaCircle } from 'react-icons/fa';
import Image from 'next/image';

function Partners() {
  const partnerImages = [
    { image: "/images/partner_img01.png" },
    { image: "/images/partner_img02.png" },
    { image: "/images/partner_img03.png" },
    { image: "/images/partner_img04.png" },
    { image: "/images/partner_img05.png" },
    { image: "/images/partner_img06.png" },
    { image: "/images/partner_img07.png" },
    { image: "/images/partner_img08.png" },
    { image: "/images/partner_img09.png" },
    { image: "/images/partner_img10.png" },
  ];

  return (
    <div className='mt-10 bg-[#030b15]'>
      <div className="flex items-center justify-center gap-3 py-10 font-semibold text-[14px] text-white">
        <FaCircle className="text-[10px] text-[#00c4f4]" />
        <p>OUR PARTNERS</p>
        <FaCircle className="text-[10px] text-[#00c4f4]" />
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 border border-gray-800 mx-4 sm:mx-10 lg:mx-20'>
        {partnerImages.map((item, index) => (
          <div key={index} className='flex justify-center border border-gray-800 items-center p-3 sm:p-5'>
            <div className='partner-image-wrapper'>
              <Image
                src={item.image}
                width={100}
                height={100}
                alt={`Partner ${index + 1}`}
                className='partner-image transition-opacity duration-300 ease-in-out opacity-50 hover:opacity-100'
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Partners;

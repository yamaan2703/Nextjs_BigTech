import React from 'react';
import { FaCircle } from 'react-icons/fa6';
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
      <div className="flex items-center justify-center gap-3 py-3 font-semibold text-white">
        <FaCircle className="text-[10px] text-[#00c4f4]" />
        <p>OUR PARTNERS</p>
        <FaCircle className="text-[10px] text-[#00c4f4]" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mx-4 md:mx-20">
        {partnerImages.map((item, index) => (
          <div key={index} className="relative overflow-hidden group">
            <div className="absolute inset-0 bg-black opacity-60 transition-opacity duration-300 ease-in-out group-hover:opacity-0"></div>
            <Image
              src={item.image}
              alt={`Partner ${index + 1}`}
              width={150}
              height={150}
              className="object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-100"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Partners;

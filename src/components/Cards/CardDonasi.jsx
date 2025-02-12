// DonasiCard.js

import React from "react";
import { FaLocationDot, FaTruck } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { MdInfo } from "react-icons/md";
import ButtonDonasi from "../element/button/buttonDonasi";

const DonasiCard = ({ data }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg my-4">
      <img src={data.image} alt="" className="w-full h-80 object-cover" />
      <div className="font-bold text-xl mb-2 text-center mt-4">
        {data.title}
      </div>
      <div className="px-6 py-4 flex items-center">
        <span className="mr-3 text-2xl">
          <FaLocationDot />
        </span>
        <p className="text-gray-700 text-sm">{data.location}</p>
      </div>
      <div className="px-6 py-4 flex items-center">
        <span className="mr-3 text-2xl">
          <FiUsers />
        </span>
        <p className="text-gray-700 text-sm">{data.kategori}</p>
      </div>
      <div className="px-6 py-4 flex items-center">
        <span className="mr-3 text-2xl">
          <FaTruck />
        </span>
        <p className="text-gray-700 text-sm">{data.layanan}</p>
      </div>
      <div className="px-6 py-4 flex items-center">
        <span className="mr-3 text-2xl">
          <MdInfo />
        </span>
        <p className="text-gray-700 text-sm">{data.tanggal}</p>
      </div>
      <div className="px-6 py-4 flex items-center justify-center">
        <ButtonDonasi />
      </div>
    </div>
  );
};

export default DonasiCard;

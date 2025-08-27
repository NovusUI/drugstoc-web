// src/components/NdprCard.tsx
import React from "react";

const NdprCard: React.FC = () => {
  return (
    <div
      style={{
        background: "linear-gradient(to right, #489D75, #1C5136)",
      }}
      className="rounded-lg px-4 sm:px-8 lg:px-14 py-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-center text-white h-auto md:h-[513px]"
    >
      {/* Left text */}
      <div className="text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light">DrugStoc is</h2>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mt-2">
          NDPR AUDIT <br /> COMPLIANT 2024
        </h1>
      </div>

      {/* Right side */}
      <div className="flex items-center justify-center md:justify-end space-x-4 sm:space-x-6">
        <img
          src="/qrcode.png"
          alt="NDPR QR Code"
          className="bg-white p-2 rounded-md w-24 h-24 md:w-64 md:h-64"
        />
        <img 
          src="/ng_data_protection.png" 
          alt="NDPR Badge" 
          className="w-28 h-28 sm:w-40 sm:h-40" 
        />
      </div>
    </div>
  );
};

export default NdprCard;
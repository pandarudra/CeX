import React from "react";
import Image from "next/image";

const Card = ({ imglink, heading, desc }) => {
  return (
    <div className="w-64 h-96 border-2 border-blue-900 flex flex-col gap-14 pt-3 rounded-md items-center">
      <Image src={imglink} height={80} width={80} alt="Flowbite Logo" />
      <div className="flex flex-col gap-4 justify-end">
        <div className="text-2xl text-center text-blue-500">{heading}</div>
      </div>
      <div className="text-center text-slate-500">{desc}</div>
    </div>
  );
};

export default Card;

import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaSkype } from "react-icons/fa";
import Image from "next/image";
const TeamCard = ({ CoachName, designation, CoachImage }) => {
  return (
    <div className="relative w-fit group cursor-pointer">
      <Image src={CoachImage} height={452} width={424} alt="team" />
      <div
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(217, 217, 217, 0.1) 100%)",
        }}
        className="flex flex-col justify-center pl-4 lg:pr-32 pr-28 lg:py-5 py-2 absolute right-0 bottom-8 border-l-4 border-l-red-600"
      >
        <h5 className="md:text-base text-sm md:fon-bold font-semibold">
          {designation}
        </h5>
        <h3 className="lg:text-2xl md:text-xl text-lg md:font-bold font-semibold">
          {CoachName}
        </h3>
      </div>
      <div className="bg-[#FF4E25] hidden  absolute top-0 right-6 text-white lg:p-5 p-3 group-hover:flex transition duration-300 flex-col gap-7 text-xl">
        <FaSkype />
        <FaFacebook />
        <FaLinkedin />
        <FaInstagram />
      </div>
    </div>
  );
};

export default TeamCard;

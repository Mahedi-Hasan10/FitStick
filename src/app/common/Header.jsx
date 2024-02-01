"use client";
import Image from "next/image";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { Button, Drawer } from "antd";
import { useState } from "react";
import MyButton from "../components/Button";

const Header = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <nav className="flex items-center gap-3 justify-between mx-auto 2xl:px-[300px] lg:px-[100px] md:px-[100px] px-[20px] lg:h-[121px] h-[90px] relative">
      {/* logo */}
      <div className="bg-white">
        <Image src="/hero/Logo.png" alt="logo" width={215} height={44} />
      </div>
      {/* menu  */}
      <div className="lg:flex items-center xl:gap-7 lg:gap-4 hidden xl:text-lg text-base xl:font-semibold font-medium">
        {/* menu for large device  */}
        <ul className="flex items-center xl:gap-11 lg:gap-4">
          <Link href="/" className="hover:text-[#FF4E25]">
            Home +
          </Link>

          <Link href="/" className="hover:text-[#FF4E25]">
            About +
          </Link>

          <Link href="/" className="hover:text-[#FF4E25]">
            Services +
          </Link>

          <Link href="/" className="hover:text-[#FF4E25]">
            Page +
          </Link>

          <Link href="/" className="hover:text-[#FF4E25]">
            Blog +
          </Link>
        </ul>
        <MyButton buttonName="Contact" btnBG="bg-[#FF4E25]"/>
      </div>

      <div className="lg:hidden flex text-[25px] font-semibold ">
        <IoMenu onClick={showDrawer} />
      </div>

      {/*menu for small device  */}
      <Drawer onClose={onClose} open={open}>
        <ul onClose={onClose} 
          className={`flex h-full transition duration-500 flex-col text-[15px] font-bold gap-6 w-full p-4 text-center bg-opacity-50`}
        >   
          <Link onClose={onClose} href="/">
            About +
          </Link>

          

          <Link onClose={onClose} href="/">
            Services +
          </Link>

          <Link onClose={onClose} href="/">
            Page +
          </Link>

          <Link onClose={onClose} href="/">
            Blog +
          </Link>
        </ul>
      </Drawer>
    </nav>
  );
};

export default Header;

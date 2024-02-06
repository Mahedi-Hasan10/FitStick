"use client";
import Image from "next/image";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { Button, Drawer } from "antd";
import { useState } from "react";
import MyButton from "../components/Button";
import { IoMdClose, IoMdHome } from "react-icons/io";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { usePathname } from "next/navigation";


const Header = () => {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  console.log(pathName)

  return (
    <nav className="flex items-center gap-3 justify-between mx-auto lg:h-[121px] h-[90px] relative">
      {/* logo */}
      <Link href="/" className="bg-white py-[6px]">
        <Image src="/hero/Logo.png" alt="logo" width={215} height={44} />
      </Link>
      {/* menu  */}
      <div className="lg:flex items-center gap-[120px] hidden xl:text-lg text-base xl:font-semibold font-medium">
        {/* menu for large device  */}
        <ul className="flex items-center gap-11">
          <Link href="/" className={`${pathName==='/' ? 'text-[#ff4e25]':'text-white'} hover:text-[#FF4E25]`}>
            Home +
          </Link>

          <Link href="/about" className={`${pathName==='/about' ? 'text-[#ff4e25]':'text-white'} hover:text-[#FF4E25]`}>
            About +
          </Link>

          <Link href="/services" className={`${pathName==='/services'? 'text-[#ff4e25]':'text-white'} hover:text-[#FF4E25]`}>
            Services +
          </Link>

          <Link href="/page" className={`${pathName==='/page'? 'text-[#ff4e25]':'text-white'} hover:text-[#FF4E25]`}>
            Page +
          </Link>

          <Link href="/blog" className={`${pathName==='/blog'? 'text-[#ff4e25]':'text-white'} hover:text-[#FF4E25]`}>
            Blog +
          </Link>
        </ul>
        <MyButton
          buttonName="Contact"
          btnBG="bg-[#FF4E25] hover:bg-opacity-80 transition duration-400"
        />
      </div>

      <div className="lg:hidden flex text-[25px] font-semibold ">
        <IoMenu onClick={showDrawer} />
      </div>

      {/*menu for small device  */}
      <Drawer
        closeIcon={false}
        placement={"left"}
        onClose={onClose}
        open={open}
        className="!bg-[#ff4e25 lg:!hidden"
      >
        <div className="w-full flex justify-between h-20 border-b border-white">
          <button className=" border h-[35px] px-4 text-lg w-fit text-white font-semibold rounded hover:bg-opacity-80">
            Contact
          </button>
          <IoMdClose onClick={onClose} className="text-2xl text-white " />
        </div>
        <div className="text-white mt-10 flex flex-col text-xl  gap-8">
          <Link  href="/" className="flex items-center gap-2">
            <IoMdHome /> Home{" "}
          </Link>
          <Link href="/about" className="flex items-center gap-2">
            <MdOutlineDashboardCustomize /> About{" "}
          </Link>
          <Link href="/services" className="flex items-center gap-2">
            <MdOutlineDashboardCustomize /> Service{" "}
          </Link>
          <Link  href="/page" className="flex items-center gap-2">
            <MdOutlineDashboardCustomize /> Page{" "}
          </Link>
          <Link href="/blog" className="flex items-center gap-2">
            <MdOutlineDashboardCustomize /> Blog{" "}
          </Link>
        </div>
      </Drawer>
    </nav>
  );
};

export default Header;

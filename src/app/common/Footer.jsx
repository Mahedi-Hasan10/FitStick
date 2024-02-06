"use client";
import MyButton from "../components/Button";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaSkype } from "react-icons/fa";

import { Button, Checkbox, Form, Input } from 'antd';
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};


const Footer = () => {
  return (
    <footer className="bg-[#01060f] pt-[60px] lg:mt-[150px] md:mt-[80px] mt-[50px]">
      <div className="max-w-[1320px] mx-auto">
        <div className="flex flex-col mx-auto p-1 ">
          <div className="flex items-center justify-center">
            <Form className="max-w-[821px] w-full">
       
               <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your email!',
                    },
                  ]}
                >
                  <Input placeholder="Your Email" className="placeholder:!text-white"/>
                </Form.Item>
              <div className="flex items-center gap-3 mt-6">
                <div className="h-[1px] bg-white w-[40%] opacity-20"></div>
                <MyButton buttonName="Subscribe" btnBG="bg-[#FE4651]" />
              </div>
            </Form>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-[80px] gap-8 capitalize lg:py-[70px] md:py-[50px] py-10 relative ">
            <div className="z-40">
              <div className="flex items-center mb-4">
                <div className="h-[16px] w-[16px] rounded-full bg-[#fe4651]"></div>
                <Image
                  src="/hero/Logo.png"
                  alt="logo"
                  width={120}
                  height={32}
                />
              </div>
              <p className="text-base font-semibold leading-[150%] mb-6">
                if you have any question, feel free to contact us
                <span className="text-[#FE4651] mt-2"> +088 123 128 5485</span>
              </p>
              <p className="mb-2 text-base font-semibold leading-[150%] ">
                say in touch
                <span> contactinfo@gmail.com</span>
              </p>
            </div>
            <div className="z-40">
              <div className="flex items-center gap-3 lg:mb-6 mb-3">
                <div className="h-[16px] w-[16px] rounded-full bg-[#fe4651]"></div>
                <h3 className="text-xl font-bold">Quick Links</h3>
              </div>
              <ul className="text-base font-semibold leading-5 flex flex-col lg:gap-3">
                <li className="mb-2 footer-link">Contact</li>
                <li className="mb-2 footer-link">Terms & Conditions</li>
                <li className="mb-2 footer-link">Privacy & Policy</li>
              </ul>
            </div>
            <div className="z-40">
              <div className="flex items-center gap-3 lg:mb-6 mb-3">
                <div className="h-[16px] w-[16px] rounded-full bg-[#fe4651]"></div>
                <h3 className="text-xl font-bold">Useful Links</h3>
              </div>
              <ul className="text-base font-semibold leading-5 flex flex-col lg:gap-3">
                <li className="mb-2 footer-link">About Us</li>
                <li className="mb-2 footer-link">Blogs</li>
                <li className="mb-2 footer-link">FAQS</li>
              </ul>
            </div>
            <div className="z-40">
              <div className="flex items-center gap-3 lg:mb-6 mb-3">
                <div className="h-[16px] w-[16px] rounded-full bg-[#fe4651]"></div>
                <h3 className="text-xl font-bold">follow us</h3>
              </div>
              <p className="text-base font-normal leading-[150%]">
                A gym, also known as a fitness center or health club, is a
                facility dedicated to physical fitness and exercise gyms.
              </p>
              <div className="flex gap-7 text-white mt-4">
                <Link href="/" className="footer-link">
                  <FaSkype />
                </Link>
                <Link href="/" className="footer-link">
                  <FaFacebook />
                </Link>
                <Link href="/" className="footer-link">
                  <FaLinkedin />
                </Link>
                <Link href="/" className="footer-link">
                  <FaInstagram />
                </Link>
              </div>
            </div>

            <Image
              src="/footerBG.png"
              alt="footerBG"
              height={200}
              width={400}
              className="absolute bottom-0 md:left-[25%] right-0 z-10" 
            />
          </div>
        </div>
        <div className="flex items-center py-4 justify-center border-t border-t-white border-opacity-30 mt-3">
          <p className="text-sm font-bold text-center  capitalize">
            copyright 2023. all right reserved.{" "}
            <span className="text-[#FE4651]">Fitstick</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

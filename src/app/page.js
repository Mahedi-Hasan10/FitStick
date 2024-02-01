import Image from "next/image";
import MyButton from "./components/Button";
import Link from 'next/link'
import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";
import Choose from "./components/chooseUs/Choose";
export default function Home() {
  return (
    <main className="2xl:px-[300px] lg:px-[100px] md:px-[100px] px-[20px]">
      {/* hero section start  */}
      <section>
        <div className="flex gap-[40px] relative">
        <div className="xl:max-w-[660px] lg:py-[100px] sm:py-[40] py-[30px] flex flex-col gap-5 md:mx-0 mx-auto">
          <div className="xl:text-[68px] lg:text-[50px] text-[35px] xl:font-bold font-semibold xl:leading-[81px] md:mx-0  mx-auto">
            <h1 className="flex md:flex-nowrap flex-wrap gap-2 items-center">
              <Image
                src="/hero/hero-2.jpg"
                width={48}
                height={48}
                className="max-h-[48]"
                alt="hero banner"
              />
              The Best Fitness.
            </h1>
            <h1 className="flex md:flex-nowrap flex-wrap  gap-2 items-center">
              Stud In Town
              <Image
                src="/hero/hero-1.png"
                width={134}
                height={48}
                className="max-h-[48px]"
                alt="hero banner"
              />
            </h1>
          </div>

          <p className="text-base font-semibold text-[#AAAAAAAA] leading-6 md:mx-0 mx-auto">
            Welcome to this comprehensive guide on the Apple Vision Pro
            features, where we delve deep into the innovative advancements of
            this ground technology.
          </p>
          <div className="flex gap-[10px] md:mx-0 mx-auto">
            <MyButton buttonName="Get Started" btnBG="bg-[#FF4E25]" />
            <MyButton buttonName="Join Free Trial" Border="border border-white"/>
          </div>
        </div>
        <div className="lg:flex hidden items-center justify-center py-5">
          <Image
            src="/hero/hero.png"
            width={575}
            height={555}
            alt="hero banner"
          />
        </div>

        {/* social menu  */}
        <div className="lg:flex hidden gap-7 text-white rotate-90 absolute right-[-150px] top-[300px]">
              <Link href="/" className="hover:text-[#FF4E25]">Facebook</Link>
              <Link href="/" className="hover:text-[#FF4E25]">Instagram</Link>
              <Link href="/" className="hover:text-[#FF4E25]">Twitter</Link>
              <Link href="/" className="hover:text-[#FF4E25]">LinkedIn</Link>
        </div>
        </div>

        {/* video play  */}
        <div className="flex lg:flex-nowrap flex-wrap items-center xl:gap-[60px] lg:gap-[40px] ">
              <h4 className="text-2xl font-bold leading-9 max-w-[214px] capitalize md:mx-0 mx-auto mb-3">
              the class you will get here
              </h4>
      
            <div className="flex md:flex-nowrap flex-wrap items-center gap-[20px]">
              <div className="relative">
                  <Image src="/hero/videoicon.png" width={417} height={149} alt="play button" />
                  <h2 className="text-[60px] font-bold absolute right-[-30px] lg:top-[30px] top-[10px]">01</h2>
              </div>
              <p className="leading-[25px] text-base capitalize ml-7 max-w-[195px]">
                at the beginning of fitness journey need motivation
              </p>
            </div>
            <div className="flex gap-5 md:mx-0 mx-auto">
              <CgArrowLongLeft className="text-[60px] hover:text-[#FF4E25]" />
              <CgArrowLongRight className="text-[60px] hover:text-[#FF4E25]" />

            </div>
        </div>
      </section>
      {/* hero section end  */}

      {/* choose section start */}
      <Choose/>
      {/* choose section end */}
    </main>
  );
}

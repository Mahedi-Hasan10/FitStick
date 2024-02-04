import Image from "next/image";
import MyButton from "./components/Button";
import Link from "next/link";
import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";
import Choose from "./components/Hero/chooseUs/Choose";
import HeroServices from "./components/Hero/services/HeroServices";
import HeroLatest from "./components/Hero/heroLatest/HeroLatest";
import WorkingHour from "./components/Hero/workingHour/WorkingHour";
import Team from "./components/Hero/team/Team";
import Pricing from "./components/Hero/pricing/Pricing";
import CustomerSay from "./components/Hero/customerSay/CustomerSay";
import LatestBlog from "./components/Hero/blog/LatestBlog";

export default function Home() {
  return (
    <main className="2xl:px-[300px] lg:px-[100px] md:px-[50px] px-[10px]">
      {/* hero section start  */}
      <section>
        <div className="flex gap-[40px] relative">
          <div className="xl:max-w-[660px] lg:py-[100px] sm:py-[40] py-[30px] flex flex-col gap-5 md:mx-0 mx-auto">
            <div className="xl:text-[68px] lg:text-[50px] text-[30px] xl:font-bold font-semibold xl:leading-[81px] leading-10 md:mx-0  mx-auto">
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
              <MyButton
                buttonName="Join Free Trial"
                Border="border border-white"
              />
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
            <Link href="/" className="hover:text-[#FF4E25]">
              Facebook
            </Link>
            <Link href="/" className="hover:text-[#FF4E25]">
              Instagram
            </Link>
            <Link href="/" className="hover:text-[#FF4E25]">
              Twitter
            </Link>
            <Link href="/" className="hover:text-[#FF4E25]">
              LinkedIn
            </Link>
          </div>
        </div>

        {/* video play  */}
        <div className="flex lg:flex-nowrap flex-wrap items-center xl:gap-[60px] lg:gap-[40px] ">
          <h4 className="text-2xl font-bold leading-9 lg:max-w-[214px] capitalize md:mx-0 mx-auto mb-5">
            the class you will get here
          </h4>

          <div className="flex md:flex-nowrap flex-wrap items-center gap-[20px]">
            <div className="relative mx-auto">
              <Image
                src="/hero/videoicon.png"
                width={417}
                height={149}
                alt="play button"
              />
              <h2 className="text-[60px] font-bold absolute lg:right-[-30px] right-0 lg:top-[30px] md:top-[10px] top-[20px]">
                01
              </h2>
            </div>
            <p className="leading-[25px] text-base capitalize ml-7 lg:max-w-[195px]">
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

      <Choose />
      <HeroServices/>
      <HeroLatest/>
      <WorkingHour/>
      <Team/>
      <Pricing/>
      <CustomerSay/>
      <LatestBlog/>

    </main>
  );
}

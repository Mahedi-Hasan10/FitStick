
import Choose from "./components/Hero/chooseUs/Choose";
import HeroServices from "./components/Hero/services/HeroServices";
import HeroLatest from "./components/Hero/heroLatest/HeroLatest";
import WorkingHour from "./components/Hero/workingHour/WorkingHour";
import Team from "./components/Hero/team/Team";
import Pricing from "./components/Hero/pricing/Pricing";
import CustomerSay from "./components/Hero/customerSay/CustomerSay";
import LatestBlog from "./components/Hero/blog/LatestBlog";
import Schedule from "./components/Hero/schedule/Schedule";
import Hero from "./components/Hero/Hero";


export default function Home() {

  return (
    <main className=" flex flex-col lg:gap-[150px] md:gap-[80px] gap-[50px]">
      <Hero/>
      <Choose />
      <HeroServices/>
      <HeroLatest/>
      <Schedule/>
      <Team/>
      <Pricing/>
      <CustomerSay/>
      <LatestBlog/>

    </main>
  );
}

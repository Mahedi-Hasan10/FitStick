import Link from "next/link";
import TeamCard from "./TeamCard";
const Team = () => {
  return (
    <section className="">
      <div className="flex items-center justify-between lg:mb-[60px] mb-5">
        <h2 className="heading_2">Team Of Expert Trainer</h2>
        <Link
          href="/"
          className="lg:text-lg text-base lg:font-bold font-medium text-[#FF4E25] underline"
        >
          View All
        </Link>
      </div>
      <div className="flex lg:flex-nowrap flex-wrap gap-6 justify-center">
        <TeamCard
          CoachName="David Branddh"
          designation="Fitness Coach"
          CoachImage="/team/team1.png"
        />
        <TeamCard
          CoachName="David Branddh"
          designation="Fitness Coach"
          CoachImage="/team/team2.png"
        />
        <TeamCard
          CoachName="David Branddh"
          designation="Fitness Coach"
          CoachImage="/customer/ct4.png"
        />
      </div>
    </section>
  );
};

export default Team;

import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">Current</p>
          <h2 className="text-4xl font-bold">As a Developer</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sr. Software and Data Analyst Engineering Tranning"
            subTitle="Udemy - (2021 - Present)"
            result="INDIA"
            des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          />
          <ResumeCard
            title="Web Developer & Trainning"
            subTitle="Chess Developer Team - (2021 - present)"
            result="DURGAPUR"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Durgapur isn't easy."
          />
          <ResumeCard
            title="Full-Stack Developer"
            subTitle="Unstop and Freelerncer - (2021 - present)"
            result="INDIA"
            des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021-2023</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="UI and UX Designer"
            subTitle="Fiverr and Figma (2021 - present)"
            result="INDIA(JOB->UNSTOP AND FREELERNCING) "
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Web Developer and App Devloper"
            subTitle="Udemy and YouTube (2021 - present)"
            result="INDIA(UDEMY)"
            des="Skill and Improvement education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Remote Job"
            subTitle="Online Platform (2021 - present)"
            result="INDIA"
            des="Online Remote Job is very benificial for our experience and earn more money from our house."
            />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;

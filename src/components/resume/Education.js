import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2008-current</p>
          <h2 className="text-3xl md:text-4xl font-bold">BTech/current</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BTech in Chemical Engineering/(Current)."
            subTitl="National Institute Of Technology Durgapur. (2021 - Current)"
            result="7.73/10"
            des="I have brought many courses about Web Devlopment from Udemy and hae learnt many things."
          />
          <ResumeCard
            title="Higher Secondary Education."
            subTitle="St.Xaviours school(2021)"
            result="84.4%"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="St.Xaviours School(2019)"
            result="87%"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021-2013</p>
          <h2 className="text-3xl md:text-4xl font-bold">Devlopment Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Fronted Devloper"
            subTitle="Freelerncing - (2021 - Present)"
            result="All"
            des="Freelerncing's hiring process is an important part of our culture. Freelearncers care deeply about their teams and the people who make them up."
          />
          <ResumeCard
            title="Full-Stack-Devlopment"
            subTitle="Unstop - (Current)"
            result="All site"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in any isn't easy."
          />
          <ResumeCard
            title="Full-stack Developer"
            subTitle="Freelerncing.com - (Current)"
            result="Freelerncing.com"
            des="The Freelerncing.com economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education
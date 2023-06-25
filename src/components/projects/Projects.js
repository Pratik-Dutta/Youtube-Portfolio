import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Mern-Social-Media"
          des=" This is a full stack devlopment site.
          This site is used in our Chemical Engineering Student Sociaty Site!"
          src={projectOne}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" This is a full stack devlopment site
              This site is used for social media purpuse!"
          src={projectTwo}
        />
        <ProjectsCard
          title="Chatting App"
          des=" This is a full stack devlopment site
              This site is used for social media purpuse!"
          src={projectThree}
        />
        <ProjectsCard
          title="Drum kit"
          des=" It is a frontend devlopment site.
              Kid's play this game!"
          src={projectThree}
        />
        <ProjectsCard
          title="Personal Portofolio-site"
          des=" This is a full stack devlopment site
              This site is used for social media purpuse and to present myself!"
          src={projectOne}
        />
        <ProjectsCard
          title="chatbot"
          des=" This is made by Python language.
              It is used to solve our roblems easily!"
          src={projectTwo}
        />
      </div>
    </section>
  );
}

export default Projects
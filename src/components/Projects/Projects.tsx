"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import { Cover } from "@/components/ui/cover";
import { ExternalLink, Github } from "lucide-react"; // Importing Lucide icons
import {projectData} from "@/constants/data";

interface Project {
  title: string;
  description: string;
  image: string;
  liveLink?: string;
  githubLink: string;
}

const ProjectCard = ({ project }: { project: Project }) => (
  <CardContainer className="inter-var">
    <CardBody className="bg-gray-900 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-4 border">
      <CardItem
        translateZ="50"
        className="text-lg font-bold text-gray-100 dark:text-white"
      >
        {project.title}
      </CardItem>
      <CardItem
        as="p"
        translateZ="60"
        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 line-clamp-4"
      >
        {project.description}
      </CardItem>
      <CardItem translateZ="100" className="w-full mt-4">
        <Image
          src={project.image}
          height={800}
          width={800}
          className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
          alt={project.title}
        />
      </CardItem>
      <div className="flex justify-between items-center mt-8">
        <CardItem translateZ={20} className="flex space-x-4">
          {project.liveLink && (
            <Link href={project.liveLink} target="_blank">
              <ExternalLink
                size={24}
                className="text-white dark:text-gray-300 hover:text-blue-600 transition-colors"
              />
            </Link>
          )}
          <Link href={project.githubLink} target="_blank">
            <Github
              size={24}
              className="text-white dark:text-gray-300 hover:text-blue-600 transition-colors"
            />
          </Link>
        </CardItem>
      </div>
    </CardBody>
  </CardContainer>
);

const Projects = () => {
  return (
    <section className="bg-gray-950 py-16">
      <div className="container mx-auto px-2">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4">
            <Cover>My Projects</Cover>
          </h2>
          <p className="text-gray-400 mb-12">
            Explore a collection of my recent projects, showcasing my skills in web development,
            AI integration, and innovative problem-solving.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {projectData.map((project, index) => (
            <ProjectCard key={index} project={project} /> 
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

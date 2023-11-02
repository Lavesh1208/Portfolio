"use client";

import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import React from "react";
import Project from "./Project";
import SectionHeading from "./SectionHeading";

const Projects = () => {
	const { ref } = useSectionInView("Projects");

	return (
		<section ref={ref} id="projects" className="scroll-mt-28">
			<SectionHeading>My projects</SectionHeading>
			<div>
				{projectsData.map((project, index) => (
					<React.Fragment key={index}>
						<Project {...project} />
					</React.Fragment>
				))}
			</div>
		</section>
	);
};

export default Projects;

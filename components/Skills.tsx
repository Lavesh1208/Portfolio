"use client";

import { useSectionInView } from "@/lib/hooks";
import React from "react";
import SectionHeading from "./SectionHeading";
import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeInAnimationVariants = {
	initial: {
		opacity: 0,
		y: 100,
	},
	animate: (index: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.05 * index,
		},
	}),
};

const Skills = () => {
	const { ref } = useSectionInView("Skills");
	return (
		<section
			id="skills"
			ref={ref}
			className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
		>
			<SectionHeading>My skills</SectionHeading>
			<ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
				{skillsData.map((skill, index) => (
					<motion.li
						className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
						key={index}
						variants={fadeInAnimationVariants}
						initial="initial"
						whileInView="animate"
						viewport={{
							once: true,
						}}
						custom={index}
					>
						<div className="flex items-center">
							<Image
								src={skill.skillImg}
								alt={skill.skillName}
								width={25}
								height={25}
							/>
							<span className="ml-2">{skill.skillName}</span>
						</div>
					</motion.li>
				))}
			</ul>
		</section>
	);
};

export default Skills;

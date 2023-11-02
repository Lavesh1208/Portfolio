"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const About = () => {
	const { ref } = useSectionInView("About");

	return (
		<motion.section
			ref={ref}
			className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			id="about"
		>
			<SectionHeading>About me</SectionHeading>
			<p className="mb-3">
				Hello, I&apos;m <span className="font-medium">Lavesh</span>, a
				passionate and creative{" "}
				<span className="font-medium">Full-stack developer</span> with a deep
				love for web development. I am dedicated to crafting exceptional
				websites and applications that not only meet but exceed client
				expectations. My journey in the world of coding began with a fascination
				for the endless possibilities of technology, and since then, I&apos;ve
				been on an exciting adventure of learning and building.
			</p>
			<p>
				With a primary focus on technologies like{" "}
				<span className="font-medium">React, Next.js, and the MERN stack</span>,
				I&apos;ve honed my skills to deliver seamless user experiences. Whether
				it&apos;s creating interactive front-end interfaces or developing robust
				back-end solutions, I&apos;m here to transform ideas into reality.
			</p>
			<p>
				What drives me is the constant evolution of web development and the
				opportunity to solve real-world problems through{" "}
				<span className="italic">elegant and efficient code</span>. I&apos;m
				always up for a challenge,{" "}
				<span className="font-medium">eager to learn new things</span>, and
				ready to embrace the next big project. Let&apos;s collaborate and turn
				your visions into stunning digital solutions.
			</p>
		</motion.section>
	);
};

export default About;

import realEstateImg from "@/public/realEstate.jpeg";
import yelpcampImg from "@/public/yelpcamp.jpeg";
import airbnbImg from "@/public/airbnb.jpeg";

export const links = [
	{
		name: "Home",
		hash: "#home",
	},
	{
		name: "Skills",
		hash: "#skills",
	},
	{
		name: "Projects",
		hash: "#projects",
	},
	{
		name: "About",
		hash: "#about",
	},
	{
		name: "Contact",
		hash: "#contact",
	},
] as const;

export const projectsData = [
	{
		title: "RealEstate",
		description:
			"RealEstate is a comprehensive web app built with MERN Stack. It facilitates seamless browsing and management of real estate listings.",
		tags: [
			"TypeScript",
			"React",
			"Redux",
			"Tailwind",
			"NodeJS",
			"ExpressJS",
			"MongoDB",
		],
		imageUrl: realEstateImg,
	},
	{
		title: "YelpCamp",
		description:
			"YelpCamp is a full-stack web app powered by MERN Stack. It enables users to discover and share insights about various camping sites.",
		tags: [
			"TypeScript",
			"React",
			"Redux",
			"Tailwind",
			"NodeJS",
			"ExpressJS",
			"MongoDB",
		],
		imageUrl: yelpcampImg,
	},
	{
		title: "Airbnb Clone",
		description:
			"The Airbnb Clone is a sophisticated web app built with NextJS, MongoDB, Framer, and NextAuth. It replicates the core functionalities of the popular Airbnb platform.",
		tags: ["React", "Tailwind", "Next.js", "MongoDB", "Framer", "NextAuth"],
		imageUrl: airbnbImg,
	},
] as const;

export const skillsData = [
	{
		skillName: "TypeScript",
		skillImg: "/skills_logo/typescript.png",
	},
	{
		skillName: "JavaScript",
		skillImg: "/skills_logo/javascript.png",
	},
	{
		skillName: "React",
		skillImg: "/skills_logo/react.png",
	},
	{
		skillName: "Next.js",
		skillImg: "/skills_logo/nextjs.png",
	},
	{
		skillName: "Redux",
		skillImg: "/skills_logo/redux.png",
	},
	{
		skillName: "Node.js",
		skillImg: "/skills_logo/nodejs.png",
	},
	{
		skillName: "Git",
		skillImg: "/skills_logo/git.png",
	},
	{
		skillName: "Tailwind",
		skillImg: "/skills_logo/tailwind.png",
	},
	{
		skillName: "Express",
		skillImg: "/skills_logo/express.png",
	},
	{
		skillName: "NestJS",
		skillImg: "/skills_logo/nestjs1.png",
	},
	{
		skillName: "MongoDB",
		skillImg: "/skills_logo/mongodb.png",
	},
	{
		skillName: "PostgreSQL",
		skillImg: "/skills_logo/postgresql.png",
	},
	{
		skillName: "Prisma",
		skillImg: "/skills_logo/prisma.png",
	},
	{
		skillName: "HTML",
		skillImg: "/skills_logo/html.png",
	},
	{
		skillName: "CSS",
		skillImg: "/skills_logo/css.png",
	},
	{
		skillName: "Python",
		skillImg: "/skills_logo/python.png",
	},
	{
		skillName: "C++",
		skillImg: "/skills_logo/c++.png",
	},
] as const;

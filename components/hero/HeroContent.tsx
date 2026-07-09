"use client";
import SocialLinks from "./SocialLinks";
import { personal } from "@/data/personal";
import Stats from "./Stats";
import { scrollToSection } from "@/utils/scrollToSection";


export default function HeroContent() {
    return (
        <div className="mx-auto w-full max-w-xl text-center lg:mx-0 lg:max-w-none lg:text-left">

            {/* Badge */}
            <div className="mb-6 flex justify-center lg:justify-start">
                <div className="inline-flex items-center rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-400">
                    <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-green-400"></span>
                    Available for Freelance
                </div>
            </div>

            {/* Greeting */}
            <p className="mb-4 text-lg font-medium text-blue-500">
                👋 Hi, I'm
            </p>

            {/* Name */}
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
                {personal.name}
            </h1>

            {/* Title */}
            <h2 className="mt-6 text-2xl font-semibold text-gray-300 md:text-3xl">
                {personal.title}
            </h2>

            {/* Description */}
            <p className="mx-auto mt-8 max-w-xl text-base leading-7 text-gray-400 sm:max-w-2xl sm:text-lg sm:leading-8 lg:mx-0">
                {personal.shortDescription}
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">

                <a
                    href="#contact"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("contact");
                    }}
                    className="rounded-xl bg-blue-600 px-8 py-4 font-semibold transition-all duration-300 hover:scale-105 hover:bg-blue-700"
                >
                    Let's Work Together
                </a>

                <a
                    href="#projects"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("projects");
                    }}
                    className="rounded-xl border border-white/10 px-8 py-4 font-semibold transition-all duration-300 hover:border-blue-500 hover:text-blue-400"
                >
                    View My Work
                </a>

            </div>

            <Stats />
            <SocialLinks />

        </div>
    );
}
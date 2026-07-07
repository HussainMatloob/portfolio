import { about } from "@/data/about";
import { FaDownload } from "react-icons/fa";

export default function AboutContent() {
    return (
        <div className="flex flex-col justify-center">

            {/* Section Label */}
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
                About Me
            </p>

            {/* Heading */}
            <h2 className="text-4xl font-extrabold leading-tight text-white md:text-5xl">
                {about.subtitle}
            </h2>

            {/* Description */}
            <p className="mt-8 whitespace-pre-line text-base leading-8 text-gray-400 md:text-lg">
                {about.description}
            </p>

            {/* Highlights */}
            <div className="mt-10 flex flex-wrap gap-3">

                {about.highlights.map((item) => (
                    <span
                        key={item}
                        className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300"
                    >
                        {item}
                    </span>
                ))}

            </div>

            {/* Resume Button */}
            <div className="mt-10">

                <a
                    href="/resume/myResume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-xl bg-blue-600 px-7 py-4 font-semibold transition-all duration-300 hover:bg-blue-700"
                >
                    <FaDownload />

                    Download Resume
                </a>

            </div>

        </div>
    );
}
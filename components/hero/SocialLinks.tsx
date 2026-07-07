"use client";

import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaDownload
} from "react-icons/fa";
import { personal } from "@/data/personal";

export default function SocialLinks() {
    return (
        <div className="mt-10 flex flex-wrap items-center gap-4">

            <a
                href={personal.github}
                target="_blank"
                className="rounded-full border border-white/10 p-3 transition-all hover:border-blue-500 hover:text-blue-400"
            >
                <FaGithub size={20} />
            </a>

            <a
                href={personal.linkedin}
                target="_blank"
                className="rounded-full border border-white/10 p-3 transition-all hover:border-blue-500 hover:text-blue-400"
            >
                <FaLinkedin size={20} />
            </a>

            <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personal.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 p-3 transition-all hover:border-blue-500 hover:text-blue-400"
            >
                <FaEnvelope size={20} />
            </a>

            <a
                href="/resume/MyResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 font-semibold transition-all hover:bg-blue-700"
            >
                <FaDownload />

                Resume
            </a>

        </div>
    );
}
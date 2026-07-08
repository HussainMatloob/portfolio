import Link from "next/link";

import {
    FaEnvelope,
    FaGithub,
    FaLinkedin,
    FaMapMarkerAlt,
    FaCircle,
} from "react-icons/fa";

import { personal } from "@/data/personal";

export default function ContactInfo() {
    return (
        <div
            className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-8
            backdrop-blur-md"
        >

            <div className="space-y-8">

                <div>

                    <p className="text-sm uppercase tracking-[0.2em] text-blue-500">
                        Email
                    </p>

                    <a
                        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personal.email}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-semibold hover:text-blue-400"
                    >
                        {personal.email}
                    </a>

                </div>

                <div>

                    <p className="text-sm uppercase tracking-[0.2em] text-blue-500">
                        Location
                    </p>

                    <div className="mt-2 flex items-center gap-3">

                        <FaMapMarkerAlt />

                        Pakistan

                    </div>

                </div>

                <div>

                    <p className="text-sm uppercase tracking-[0.2em] text-blue-500">
                        Availability
                    </p>

                    <div className="mt-2 flex items-center gap-3 text-green-400">

                        <FaCircle
                            className="text-xs"
                        />

                        Available for Freelance Projects

                    </div>

                </div>

            </div>

            <div className="mt-10 flex flex-wrap gap-4">

                <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personal.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
    rounded-xl
    bg-blue-600
    px-6
    py-3
    font-semibold
    transition
    hover:bg-blue-700"
                >
                    Email Me
                </a>

                <Link
                    href={personal.linkedin}
                    target="_blank"
                    className="
                    rounded-xl
                    border
                    border-white/10
                    px-6
                    py-3
                    transition
                    hover:border-blue-500"
                >
                    <FaLinkedin />
                </Link>

                <Link
                    href={personal.github}
                    target="_blank"
                    className="
                    rounded-xl
                    border
                    border-white/10
                    px-6
                    py-3
                    transition
                    hover:border-blue-500"
                >
                    <FaGithub />
                </Link>

            </div>

        </div>
    );
}
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
            p-5 sm:p-6 lg:p-8
            backdrop-blur-md"
        >

            <div className="space-y-8">

                <div>

                    <p className="text-sm uppercase tracking-[0.2em] text-blue-500">
                        Email
                    </p>

                    <a
                        href={`mailto:${personal.email}`}
                        className="break-all text-base font-semibold transition-colors hover:text-blue-400 sm:text-lg"
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

                    <div className="mt-2 flex items-start gap-3 text-green-400">

                        <FaCircle className="mt-1 shrink-0 text-xs" />

                        Available for Freelance Projects

                    </div>

                </div>

            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">

                <a
                    href={`mailto:${personal.email}?subject=Project Inquiry`}
                    className="
        flex
        justify-center
        rounded-xl
        bg-blue-600
        px-6
        py-3
        font-semibold
        transition
        hover:bg-blue-700
    "
                >
                    Email Me
                </a>

                <Link
                    href={personal.linkedin}
                    target="_blank"
                    className="
flex
justify-center
rounded-xl
border
border-white/10
px-6
py-3
transition
hover:border-blue-500
"
                >
                    <FaLinkedin />
                </Link>

                <Link
                    href={personal.github}
                    target="_blank"
                    className="
flex
justify-center
rounded-xl
border
border-white/10
px-6
py-3
transition
hover:border-blue-500
"
                >
                    <FaGithub />
                </Link>

            </div>

        </div>
    );
}
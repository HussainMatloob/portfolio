"use client";

import {
    SiFastapi,
    SiFirebase,
    SiFlutter,
    SiLaravel,
    SiSupabase
} from "react-icons/si";

const technologies = [
    {
        title: "Flutter",
        icon: <SiFlutter size={18} />,
        className: "left-12 top-16",
    },
    {
        title: "Firebase",
        icon: <SiFirebase size={18} />,
        className: "right-2 top-21",
    },
    {
        title: "Laravel",
        icon: <SiLaravel size={18} />,
        className: "left-0 bottom-28",
    },
    {
        title: "Supabase",
        icon: <SiSupabase size={18} />,
        className: "right-0 bottom-21",
    },
    {
        title: "FastAPI",
        icon: <SiFastapi size={18} />,
        className: "-left-16 bottom-78",
    }

];

export default function FloatingCards() {
    return (
        <>
            {technologies.map((tech) => (
                <div
                    key={tech.title}
                    className={`absolute hidden lg:flex ${tech.className}
                    flex items-center gap-2 rounded-xl
                    border border-white/10
                    bg-[#111827]/90
                    px-4 py-2
                    shadow-xl
                    backdrop-blur-lg`}
                >
                    {tech.icon}

                    <span className="text-sm font-medium">
                        {tech.title}
                    </span>

                </div>
            ))}
        </>
    );
}
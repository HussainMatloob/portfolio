"use client";

import {
    SiFlutter,
    SiFirebase,
    SiLaravel,
    SiSupabase,
    SiPython
} from "react-icons/si";

const technologies = [
    {
        title: "Flutter",
        icon: <SiFlutter size={18} />,
        className: "left-12 top-14",
    },
    {
        title: "Firebase",
        icon: <SiFirebase size={18} />,
        className: "right-12 top-24",
    },
    {
        title: "Laravel",
        icon: <SiLaravel size={18} />,
        className: "left-0 bottom-28",
    },
    {
        title: "Supabase",
        icon: <SiSupabase size={18} />,
        className: "right-0 bottom-20",
    },

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
import Image from "next/image";
import MobileProjectPreview from "./MobileProjectPreview";
import {
    FaGooglePlay,
    FaGlobe,
    FaDownload
} from "react-icons/fa";
import TechBadge from "./TechBadge";
import { Project } from "@/data/projects";

type Props = {
    project: Project;
};

export default function ProjectCard({ project }: Props) {
    return (
        <div
            className="
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-md
            transition-all
            duration-300
            hover:-translate-y-2
            hover:border-blue-500/40
            hover:shadow-2xl"
        >
            {/* Image */}

            {project.device === "web" ? (

                <div className="relative h-[320px] bg-[#09090B]">

                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-contain p-8"
                    />

                </div>

            ) : (

                <MobileProjectPreview
                    screenshots={project.screenshots}
                />

            )}
            {/* Content */}

            <div className="p-6">

                <span
                    className="
                    rounded-full
                    bg-blue-500/10
                    px-3
                    py-1
                    text-xs
                    font-semibold
                    text-blue-400"
                >
                    {project.category}
                </span>

                <h3 className="mt-4 text-2xl font-bold">
                    {project.title}
                </h3>

                <p className="mt-4 text-gray-400 leading-7">
                    {project.shortDescription}
                </p>

                <p className="mt-4 text-sm text-gray-500">
                    <span className="font-semibold text-white">
                        My Role:
                    </span>{" "}
                    {project.role}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">

                    {project.technologies.map((tech) => (
                        <TechBadge
                            key={tech}
                            title={tech}
                        />
                    ))}

                </div>

                <div className="mt-8 flex flex-wrap gap-3">

                    {project.links.map((link, index) => {

                        const Icon =
                            link.type === "website"
                                ? FaGlobe
                                : link.type === "playstore"
                                    ? FaGooglePlay
                                    : FaDownload;

                        const isPrimary = link.type === "website";

                        return (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={
                                    isPrimary
                                        ? "flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold transition hover:bg-blue-700"
                                        : "flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 transition hover:border-blue-500"
                                }
                            >
                                <Icon />
                                {link.title}
                            </a>
                        );
                    })}

                </div>

            </div>

        </div>
    );
}
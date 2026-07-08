
import WebProjectPreview from "./WebProjectPreview";
import {
    FaGlobe,
    FaGooglePlay,
    FaDownload
} from "react-icons/fa";
import TechBadge from "./TechBadge";

type Props = {
    project: any;
};

export default function FeaturedProject({ project }: Props) {
    return (
        <div
            className="
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-md
            shadow-2xl
            transition-all
            duration-500
            hover:border-blue-500/40"
        >
            <div className="grid lg:grid-cols-2">

                {/* LEFT IMAGE */}



                <div className="p-6 lg:p-8">
                    <WebProjectPreview
                        screenshots={project.screenshots}
                        title={project.title}
                    />
                </div>

                {/* RIGHT CONTENT */}

                <div className="flex flex-col justify-center p-8 md:p-12">

                    <span
                        className="
                        mb-4
                        inline-flex
                        w-fit
                        rounded-full
                        bg-blue-600/15
                        px-4
                        py-2
                        text-sm
                        font-semibold
                        text-blue-400"
                    >
                        ⭐ Featured Project
                    </span>

                    <h2 className="text-4xl font-extrabold">
                        {project.title}
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-gray-400">
                        {project.description}
                    </p>

                    {/* Role */}

                    <div className="mt-8">

                        <h4 className="mb-2 font-semibold text-white">
                            My Role
                        </h4>

                        <p className="text-gray-400">
                            {project.role}
                        </p>

                    </div>

                    {/* Technologies */}

                    <div className="mt-8">

                        <h4 className="mb-3 font-semibold">
                            Technologies
                        </h4>

                        <div className="flex flex-wrap gap-2">

                            {project.technologies.map((tech: string) => (
                                <TechBadge
                                    key={tech}
                                    title={tech}
                                />
                            ))}

                        </div>

                    </div>

                    {/* Buttons */}

                    <div className="mt-10 flex flex-wrap gap-4">

                        {project.links.map(
                            (
                                link: {
                                    title: string;
                                    url: string;
                                    type: "website" | "playstore" | "apk";
                                },
                                index: number
                            ) => {

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
                                                ? "flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-700"
                                                : "flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 transition hover:border-blue-500"
                                        }
                                    >
                                        <Icon />

                                        {link.title}
                                    </a>
                                );
                            }
                        )}

                    </div>

                </div>

            </div>
        </div>
    );
}
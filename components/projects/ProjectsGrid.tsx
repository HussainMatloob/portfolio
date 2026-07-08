import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsGrid() {

    const mobileProjects = projects.filter(
        (project) => !project.featured
    );

    return (
        <div className="mt-36">

            <div className="mb-12">

                <h2 className="text-4xl font-bold">
                    Production-Ready Mobile Applications
                </h2>

                <p className="mt-4 max-w-2xl text-lg text-gray-400">
                    Cross-platform Flutter applications built for startups and businesses,
                    spanning finance, safety, booking, social networking, trading, food delivery,
                    and business management solutions.
                </p>

            </div>

            <div
                className="
                grid
                gap-8
                md:grid-cols-2"
            >

                {mobileProjects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                    />
                ))}

            </div>

        </div>
    );
}
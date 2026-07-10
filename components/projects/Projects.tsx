import { projects } from "@/data/projects";
import FeaturedProject from "./FeaturedProject";
import ProjectsGrid from "./ProjectsGrid";
export default function Projects() {
    const featuredProject = projects.find(
        (project) => project.featured
    );

    return (
        <section
            id="projects"
            className="mx-auto max-w-7xl px-6 py-28"
        >
            <div className="mb-20 text-center">
                <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-500">
                    Portfolio
                </span>

                <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">
                    Featured Project
                </h2>

                <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
                    A production-ready SaaS platform built with Flutter, designed to help snooker clubs manage their business through a modern web application and cross-platform mobile experience.
                </p>

            </div>

            {featuredProject && (
                <FeaturedProject
                    project={featuredProject}
                />
            )}
            <ProjectsGrid />
        </section>


    );
}
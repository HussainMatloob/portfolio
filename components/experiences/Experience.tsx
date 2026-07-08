import ExperienceTimeline from "./ExperienceTimeline";

export default function Experience() {
    return (
        <section
            id="experience"
            className="mx-auto max-w-7xl px-6 py-28"
        >
            <div className="mx-auto max-w-3xl text-center">

                <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-500">
                    Career Journey
                </span>

                <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">
                    Professional Experience
                </h2>

                <p className="mt-6 text-lg leading-8 text-gray-400">
                    My professional journey building production-ready Flutter
                    applications, collaborating with cross-functional teams,
                    and delivering scalable software solutions for startups
                    and businesses.
                </p>

            </div>

            <ExperienceTimeline />
        </section>
    );
}
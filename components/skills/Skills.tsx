import { skills } from "@/data/skills";
import SkillCard from "./SkillCard";

export default function Skills() {
    return (
        <section
            id="skills"
            className="mx-auto max-w-7xl px-6 py-24"
        >
            {/* Heading */}
            <div className="mb-16 text-center">

                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
                    Technical Skills
                </p>

                <h2 className="text-4xl font-extrabold text-white md:text-5xl">
                    Technologies I Work With
                </h2>

                <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
                    I build modern mobile applications, scalable backend services,
                    and business software using industry-standard technologies and
                    best development practices.
                </p>

            </div>

            {/* Skills Grid */}
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

                {skills.map((category) => (
                    <SkillCard
                        key={category.title}
                        category={category}
                    />
                ))}

            </div>

        </section>
    );
}
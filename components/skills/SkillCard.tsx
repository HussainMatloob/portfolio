import SkillBadge from "./SkillBadge";

type Props = {
    category: {
        title: string;
        icon: string;
        items: string[];
    };
};

export default function SkillCard({ category }: Props) {
    return (
        <div
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40"
        >

            <div className="mb-6 flex items-center gap-3">

                <span className="text-3xl">
                    {category.icon}
                </span>

                <h3 className="text-xl font-bold">
                    {category.title}
                </h3>

            </div>

            <div className="flex flex-wrap gap-2">

                {category.items.map((item) => (
                    <SkillBadge
                        key={item}
                        title={item}
                    />
                ))}

            </div>

        </div>
    );
}
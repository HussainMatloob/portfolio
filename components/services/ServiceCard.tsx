import { Service } from "@/data/services";

type Props = {
    service: Service;
};

export default function ServiceCard({
    service,
}: Props) {
    const Icon = service.icon;

    return (
        <div
            className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-8
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-blue-500/40
                hover:shadow-[0_20px_60px_rgba(59,130,246,0.15)]
            "
        >
            <div
                className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-blue-500/10
                    text-blue-500
                "
            >
                <Icon size={28} />
            </div>

            <h3 className="mt-8 text-2xl font-bold">
                {service.title}
            </h3>

            <p className="mt-5 leading-8 text-gray-400">
                {service.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
                {service.technologies.map((tech) => (
                    <span
                        key={tech}
                        className="
                            rounded-full
                            border
                            border-white/10
                            bg-white/5
                            px-3
                            py-1
                            text-sm
                            text-gray-300
                        "
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
}
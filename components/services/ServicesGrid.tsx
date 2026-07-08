import { services } from "@/data/services";
import ServiceCard from "./ServiceCard";

export default function ServicesGrid() {
    return (
        <div
            className="
                mt-20
                grid
                gap-8
                md:grid-cols-2
                xl:grid-cols-3
            "
        >
            {services.map((service) => (
                <ServiceCard
                    key={service.title}
                    service={service}
                />
            ))}
        </div>
    );
}
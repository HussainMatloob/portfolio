import ServicesGrid from "./ServicesGrid";

export default function Services() {
    return (
        <section
            id="services"
            className="mx-auto max-w-7xl px-6 py-28"
        >
            <div className="mx-auto max-w-3xl text-center">

                <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-500">
                    What I Offer
                </span>

                <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">
                    Services
                </h2>

                <p className="mt-6 text-lg leading-8 text-gray-400">
                    I help startups, businesses, and entrepreneurs build
                    scalable mobile applications, Flutter Web solutions,
                    backend systems, and cloud-powered software with modern
                    technologies and production-ready architecture.
                </p>

            </div>

            <ServicesGrid />
        </section>
    );
}
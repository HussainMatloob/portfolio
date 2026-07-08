export type Experience = {
    company: string;
    position: string;
    duration: string;
    description: string;
    achievements: string[];
};

export const experiences: Experience[] = [
    {
        company: "Funtash Technologies",

        position: "Flutter Developer",

        duration: "Mar 2025 – July 2026",

        description:
            "Developing and maintaining scalable Flutter applications with clean architecture, real-time functionality, and production-ready features for business clients.",

        achievements: [
            "Built and maintained production-ready Flutter applications.",
            "Integrated REST APIs and WebSockets for real-time functionality.",
            "Implemented scalable state management using GetX and Provider.",
            "Collaborated with backend teams to deliver clean API integrations.",
            "Improved application performance, responsiveness, and user experience."
        ]
    },

    {
        company: "Techanion Pvt Ltd",

        position: "Flutter Developer",

        duration: "Dec 2023 – Mar 2025",

        description:
            "Worked on commercial Flutter applications for multiple clients, contributing to feature development, API integrations, and production releases.",

        achievements: [
            "Contributed to applications published on Google Play.",
            "Integrated REST APIs and implemented new business features.",
            "Improved UI responsiveness and application performance.",
            "Resolved production bugs and optimized existing codebases.",
            "Collaborated with designers and backend developers."
        ]
    },

    {
        company: "Itsolera Pvt Ltd",

        position: "Flutter Developer Intern",

        duration: "Aug 2023 – Nov 2023",

        description:
            "Started my professional Flutter journey by building responsive interfaces and integrating Firebase services while working with experienced developers.",

        achievements: [
            "Developed responsive Flutter user interfaces.",
            "Integrated Firebase Authentication and Cloud Firestore.",
            "Assisted with REST API integration.",
            "Participated in debugging and testing.",
            "Learned professional software development workflows."
        ]
    }
];
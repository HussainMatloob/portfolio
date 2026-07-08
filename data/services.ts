import {
    FaMoneyBillWave,
} from "react-icons/fa";
import {
    FaMobileAlt,
    FaServer,
    FaDatabase,
    FaPlug,
    FaTools,
    FaCloudUploadAlt,
    FaFire,
} from "react-icons/fa";

export type Service = {
    title: string;
    description: string;
    icon: any;
    technologies: string[];
};

export const services: Service[] = [
    {
        title: "Flutter App Development",

        description:
            "Build high-performance cross-platform mobile and Flutter Web applications with responsive UI, clean architecture, and scalable code.",

        icon: FaMobileAlt,

        technologies: [
            "Flutter",
            "Dart",
            "Android",
            "iOS",
            "Flutter Web",
        ],
    },

    {
        title: "Backend & API Development",

        description:
            "Develop secure backend systems, REST APIs, authentication, and business logic using Laravel, Firebase, and Supabase.",

        icon: FaServer,

        technologies: [
            "Laravel",
            "REST API",
            "Firebase",
            "Supabase",
            "MySQL",
        ],
    },

    {
        title: "Firebase Development",

        description:
            "Build scalable applications using Firebase Authentication, Cloud Firestore, Realtime Database, Cloud Storage, and Firebase Cloud Messaging.",

        icon: FaFire,

        technologies: [
            "Firebase Authentication",
            "Cloud Firestore",
            "Realtime Database",
            "Cloud Storage",
            "Firebase Cloud Messaging (FCM)",
            "Firebase Hosting",
            "Firebase App Check",
        ]
    },
    {
        title: "Supabase Development",

        description:
            "Develop modern applications with Supabase Authentication, PostgreSQL Database, Storage, Edge Functions, and real-time capabilities.",

        icon: FaDatabase,

        technologies: [
            "Supabase Auth",
            "PostgreSQL",
            "Supabase Storage",
            "Edge Functions",
            "Realtime"
        ],
    },

    {
        title: "API Integration",

        description:
            "Integrate third-party APIs including Google Maps, WebSockets, AI services, payment gateways, and external platforms.",

        icon: FaPlug,

        technologies: [
            "REST APIs",
            "WebSockets",
            "Google Maps",
            "AI APIs",
            "Payments",
        ],
    },

    {
        title: "App Maintenance",

        description:
            "Enhance existing applications by fixing bugs, improving performance, refactoring code, and adding new features.",

        icon: FaTools,

        technologies: [
            "Bug Fixes",
            "Optimization",
            "Refactoring",
            "Performance",
            "Maintenance",
        ],
    },
    {
        title: "Google AdMob Integration",

        description:
            "Integrate Google AdMob into Flutter applications, configure monetization, connect Play Console, create ad units, and optimize ad implementation for production apps.",

        icon: FaMoneyBillWave,

        technologies: [
            "Google AdMob",
            "Banner Ads",
            "Interstitial Ads",
            "Rewarded Ads",
            "AdMob SDK",
            "Ad Unit Configuration",
            "Play Console Linking",
            "Production Integration"
        ],
    },

    {
        title: "Deployment & Publishing",

        description:
            "Deploy Flutter applications to Google Play and the Apple App Store, manage release builds, CI/CD pipelines, app signing, and production deployments.",

        icon: FaCloudUploadAlt,

        technologies: [


            "Google Play Console",
            "GitHub Actions CI/CD",
            "Android App Bundles (AAB)",
            "App Signing",
            "Release Management",
            "Xcode",
            "App Store Connect",
            "Bundle Identifier",
            "IPA Archive",
            "App Metadata Setup",
            "Internal Testing",
        ]
    },
];
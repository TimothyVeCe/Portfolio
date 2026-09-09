export const profile = {
    name: "Timothy Vieri Chandra",
    role: "Full-Stack Developer",
    roleSecondary: "Web & Mobile",
    location: "Surabaya, Indonesia",
    coordinates: "-7.2575° S, 112.7521° E",
    email: "timothyvieric@gmail.com",
    phone: "6281219915554",
    linkedin: "https://www.linkedin.com/in/timothy-vieri-chandra",
    github: "https://github.com/TimothyVeCe",
    photo: "/Profile.jpg",
    resume: "/CV.pdf",
    bio: "Informatics graduate from Petra Christian University with hands-on experience building web and mobile products end to end — from database schema to the pixels users click on. Comfortable moving between Laravel, Next.js, and Flutter, and most at home on projects that mix real data with a map, a database, or both. Currently interning as a Website Developer while wrapping up a GIS-based thesis project.",
    tagline: "I build the systems behind the screen — and the screen itself.",
};

export const skills = [
    {
        category: "Languages",
        items: ["JavaScript", "TypeScript", "PHP", "Python", "Java", "C++", "HTML", "CSS"],
    },
    {
        category: "Frameworks & Libraries",
        items: ["Next.js", "React", "Laravel", "Flutter", "Tailwind CSS"],
    },
    {
        category: "Data & Infra",
        items: ["MySQL", "Firebase", "Supabase", "Mapbox GL JS"],
    },
];

export const experience = [
    {
        type: "work",
        org: "PT Pompa Dex Indoguna",
        role: "Website Developer Intern",
        period: "Jul 2025 — Jul 2026",
        points: [
            "Maintain and extend both the customer-facing and admin websites in production.",
            "Built Sparkling Kids, a new project, from wireframe through to a working system.",
            "Sharpened problem-solving and collaboration skills through real-world software delivery.",
        ],
    },
    {
        type: "org",
        org: "HIMAINFRA 24/25",
        role: "Vice Head of Internal Development",
        period: "Jul 2024 — Jul 2025",
        points: [
            "Led and guided department members supporting HIMAINFRA and the wider Informatics student community at Petra Christian University.",
            "Coordinated internal development initiatives and member engagement activities.",
        ],
    },
    {
        type: "org",
        org: "BSLT — ICC 2024",
        role: "Mentor and Speaker",
        period: "Nov 2024",
        points: [
            "Mentored students on becoming effective future committee members.",
            "Shared organizational insight and practical experience to support leadership readiness.",
        ],
    },
    {
        type: "org",
        org: "IRGL 2024",
        role: "Vice Coordinator of Sponsorship Division",
        period: "Mar 2024 - Nov 2024",
        points: [
            "Supported and helped lead the sponsorship team in securing funding to help cover the event's expenses."
        ],
    },
    {
        type: "org",
        org: "HIMAINFRA 23/24",
        role: "Member, Creative Information",
        period: "Jul 2023 — Jul 2024",
        points: [
            "Contributed to HIMAINFRA's website: homepage, question bank, student aspirations, organization profile, and internal recruitment modules.",
        ],
    },
];

export const education = [
    {
        school: "Petra Christian University",
        degree: "Bachelor's Degree in Informatics Engineering",
        period: "Sep 2022 — Sep 2026",
        detail: "GPA 3.48 / 4.00",
    },
    {
        school: "Petra 2 Christian Senior High School",
        degree: "High School Diploma in Science",
        period: "Jul 2019 — Jul 2022",
        detail: "Surabaya, East Java",
    },
    {
        school: "Mawar Sharon Christian Junior High School",
        degree: "Junior High School Diploma",
        period: "Jun 2016 — Jun 2019",
        detail: "Surabaya, East Java",
    },
    {
        school: "Mawar Sharon Christian Elementary School",
        degree: "Elementary School Diploma",
        period: "Jun 2010 — Jun 2016",
        detail: "Surabaya, East Java",
    },
];

export type Project = {
    id: string;
    name: string;
    type: string;
    role: string;
    tools: string[];
    summary: string;
    myRole: string;
    impact: string;
    learned: string;
    github?: string;
    featured?: boolean;
};

export const projects: Project[] = [
    {
        id: "gis-thesis",
        name: "GIS Website — Pump House Monitoring",
        type: "Individual Thesis Project",
        role: "Full-Stack Developer",
        tools: ["Laravel", "Next.js", "Mapbox GL JS", "MySQL", "Tailwind CSS"],
        summary:
            "Final thesis project: a GIS platform for maintaining and monitoring pump houses across the city, built solo end to end.",
        myRole:
            "Built the entire stack alone — Laravel for the backend, Next.js for the frontend, with Mapbox and OpenStreetMap powering the interactive map layer.",
        impact:
            "Well received by users, who asked for more data to be surfaced next. Some lecturers found the domain unfamiliar, which shaped how the project was presented.",
        learned:
            "Deepened understanding of Laravel and Next.js architecture and what it actually takes to ship a GIS product — including working around limited client data.",
        featured: true,
    },
    {
        id: "himainfra",
        name: "Website HIMAINFRA 2023/2024",
        type: "Group Project — Organizational Assignment",
        role: "Front-end & Backend Developer (Login & Homepage)",
        tools: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP"],
        summary:
            "The information hub for Informatics students at Petra Christian University to follow HIMAINFRA activities and learn about the department.",
        myRole:
            "Built the homepage and login page, including backend logic, as one of five developers guided by team leads.",
        impact: "Improved student access to updates and strengthened the organization's visibility.",
        learned: "Sharpened web development, collaboration, and time management fundamentals.",
    },
    {
        id: "mentora",
        name: "Mentora — Tutoring Service Website",
        type: "Group Project — University Assignment",
        role: "Frontend Developer",
        tools: ["Laravel", "Tailwind CSS"],
        summary:
            "A platform concept connecting students with private tutors, built to explore a business idea through web development.",
        myRole:
            "Designed and built the frontend — search bar, tutor cards, and course display pages — using Tailwind CSS.",
        impact: "Sparked real interest among peers and mentors in developing the concept further.",
        learned: "Hands-on Laravel and Tailwind experience, plus teamwork and communication in a collaborative setting.",
        github: "https://github.com/IvanSun00/mentora",
    },
    {
        id: "event-booking",
        name: "Event Booking Platform",
        type: "Group Project — University Assignment",
        role: "Event Detail & Booking Developer (Full-Stack)",
        tools: ["Laravel", "Tailwind CSS", "Breeze"],
        summary: "A functional event booking website built for students as a university assignment.",
        myRole:
            "Owned both frontend and backend for the event detail and booking pages, wiring interactive components to the database.",
        impact: "Presented to the class with mostly positive feedback and a good overall score.",
        learned:
            "Deeper grasp of Laravel's structure and Blade with Breeze, plus coordinating around teammates' dependent tasks.",
        github: "https://github.com/pengwen101/petra-for-you",
    },
    {
        id: "donation-app",
        name: "Donation App for an Orphanage",
        type: "Group Project — Community-Based Assignment",
        role: "Frontend Developer (Flutter)",
        tools: ["Flutter", "Laravel"],
        summary:
            "A mobile platform built for an orphanage supporting children with special needs, for donations and communication.",
        myRole: "Developed the profile and contact sections in Flutter, connected to a Laravel backend.",
        impact:
            "Tested internally with positive feedback; balanced client requests against legal and ethical constraints as a team.",
        learned: "Strengthened Flutter development and how to navigate real-world project limitations.",
        github: "https://github.com/Messes72/MANPROTI/tree/main",
    },
    {
        id: "laravel-blog",
        name: "Laravel Blog Platform",
        type: "Personal Project",
        role: "Full-Stack Developer",
        tools: ["Laravel", "Blade", "MySQL", "HTML", "CSS"],
        summary:
            "A self-directed project built over a summer break to learn Laravel: a blog with category-based post filtering.",
        myRole: "Built the full platform from scratch, including dynamic database queries for filtering posts by category.",
        impact: "Turned self-study into a working product and a concrete understanding of MVC in practice.",
        learned: "MVC structure, routing, and database relationships — plus self-learning discipline and debugging.",
    },
];
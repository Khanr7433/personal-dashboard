export const data = {
  profile: {
    basics: {
      name: "Rashid Khan",
      title: "Full Stack Developer",
      summary:
        "Passionate developer with expertise in modern web technologies and a focus on creating efficient, scalable applications.",
      location: {
        city: "Pune",
        country: "India",
        available_for_relocation: true,
      },
      contact: {
        email: "khan.rashid.743@gmail.com",
        phone: "+91 7066568147",
      },
    },
    social: {
      github: "https://github.com/Khanr7433",
      linkedin: "https://www.linkedin.com/in/rashid-khan-820628266",
    },
    interests: [
      "Web Development",
      "UI/UX Design",
      "Open Source",
      "Machine Learning",
      "Artificial Intelligence",
      "Data Science",
    ],
    availability: {
      status: "Open to opportunities",
      preferred_work_type: ["Remote", "Hybrid"],
    },
  },
  education: [
    {
      id: 1,
      degree: "Bachelor of computer applications",
      field: "Computer applications",
      institution: "Abeda Inamdar Senior College, Camp",
      location: "Pune, Maharashtra, India",
      startYear: "2022",
      endYear: "2025",
      cgpa: "9.11",
      percentage: "85.9",
      grade: "A+",
      relevantCourses: [
        "Data Structures and Algorithms",
        "Web Development",
        "Database Management",
        "Software Engineering",
      ],
    },
    {
      id: 2,
      degree: "Diploma in computer applications",
      field: "Computer applications",
      institution: "Deccan Muslim Institute, Camp",
      location: "Pune, Maharashtra, India",
      startYear: "2021",
      endYear: "2022",
      percentage: "",
      grade: "",
      relevantCourses: [
        "Basic Computer",
        "Basic Programming ",
        "Computer Hardware",
        "Computer Networking",
        "Computer Graphics",
        "Microsoft Office",
        "Accounting",
      ],
    },
    {
      id: 3,
      degree: "Higher Secondary Certificate (12th)",
      field: "Science",
      institution: "Aki's poona college of arts, science and commerce, Camp",
      location: "Pune, Maharashtra, India",
      startYear: "2020",
      endYear: "2021",
      percentage: "85.5",
      grade: "A",
      relevantCourses: [
        "Urdu",
        "English",
        "Mathematics",
        "Physics",
        "Chemistry",
        "Biology",
      ],
    },
    {
      id: 4,
      degree: "Secondary School Certificate (10th)",
      field: "General",
      institution: "Dr. W. R. Khan High School, Hadapsar",
      location: "Pune, Maharashtra, India",
      startYear: "2018",
      endYear: "2019",
      percentage: "81.2",
      grade: "A",
      relevantCourses: [
        "Urdu",
        "English",
        "Hindi",
        "Marathi",
        "Arabic",
        "Mathematics",
        "Science",
        "Social Science",
      ],
    },
  ],
  projects: [
    {
      id: "1",
      title: "Personal Dashboard",
      description:
        "A modern dashboard built with Next.js and Tailwind CSS to showcase personal portfolio and track various metrics",
      technologies: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
      role: "Full Stack Developer",
      duration: {
        start: "2024-01",
        end: "Present",
      },
      highlights: [
        "Implemented responsive design",
        "Created reusable components",
        "Integrated with various APIs",
      ],
      github: "https://github.com/username/personal-dashboard",
      liveDemo: "https://dashboard.example.com",
      thumbnail: "/images/projects/dashboard-thumb.png",
      category: "Web Development",
    },
  ],
  skills: {
    technicalSkills: {
      programming: [
        {
          category: "Frontend",
          skills: [
            {
              name: "JavaScript",
              proficiency: "Advanced",
              yearsOfExperience: 3,
            },
            {
              name: "React",
              proficiency: "Advanced",
              yearsOfExperience: 2,
            },
          ],
        },
        {
          category: "Backend",
          skills: [
            {
              name: "Node.js",
              proficiency: "Intermediate",
              yearsOfExperience: 2,
            },
          ],
        },
      ],
      databases: [
        {
          name: "MongoDB",
          proficiency: "Intermediate",
          yearsOfExperience: 2,
        },
      ],
    },
    softSkills: [
      "Team Leadership",
      "Project Management",
      "Problem Solving",
      "Communication",
    ],
    languages: [
      {
        name: "English",
        proficiency: "Native",
      },
    ],
  },
  tools: {
    development: {
      ide: [
        {
          name: "Visual Studio Code",
          proficiency: "Advanced",
          favorite: true,
        },
      ],
      versionControl: [
        {
          name: "Git",
          proficiency: "Advanced",
        },
        {
          name: "GitHub",
          proficiency: "Advanced",
        },
      ],
      buildTools: [
        {
          name: "Webpack",
          proficiency: "Intermediate",
        },
        {
          name: "npm",
          proficiency: "Advanced",
        },
      ],
    },
    design: {
      ui: [
        {
          name: "Figma",
          proficiency: "Intermediate",
        },
      ],
    },
    deployment: {
      platforms: [
        {
          name: "Vercel",
          proficiency: "Advanced",
        },
        {
          name: "Netlify",
          proficiency: "Intermediate",
        },
      ],
    },
  },
};

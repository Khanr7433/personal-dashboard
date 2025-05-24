"use client";
import { profile } from "../data/profile";
import { education } from "../data/education";
import { projects } from "../data/projects";
import { skills } from "../data/skills";
import { tools } from "../data/tools";

export default function Home() {
  return (
    <>
      <section
        id="about"
        className="min-h-screen flex items-center justify-center border border-t-white"
      >
        <div className="max-w-5xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="space-y-8">
            {/* Basic Info */}
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl font-bold text-blue-500">
                {profile.basics.name}
              </h1>
              <h3 className="text-2xl text-gray-300">{profile.basics.title}</h3>
              <p className="text-lg text-gray-400 max-w-2xl">
                {profile.basics.summary}
              </p>
            </div>

            {/* Location and Contact */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-4 text-blue-400">
                  Location
                </h4>
                <p className="text-gray-300">
                  {profile.basics.location.city},{" "}
                  {profile.basics.location.country}
                </p>
                <p className="text-gray-400 mt-2">
                  {profile.basics.location.available_for_relocation
                    ? "Available for relocation"
                    : "Not available for relocation"}
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-4 text-blue-400">
                  Contact
                </h4>
                <p className="text-gray-300">{profile.basics.contact.email}</p>
                <p className="text-gray-300">{profile.basics.contact.phone}</p>
              </div>
            </div>

            {/* Interests */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4 text-blue-400">
                Interests
              </h4>
              <div className="flex flex-wrap gap-3">
                {profile.interests.map((interest, index) => (
                  <span
                    key={index}
                    className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4 text-blue-400">
                Availability
              </h4>
              <p className="text-gray-300">{profile.availability.status}</p>
              <div className="flex gap-2 mt-2">
                {profile.availability.preferred_work_type.map((type, index) => (
                  <span
                    key={index}
                    className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="education"
        className="min-h-screen flex items-center justify-center border border-t-white"
      >
        <div className="max-w-5xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <div className="space-y-6">
            {education.map((edu) => (
              <div
                key={edu.id}
                className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold text-blue-400">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-gray-300">{edu.field}</p>
                    <p className="text-gray-400">{edu.institution}</p>
                    <p className="text-gray-500">{edu.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400">
                      {edu.startYear} - {edu.endYear}
                    </p>
                    {edu.percentage && (
                      <p className="text-green-400 mt-2">
                        Percentage: {edu.percentage}%
                      </p>
                    )}
                    {edu.cgpa && (
                      <p className="text-green-400">CGPA: {edu.cgpa}</p>
                    )}
                    {edu.grade && (
                      <p className="text-green-400">Grade: {edu.grade}</p>
                    )}
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="text-lg font-medium text-blue-400 mb-2">
                    Relevant Courses
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.relevantCourses.map((course, index) => (
                      <span
                        key={index}
                        className="bg-blue-500/10 text-blue-300 px-3 py-1 rounded-full text-sm"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="min-h-screen flex items-center justify-center border border-t-white"
      >
        <div className="max-w-5xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid grid-cols-1 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors"
              >
                <div className="p-6">
                  <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                    <div className="space-y-3 flex-1">
                      <div className="flex items-center gap-3">
                        <h3 className="text-2xl font-semibold text-blue-400">
                          {project.title}
                        </h3>
                        <span className="text-gray-400 text-sm px-3 py-1 bg-gray-700 rounded-full">
                          {project.category}
                        </span>
                      </div>
                      <p className="text-gray-300">{project.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="bg-blue-500/10 text-blue-300 px-3 py-1 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      <p className="text-gray-400">
                        {project.duration.start} - {project.duration.end}
                      </p>
                      <p className="text-gray-300">{project.role}</p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-lg font-medium text-blue-400 mb-3">
                      Key Highlights
                    </h4>
                    <ul className="list-disc list-inside space-y-2">
                      {project.highlights.map((highlight, index) => (
                        <li key={index} className="text-gray-300">
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        View Code
                      </a>
                    )}
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="min-h-screen flex items-center justify-center border border-t-white"
      >
        <div className="max-w-5xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>

          {/* Technical Skills */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-blue-400 mb-6">
                Technical Skills
              </h3>

              {/* Programming Skills */}
              <div className="space-y-6">
                {skills.technicalSkills.programming.map((category, idx) => (
                  <div key={idx} className="bg-gray-800 rounded-lg p-6">
                    <h4 className="text-xl font-medium text-blue-300 mb-4">
                      {category.category}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.skills.map((skill, skillIdx) => (
                        <div
                          key={skillIdx}
                          className="bg-gray-700 rounded-lg p-4"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <span className="text-gray-200 font-medium">
                              {skill.name}
                            </span>
                            <span
                              className={`text-sm px-2 py-1 rounded ${
                                skill.proficiency === "Advanced"
                                  ? "bg-green-500/20 text-green-300"
                                  : skill.proficiency === "Intermediate"
                                    ? "bg-blue-500/20 text-blue-300"
                                    : "bg-gray-500/20 text-gray-300"
                              }`}
                            >
                              {skill.proficiency}
                            </span>
                          </div>
                          <p className="text-gray-400 text-sm">
                            {skill.yearsOfExperience}{" "}
                            {skill.yearsOfExperience === 1 ? "year" : "years"}{" "}
                            of experience
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Databases */}
              <div className="mt-6 bg-gray-800 rounded-lg p-6">
                <h4 className="text-xl font-medium text-blue-300 mb-4">
                  Databases
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {skills.technicalSkills.databases.map((db, idx) => (
                    <div key={idx} className="bg-gray-700 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-gray-200 font-medium">
                          {db.name}
                        </span>
                        <span
                          className={`text-sm px-2 py-1 rounded ${
                            db.proficiency === "Advanced"
                              ? "bg-green-500/20 text-green-300"
                              : db.proficiency === "Intermediate"
                                ? "bg-blue-500/20 text-blue-300"
                                : "bg-gray-500/20 text-gray-300"
                          }`}
                        >
                          {db.proficiency}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm">
                        {db.yearsOfExperience}{" "}
                        {db.yearsOfExperience === 1 ? "year" : "years"} of
                        experience
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Operating Systems */}
              <div className="mt-6 bg-gray-800 rounded-lg p-6">
                <h4 className="text-xl font-medium text-blue-300 mb-4">
                  Operating Systems
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {skills.technicalSkills.operatingSystems.map((os, idx) => (
                    <div key={idx} className="bg-gray-700 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-gray-200 font-medium">
                          {os.name}
                        </span>
                        <span
                          className={`text-sm px-2 py-1 rounded ${
                            os.proficiency === "Advanced"
                              ? "bg-green-500/20 text-green-300"
                              : os.proficiency === "Intermediate"
                                ? "bg-blue-500/20 text-blue-300"
                                : "bg-gray-500/20 text-gray-300"
                          }`}
                        >
                          {os.proficiency}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm">
                        {os.yearsOfExperience}{" "}
                        {os.yearsOfExperience === 1 ? "year" : "years"} of
                        experience
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-2xl font-semibold text-blue-400 mb-6">
                Soft Skills
              </h3>
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="flex flex-wrap gap-3">
                  {skills.softSkills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-2xl font-semibold text-blue-400 mb-6">
                Languages
              </h3>
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {skills.languages.map((language, idx) => (
                    <div key={idx} className="bg-gray-700 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-200 font-medium">
                          {language.name}
                        </span>
                        <span className="text-sm px-2 py-1 rounded bg-teal-500/20 text-teal-300">
                          {language.proficiency}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="tools"
        className="min-h-screen flex items-center justify-center border border-t-white"
      >
        <div className="max-w-5xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-8">Tools & Technologies</h2>

          <div className="space-y-8">
            {/* Development Tools */}
            <div>
              <h3 className="text-2xl font-semibold text-blue-400 mb-6">
                Development
              </h3>

              {/* IDEs */}
              <div className="grid gap-6">
                <div className="bg-gray-800 rounded-lg p-6">
                  <h4 className="text-xl font-medium text-blue-300 mb-4">
                    IDEs & Editors
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {tools.development.ide.map((tool, idx) => (
                      <div
                        key={idx}
                        className="bg-gray-700 rounded-lg p-4 relative"
                      >
                        {tool.favorite && (
                          <span className="absolute -top-2 -right-2 text-yellow-400">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                        )}
                        <div className="flex justify-between items-start">
                          <span className="text-gray-200 font-medium">
                            {tool.name}
                          </span>
                          <span
                            className={`text-sm px-2 py-1 rounded ${
                              tool.proficiency === "Advanced"
                                ? "bg-green-500/20 text-green-300"
                                : tool.proficiency === "Intermediate"
                                  ? "bg-blue-500/20 text-blue-300"
                                  : "bg-gray-500/20 text-gray-300"
                            }`}
                          >
                            {tool.proficiency}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Version Control */}
                <div className="bg-gray-800 rounded-lg p-6">
                  <h4 className="text-xl font-medium text-blue-300 mb-4">
                    Version Control
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {tools.development.versionControl.map((tool, idx) => (
                      <div key={idx} className="bg-gray-700 rounded-lg p-4">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-200 font-medium">
                            {tool.name}
                          </span>
                          <span
                            className={`text-sm px-2 py-1 rounded ${
                              tool.proficiency === "Advanced"
                                ? "bg-green-500/20 text-green-300"
                                : "bg-blue-500/20 text-blue-300"
                            }`}
                          >
                            {tool.proficiency}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Build Tools */}
                <div className="bg-gray-800 rounded-lg p-6">
                  <h4 className="text-xl font-medium text-blue-300 mb-4">
                    Build & Development Tools
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {tools.development.buildTools.map((tool, idx) => (
                      <div key={idx} className="bg-gray-700 rounded-lg p-4">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-200 font-medium">
                            {tool.name}
                          </span>
                          <span
                            className={`text-sm px-2 py-1 rounded ${
                              tool.proficiency === "Advanced"
                                ? "bg-green-500/20 text-green-300"
                                : "bg-blue-500/20 text-blue-300"
                            }`}
                          >
                            {tool.proficiency}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* API Tools */}
                <div className="bg-gray-800 rounded-lg p-6">
                  <h4 className="text-xl font-medium text-blue-300 mb-4">
                    API Tools
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {tools.development.apiTools.map((tool, idx) => (
                      <div key={idx} className="bg-gray-700 rounded-lg p-4">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-200 font-medium">
                            {tool.name}
                          </span>
                          <span
                            className={`text-sm px-2 py-1 rounded ${
                              tool.proficiency === "Advanced"
                                ? "bg-green-500/20 text-green-300"
                                : "bg-blue-500/20 text-blue-300"
                            }`}
                          >
                            {tool.proficiency}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Design Tools */}
            <div>
              <h3 className="text-2xl font-semibold text-blue-400 mb-6">
                Design
              </h3>
              <div className="bg-gray-800 rounded-lg p-6">
                <h4 className="text-xl font-medium text-blue-300 mb-4">
                  UI/UX Tools
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {tools.design.ui.map((tool, idx) => (
                    <div key={idx} className="bg-gray-700 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-200 font-medium">
                          {tool.name}
                        </span>
                        <span
                          className={`text-sm px-2 py-1 rounded ${
                            tool.proficiency === "Advanced"
                              ? "bg-green-500/20 text-green-300"
                              : "bg-blue-500/20 text-blue-300"
                          }`}
                        >
                          {tool.proficiency}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Deployment */}
            <div>
              <h3 className="text-2xl font-semibold text-blue-400 mb-6">
                Deployment
              </h3>
              <div className="bg-gray-800 rounded-lg p-6">
                <h4 className="text-xl font-medium text-blue-300 mb-4">
                  Platforms
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {tools.deployment.platforms.map((tool, idx) => (
                    <div key={idx} className="bg-gray-700 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-200 font-medium">
                          {tool.name}
                        </span>
                        <span
                          className={`text-sm px-2 py-1 rounded ${
                            tool.proficiency === "Advanced"
                              ? "bg-green-500/20 text-green-300"
                              : "bg-blue-500/20 text-blue-300"
                          }`}
                        >
                          {tool.proficiency}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Productivity */}
            <div>
              <h3 className="text-2xl font-semibold text-blue-400 mb-6">
                Productivity
              </h3>
              <div className="bg-gray-800 rounded-lg p-6">
                <h4 className="text-xl font-medium text-blue-300 mb-4">
                  Office Tools
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {tools.productivity.office.map((tool, idx) => (
                    <div key={idx} className="bg-gray-700 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-200 font-medium">
                          {tool.name}
                        </span>
                        <span
                          className={`text-sm px-2 py-1 rounded ${
                            tool.proficiency === "Advanced"
                              ? "bg-green-500/20 text-green-300"
                              : "bg-blue-500/20 text-blue-300"
                          }`}
                        >
                          {tool.proficiency}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

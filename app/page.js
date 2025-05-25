"use client";

import { profile } from "../data/profile";
import { education } from "../data/education";
import { projects } from "../data/projects";
import { skills } from "../data/skills";
import { tools } from "../data/tools";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <main className="bg-black">
      <section
        id="about"
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-24"
      >
        <div className="absolute inset-0 bg-gray-900/50" />
        <div className="max-w-5xl mx-auto px-4 py-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex flex-col gap-4">
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                {profile.basics.name}
              </h1>
              <h3 className="text-2xl md:text-3xl text-primary-light font-light">
                {profile.basics.title}
              </h3>
              <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
                {profile.basics.summary}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="card bg-gray-800/50 backdrop-blur-sm border border-gray-700/50"
              >
                <h4 className="text-xl font-semibold mb-4 text-primary">
                  Contact
                </h4>
                <p className="text-gray-300 hover:text-primary transition-colors">
                  <a href={`mailto:${profile.basics.contact.email}`}>
                    {profile.basics.contact.email}
                  </a>
                </p>
                <p className="text-gray-300 mt-2">
                  <a href={`tel:${profile.basics.contact.phone}`}>
                    {profile.basics.contact.phone}
                  </a>
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="card bg-gray-800/50 backdrop-blur-sm border border-gray-700/50"
              >
                <h4 className="text-xl font-semibold mb-4 text-primary">
                  Location
                </h4>
                <p className="text-gray-300">
                  {profile.basics.location.city},{" "}
                  {profile.basics.location.state},{" "}
                  {profile.basics.location.country},{" "}
                  {profile.basics.location.postalCode}
                </p>
              </motion.div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="card bg-gray-800/50 backdrop-blur-sm border border-gray-700/50"
            >
              <h4 className="text-xl font-semibold mb-4 text-primary">
                Interests
              </h4>
              <div className="flex flex-wrap gap-3">
                {profile.interests.map((interest, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full bg-primary/10 text-primary-light border border-primary/20 hover:bg-primary/20 transition-colors"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="card bg-gray-800/50 backdrop-blur-sm border border-gray-700/50"
            >
              <h4 className="text-xl font-semibold mb-4 text-primary">
                Availability
              </h4>
              <p className="text-gray-300">{profile.availability.status}</p>
              <div className="flex flex-wrap gap-3 mt-4">
                {profile.availability.preferred_work_type.map((type, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full bg-success/10 text-success border border-success/20 hover:bg-success/20 transition-colors"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section
        id="education"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gray-900/50" />
        <div className="max-w-5xl mx-auto px-4 py-12 relative">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-12 text-white"
          >
            Education
          </motion.h2>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="card bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-primary/50 transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
                    <div className="space-y-3">
                      <h3 className="text-2xl font-semibold text-primary">
                        {edu.degree}
                      </h3>
                      <p className="text-xl text-gray-300">{edu.field}</p>
                      <p className="text-gray-400 font-medium">
                        {edu.institution}
                      </p>
                      <p className="text-gray-500">{edu.location}</p>
                    </div>
                    <div className="text-right space-y-2">
                      <p className="text-gray-400 font-medium">
                        {edu.startYear} - {edu.endYear}
                      </p>
                      {edu.percentage && (
                        <p className="text-success flex items-center justify-end gap-2">
                          <span className="w-2 h-2 bg-success rounded-full" />
                          Percentage: {edu.percentage}%
                        </p>
                      )}
                      {edu.cgpa && (
                        <p className="text-success flex items-center justify-end gap-2">
                          <span className="w-2 h-2 bg-success rounded-full" />
                          CGPA: {edu.cgpa}
                        </p>
                      )}
                      {edu.grade && (
                        <p className="text-success flex items-center justify-end gap-2">
                          <span className="w-2 h-2 bg-success rounded-full" />
                          Grade: {edu.grade}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-lg font-medium text-primary mb-3">
                      Relevant Courses
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.relevantCourses.map((course, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 rounded-full text-sm bg-primary/10 text-primary-light border border-primary/20 hover:bg-primary/20 transition-colors"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gray-900/50" />
        <div className="max-w-5xl mx-auto px-4 py-12 relative">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-12 text-white"
          >
            Projects
          </motion.h2>

          <div className="grid grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="card bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-primary/50 transition-colors"
                >
                  <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                    <div className="space-y-4 flex-1">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-2xl font-semibold text-primary">
                          {project.title}
                        </h3>
                        <span className="px-3 py-1 rounded-full text-sm bg-gray-700/50 text-gray-300 border border-gray-600">
                          {project.category}
                        </span>
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 rounded-full text-sm bg-primary/10 text-primary-light border border-primary/20 hover:bg-primary/20 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-3">
                      <p className="text-gray-400 font-medium">
                        {project.duration.start} - {project.duration.end}
                      </p>
                      <p className="text-gray-300 font-medium">
                        {project.role}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-lg font-medium text-primary mb-4">
                      Key Highlights
                    </h4>
                    <ul className="space-y-3">
                      {project.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-gray-300 group"
                        >
                          <span className="w-2 h-2 mt-2 rounded-full bg-white transition-colors opacity-70" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-700/50 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors border border-gray-600 hover:border-gray-500"
                      >
                        <FaGithub className="w-5 h-5" />
                        View Code
                      </a>
                    )}
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary-light hover:bg-primary/20 transition-colors border border-primary/20 hover:border-primary/30"
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
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gray-900/50" />
        <div className="max-w-5xl mx-auto px-4 py-12 relative">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-12 text-white"
          >
            Skills
          </motion.h2>

          <div className="space-y-12">
            {/* Technical Skills */}
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-semibold text-primary mb-8"
              >
                Technical Skills
              </motion.h3>

              <div className="space-y-8">
                {skills.technicalSkills.programming.map((category, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="card bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-primary/50 transition-colors"
                    >
                      <h4 className="text-xl font-medium text-primary-light mb-6">
                        {category.category}
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {category.skills.map((skill, skillIdx) => (
                          <div
                            key={skillIdx}
                            className="bg-gray-700/50 backdrop-blur-sm rounded-lg p-4 border border-gray-600/50 hover:border-primary/30 transition-colors"
                          >
                            <div className="flex justify-between items-center mb-3">
                              <div className="flex flex-col">
                                <span className="text-gray-200 font-medium">
                                  {skill.name}
                                </span>
                                <span className="text-gray-400 text-sm">
                                  {skill.yearsOfExperience}{" "}
                                  {skill.yearsOfExperience === 1
                                    ? "year"
                                    : "years"}
                                </span>
                              </div>
                              <span
                                className={`text-sm px-3 py-1 rounded-full ${
                                  skill.proficiency === "Advanced"
                                    ? "bg-success text-success border border-success"
                                    : skill.proficiency === "Intermediate"
                                      ? "bg-primary text-primary-light border border-primary"
                                      : "bg-primary text-primary-light border border-primary"
                                }`}
                              >
                                {skill.proficiency}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mt-8"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="card bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-primary/50 transition-colors"
                >
                  <h4 className="text-xl font-medium text-primary-light mb-6">
                    Databases
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {skills.technicalSkills.databases.map((db, idx) => (
                      <div
                        key={idx}
                        className="bg-gray-700/50 backdrop-blur-sm rounded-lg p-4 border border-gray-600/50 hover:border-primary/30 transition-colors"
                      >
                        <div className="flex justify-between items-center mb-3">
                          <div className="flex flex-col">
                            <span className="text-gray-200 font-medium">
                              {db.name}
                            </span>
                            <span className="text-gray-400 text-sm">
                              {db.yearsOfExperience}{" "}
                              {db.yearsOfExperience === 1 ? "year" : "years"}
                            </span>
                          </div>
                          <span
                            className={`text-sm px-3 py-1 rounded-full ${
                              db.proficiency === "Advanced"
                                ? "bg-success/10 text-success border border-success/20"
                                : "bg-primary/10 text-primary-light border border-primary/20"
                            }`}
                          >
                            {db.proficiency}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mt-8"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="card bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-primary/50 transition-colors"
                >
                  <h4 className="text-xl font-medium text-primary-light mb-6">
                    Operating Systems
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {skills.technicalSkills.operatingSystems.map((os, idx) => (
                      <div
                        key={idx}
                        className="bg-gray-700/50 backdrop-blur-sm rounded-lg p-4 border border-gray-600/50 hover:border-primary/30 transition-colors"
                      >
                        <div className="flex justify-between items-center mb-3">
                          <div className="flex flex-col">
                            <span className="text-gray-200 font-medium">
                              {os.name}
                            </span>
                            <span className="text-gray-400 text-sm">
                              {os.yearsOfExperience}{" "}
                              {os.yearsOfExperience === 1 ? "year" : "years"}
                            </span>
                          </div>
                          <span
                            className={`text-sm px-3 py-1 rounded-full ${
                              os.proficiency === "Advanced"
                                ? "bg-success/10 text-success border border-success/20"
                                : os.proficiency === "Intermediate"
                                  ? "bg-primary/10 text-primary-light border border-primary/20"
                                  : "bg-primary/10 text-primary-light border border-primary/20"
                            }`}
                          >
                            {os.proficiency}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>

            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-semibold text-primary mb-8"
              >
                Soft Skills
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="card bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-primary/50 transition-colors"
                >
                  <div className="flex flex-wrap gap-3">
                    {skills.softSkills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 rounded-full bg-primary/10 text-primary-light border border-primary/20 hover:bg-primary/20 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>

            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-semibold text-primary mb-8"
              >
                Languages
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="card bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-primary/50 transition-colors"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {skills.languages.map((language, idx) => (
                      <div
                        key={idx}
                        className="bg-gray-700/50 backdrop-blur-sm rounded-lg p-4 border border-gray-600/50 hover:border-primary/30 transition-colors group"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-gray-200 font-medium group-hover:text-primary-light transition-colors">
                            {language.name}
                          </span>
                          <span className="text-sm px-3 py-1 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/20 group-hover:bg-teal-500/20 transition-colors">
                            {language.proficiency}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="tools"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gray-900/50" />
        <div className="max-w-5xl mx-auto px-4 py-12 relative">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-12 text-white"
          >
            Tools & Technologies
          </motion.h2>

          <div className="space-y-12">
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-semibold text-primary mb-8"
              >
                Development
              </motion.h3>

              <div className="grid gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="card bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-primary/50 transition-colors"
                  >
                    <h4 className="text-xl font-medium text-primary-light mb-6">
                      IDEs & Editors
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {tools.development.ide.map((tool, idx) => (
                        <div
                          key={idx}
                          className="bg-gray-700/50 backdrop-blur-sm rounded-lg p-4 border border-gray-600/50 hover:border-primary/30 transition-colors relative group"
                        >
                          {tool.favorite && (
                            <span className="absolute -top-2 -right-2 text-yellow-400 transform group-hover:scale-110 transition-transform">
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
                            <span className="text-gray-200 font-medium group-hover:text-primary-light transition-colors">
                              {tool.name}
                            </span>
                            <span
                              className={`text-sm px-3 py-1 rounded-full ${
                                tool.proficiency === "Advanced"
                                  ? "bg-success/10 text-success border border-success/20"
                                  : "bg-primary/10 text-primary-light border border-primary/20"
                              }`}
                            >
                              {tool.proficiency}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="card bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-primary/50 transition-colors"
                  >
                    <h4 className="text-xl font-medium text-primary-light mb-6">
                      Version Control
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {tools.development.versionControl.map((tool, idx) => (
                        <div
                          key={idx}
                          className="bg-gray-700/50 backdrop-blur-sm rounded-lg p-4 border border-gray-600/50 hover:border-primary/30 transition-colors group"
                        >
                          <div className="flex justify-between items-center">
                            <span className="text-gray-200 font-medium group-hover:text-primary-light transition-colors">
                              {tool.name}
                            </span>
                            <span
                              className={`text-sm px-3 py-1 rounded-full ${
                                tool.proficiency === "Advanced"
                                  ? "bg-success/10 text-success border border-success/20"
                                  : "bg-primary/10 text-primary-light border border-primary/20"
                              }`}
                            >
                              {tool.proficiency}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="card bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-primary/50 transition-colors"
                  >
                    <h4 className="text-xl font-medium text-primary-light mb-6">
                      API Tools
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {tools.development.apiTools.map((tool, idx) => (
                        <div
                          key={idx}
                          className="bg-gray-700/50 backdrop-blur-sm rounded-lg p-4 border border-gray-600/50 hover:border-primary/30 transition-colors group"
                        >
                          <div className="flex justify-between items-center">
                            <span className="text-gray-200 font-medium group-hover:text-primary-light transition-colors">
                              {tool.name}
                            </span>
                            <span
                              className={`text-sm px-3 py-1 rounded-full ${
                                tool.proficiency === "Advanced"
                                  ? "bg-success/10 text-success border border-success/20"
                                  : "bg-primary/10 text-primary-light border border-primary/20"
                              }`}
                            >
                              {tool.proficiency}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* Design Tools */}
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-semibold text-primary mb-8"
              >
                Design
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="card bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-primary/50 transition-colors"
                >
                  <h4 className="text-xl font-medium text-primary-light mb-6">
                    UI/UX Tools
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {tools.design.ui.map((tool, idx) => (
                      <div
                        key={idx}
                        className="bg-gray-700/50 backdrop-blur-sm rounded-lg p-4 border border-gray-600/50 hover:border-primary/30 transition-colors group"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-gray-200 font-medium group-hover:text-primary-light transition-colors">
                            {tool.name}
                          </span>
                          <span
                            className={`text-sm px-3 py-1 rounded-full ${
                              tool.proficiency === "Advanced"
                                ? "bg-success/10 text-success border border-success/20"
                                : "bg-primary/10 text-primary-light border border-primary/20"
                            }`}
                          >
                            {tool.proficiency}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Deployment */}
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-semibold text-primary mb-8"
              >
                Deployment
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="card bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-primary/50 transition-colors"
                >
                  <h4 className="text-xl font-medium text-primary-light mb-6">
                    Platforms
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {tools.deployment.platforms.map((tool, idx) => (
                      <div
                        key={idx}
                        className="bg-gray-700/50 backdrop-blur-sm rounded-lg p-4 border border-gray-600/50 hover:border-primary/30 transition-colors group"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-gray-200 font-medium group-hover:text-primary-light transition-colors">
                            {tool.name}
                          </span>
                          <span
                            className={`text-sm px-3 py-1 rounded-full ${
                              tool.proficiency === "Advanced"
                                ? "bg-success/10 text-success border border-success/20"
                                : "bg-primary/10 text-primary-light border border-primary/20"
                            }`}
                          >
                            {tool.proficiency}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Productivity */}
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-semibold text-primary mb-8"
              >
                Productivity
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="card bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-primary/50 transition-colors"
                >
                  <h4 className="text-xl font-medium text-primary-light mb-6">
                    Office Tools
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {tools.productivity.office.map((tool, idx) => (
                      <div
                        key={idx}
                        className="bg-gray-700/50 backdrop-blur-sm rounded-lg p-4 border border-gray-600/50 hover:border-primary/30 transition-colors group"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-gray-200 font-medium group-hover:text-primary-light transition-colors">
                            {tool.name}
                          </span>
                          <span
                            className={`text-sm px-3 py-1 rounded-full ${
                              tool.proficiency === "Advanced"
                                ? "bg-success/10 text-success border border-success/20"
                                : "bg-primary/10 text-primary-light border border-primary/20"
                            }`}
                          >
                            {tool.proficiency}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

import React from 'react';
import data from '../../data/index.json';

function Projects() {
  return (
    <section className="bg-black text-white py-10" id="projects">
      <div className="container mx-auto px-5">
      <h2 className="text-white text-4xl md:text-5xl font-black mb-16 text-center">
          Web Design
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {data.projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={project.src}
                alt={project.title}
                className="w-full h-48 object-contain"
              />
              <div className="p-5">
                <h3 className="text-2xl font-raleway font-bold mb-3">{project.title}</h3>
                <p className="text-sm font-open-sans mb-5">{project.platform}</p>
                <p className="text-sm font-open-sans mb-5">{project.description}</p>
                <a
                  href={project.projectSite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-pink-500 font-bold hover:underline"
                >
                  View Live Site
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

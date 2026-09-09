import React from "react";
import "./Projects.css";

const projects = [
  {
    number: "01",
    title: "NutriDry",
    type: "Dry Fruits E-Commerce",
    image: "NUTRIDRY",
    description:
      "A modern dry fruits shopping website with product categories, product cards and a responsive shopping interface.",
    tech: ["React", "Vite", "Bootstrap"],
    github: "https://github.com/jpriyakrizh-maker/dry-fruits",
    live: "https://jpriyakrizh-maker.github.io/dry-fruits/",
  },
  {
    number: "02",
    title: "Furniture Shop",
    type: "E-Commerce Website",
    image: "FURNITURE",
    description:
      "A stylish furniture shopping website designed to showcase furniture collections with a clean and responsive interface.",
    tech: ["React", "Vite", "CSS"],
    github: "#",
    live: "#",
  },
  {
    number: "03",
    title: "Flower Shop",
    type: "Online Flower Store",
    image: "FLOWER SHOP",
    description:
      "A beautiful flower shop website featuring product displays, categories and an elegant shopping experience.",
    tech: ["React", "Bootstrap", "CSS"],
    github: "#",
    live: "#",
  },
  {
    number: "04",
    title: "Plumbing Services",
    type: "Service Website",
    image: "PLUMBING",
    description:
      "A professional plumbing service website with service sections, company information and contact details.",
    tech: ["React", "Vite", "CSS"],
    github: "https://github.com/jpriyakrizh-maker/plumbing-shop",
    live: "https://jpriyakrizh-maker.github.io/plumbing-shop/",
  },
  {
    number: "05",
    title: "Women Boutique",
    type: "Fashion Website",
    image: "BOUTIQUE",
    description:
      "A modern boutique website created to showcase women's fashion products through a stylish responsive layout.",
    tech: ["React", "Bootstrap", "AOS"],
    github: "#",
    live: "#",
  },
  {
    number: "06",
    title: "Beauty Salon",
    type: "Salon Website",
    image: "BEAUTY SALON",
    description:
      "An elegant beauty salon website featuring services, gallery sections and a user-friendly contact interface.",
    tech: ["React", "CSS", "Bootstrap"],
    github: "#",
    live: "#",
  },
  {
    number: "07",
    title: "Shoe Shop",
    type: "E-Commerce Website",
    image: "SHOE SHOP",
    description:
      "A modern shoe store interface with product cards, categories and a responsive shopping layout.",
    tech: ["React", "Bootstrap", "CSS"],
    github: "#",
    live: "#",
  },
  {
    number: "08",
    title: "Perfume Shop",
    type: "Product Showcase",
    image: "PERFUME",
    description:
      "A premium perfume shopping website designed with an attractive product showcase and responsive interface.",
    tech: ["React", "Vite", "CSS"],
    github: "#",
    live: "#",
  },
  {
    number: "09",
    title: "Laundry Service",
    type: "Service Website",
    image: "LAUNDRY",
    description:
      "A clean laundry service website presenting services, pricing information and customer contact sections.",
    tech: ["React", "CSS", "Bootstrap"],
    github: "#",
    live: "#",
  },
  {
    number: "10",
    title: "Diary Shop",
    type: "Stationery Store",
    image: "DIARY SHOP",
    description:
      "A simple and creative diary shop website for displaying notebooks and stationery products.",
    tech: ["React", "Bootstrap", "CSS"],
    github: "https://github.com/jpriyakrizh-maker/diary-shop",
    live: "#",
  },
];

function Projects() {
  return (
    <section className="projects-page">
      <div className="projects-heading">
        <p className="projects-label">MY WORK</p>

        <h1>
          Projects I’ve <span>Built</span>
        </h1>

        <p className="projects-intro">
          A collection of websites and applications I have designed and
          developed using modern web technologies.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-image">
              <span>{project.image}</span>
            </div>

            <div className="project-content">
              <h2>{project.title}</h2>

              <p>{project.description}</p>

              <div className="tech-tags">
                {project.tech.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className="project-buttons">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="live-button"
                >
                  Live Demo ↗
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="github-button"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
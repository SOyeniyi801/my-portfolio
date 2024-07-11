import data from "../../data/index.json";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <section className="projects-section" id="MyProjects">
      <div className="projects-container-box">
        <div className="projects-container">
          <h2 className="section-heading"> My Projects</h2>
        </div>
      </div>
      <div className="projects-section-container">
        {data?.projects?.map((item, index) => (
          <div key={index} className="projects-section-card">
            <div className="projects-section-img">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="projects-section-card-content">
              <div>
                <h3 className="projects-section-title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
              <div className="projects-section-links">
              <Link
                to={item.url}
                target="_blank"
                className="text-sm projects-link"
              >
                {item.linkTag}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  <path
                    d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                    stroke="currentColor"
                    strokeWidth="2.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <Link
                to={item.projectSite}
                target="_blank"
                className="text-sm projects-link"
              >
                {item.projectTag}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  <path
                    d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                    stroke="currentColor"
                    strokeWidth="2.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

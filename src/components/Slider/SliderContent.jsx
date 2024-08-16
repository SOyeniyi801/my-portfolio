import React from "react";
import data from "../../data/index.json";

function SliderContent({ selectedTab }) {
  return (
    <section className="projects-slider-section">
      {selectedTab === "designs" && (
        <div className="content content-1">
          <div className="project-content">
            {data?.designs?.map((item, index) => (
              <div key={index} className="projects-section-card">
                <div className="project-dev-img">
                  <img src={item.src} alt="Placeholder" />
                  <h3 className="projects-section-title">{item.title}</h3>
                  <p className="text-md">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedTab === "development" && (
        <div className="content content-2">
          <div className="project-content">
            {data?.development?.map((item, index) => (
              <div key={index} className="projects-section-card">
                <div className="project-dev-img">
                  <img src={item.src} alt="Placeholder" />
                  <h3 className="projects-section-title">{item.title}</h3>
                  <p className="text-md">{item.description}</p>
                  <a href={item.projectSite} target="_blank" rel="noreferrer">Link to Site</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default SliderContent;

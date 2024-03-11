import data from "../../data/index.json";

function Projects () {
    return(
        <section className="projects-section" id="MyProjects">
            <div className="projects-container-box">
                <div className="projects-container">
                    <p className="subtitle"> Recent Projects</p>
                    <h2 className="section-heading"> My Projects</h2>
                </div>
                <div>
                    <button className="btn btn-github">
                        <img src="./assets/github-logo.svg" alt="github logo" />
                        Visit My Github
                    </button>
                </div>
            </div>
            <div className="projects-section-container">
                {data?.projects?.map((item,index) => (
                    <div key={index} className="projects-section-card">
                        <div className="projects-section-img">
                            <img src={item.src} alt="Placeholder" />
                         </div>
                         <div className="projects-section-card-content">
                            <div>
                                <h3 className="projects-section-title">{item.title}</h3>
                                <p className="text-md">{item.description}</p>
                             </div>
                             <p className="text-sm projects-link">
                             {item.link}
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
                                    stroke-width="2.66667"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                                
                             </p>
                         </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects;
import data from "../../data/index.json";
import { Link } from 'react-router-dom';

function Projects () {
    return(
        <section className="projects-section" id="MyProjects">
            <div className="projects-container-box">
                <div className="projects-container">
                    <p className="subtitle"> Recent Projects</p>
                    <h2 className="section-heading"> My Projects</h2>
                </div>
                <div>
                    <Link 
                        to="https://github.com/SOyeniyi801"
                        target="_blank"
                        style={{ textDecoration: 'none' }}>
                            <button className="btn btn-github">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="white">
                                    <path fill="white" d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.801 8.221 11.385.6.111.793-.261.793-.577 0-.285-.01-1.04-.015-2.043-3.355.73-4.055-1.584-4.055-1.584C4.46 18.216 3.68 17.8 3.68 17.8c-1.087-.744.084-.729.084-.729 1.204.084 1.838 1.238 1.838 1.238 1.07 1.835 2.809 1.305 3.495.998.109-.775.417-1.305.76-1.605-2.665-.305-5.467-1.332-5.467-5.93 0-1.31.465-2.38 1.235-3.22-.135-.307-.54-1.523.105-3.176 0 0 1.007-.322 3.3 1.23a11.488 11.488 0 0 1 3-.405c1.018 0 2.04.137 3 .4 2.29-1.554 3.296-1.232 3.296-1.232.646 1.654.24 2.87.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.807 5.623-5.48 5.918.43.372.81 1.102.81 2.223 0 1.606-.015 2.896-.015 3.286 0 .32.192.695.8.576C20.566 21.795 24 17.296 24 12c0-6.627-5.373-12-12-12"  className="btn-github"/>
                                </svg>

                                Visit My Github
                            </button>
                    </Link>
                    
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
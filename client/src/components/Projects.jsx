import { useNavigate } from "react-router-dom";

const Projects = () => {
	const navigate = useNavigate();
	const projects = require("../projects.json");

	const handleProjectClick = (project) => {
		navigate(`/projects/${project.id}`, { state: project });
	};

	return (
		<div className="projects-container container">
			{projects.map((project) => (
				<div className="projects-img-container" key={project.id} onClick={() => handleProjectClick(project)}>
					<div className="projects-title">
						<h2>{project.title}</h2>
						<p>{project.city}</p>
						<p>{project.area}</p>
					</div>
					<img className="projects-img" src={project.imageUrl} alt={project.title} loading="lazy" />
					{/* <div className="project-overlay">{project.title}</div> */}
				</div>
			))}
		</div>
	);
};
export default Projects;

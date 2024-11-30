import { useState } from "react";
import ContactForm from "./ContactForm";
import AboutMe from "./AboutMe";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
	const [isExpanded, setIsExpanded] = useState(false);
	const navigate = useNavigate();

	const projects = require("../projects.json");

	const handleProjectClick = (project) => {
		navigate(`/projects/${project.id}`, { state: project });
	};

	return (
		<div className="container">
			<div className={`about-me-wrapper ${isExpanded ? "expanded" : ""}`}>
				<AboutMe />
				<button className="toggle-button" onClick={() => setIsExpanded(!isExpanded)}>
					{isExpanded ? "Свернуть" : "Развернуть"}
				</button>
			</div>
			<div className="main-projects">
				<div className="title">
					<h2>Мои проекты</h2>
				</div>
				<div className="main-projects-container container">
					<div className="main-projects-img-container" onClick={() => handleProjectClick(projects[0])}>
						<img className="main-projects-img" src={projects[0].imageUrl} alt={projects[0].title} loading="lazy" />
						<div className="project-overlay">{projects[0].title}</div>
					</div>

					<div className="main-projects-img-container" onClick={() => handleProjectClick(projects[1])}>
						<img className="main-projects-img" src={projects[1].imageUrl} alt={projects[1].title} loading="lazy" />
						<div className="project-overlay">{projects[1].title}</div>
					</div>

					<div className="main-projects-img-container" onClick={() => handleProjectClick(projects[2])}>
						<img className="main-projects-img" src={projects[2].imageUrl} alt={projects[2].title} loading="lazy" />
						<div className="project-overlay">{projects[2].title}</div>
					</div>

					<div className="main-projects-img-container" onClick={() => handleProjectClick(projects[3])}>
						<img className="main-projects-img" src={projects[3].imageUrl} alt={projects[3].title} loading="lazy" />
						<div className="project-overlay">{projects[3].title}</div>
					</div>
				</div>
			</div>
			<ContactForm />
		</div>
	);
};

export default MainPage;

import ContactForm from "./ContactForm";
import AboutMe from "./AboutMe";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
	const navigate = useNavigate();

	// Окремі проекти, які хочемо відобразити
	const projects = require("../projects.json");
	// const imageUrl1 = require("../images/projects/Sochi/44_Interactive LightMix.jpg");
	// const imageUrl2 = require("../images/projects/Sochi/44_Interactive LightMix.jpg");
	// const imageUrl3 = require("../images/projects/Sochi/44_Interactive LightMix.jpg");
	// const imageUrl4 = require("../images/projects/Sochi/44_Interactive LightMix.jpg");

	// console.log(projects[0].imageUrl);

	const handleProjectClick = (project) => {
		navigate(`/projects/${project.id}`, { state: project });
	};

	return (
		<div>
			<AboutMe />
			<div className="main-projects">
				<h2>Мои проекты</h2>
				<div className="main-projects-container container">
					{/* Проект 1 */}
					<div className="main-projects-img-container" onClick={() => handleProjectClick(projects[0])}>
						<img className="main-projects-img" src={projects[0].imageUrl} alt={projects[0].title} loading="lazy" />

						<div className="project-overlay">{projects[0].title}</div>
					</div>

					{/* Проект 2 */}
					<div className="main-projects-img-container" onClick={() => handleProjectClick(projects[1])}>
						<img className="main-projects-img" src={projects[1].imageUrl} alt={projects[1].title} loading="lazy" />
						<div className="project-overlay">{projects[1].title}</div>
					</div>

					{/* Проект 3 */}
					<div className="main-projects-img-container" onClick={() => handleProjectClick(projects[2])}>
						<img className="main-projects-img" src={projects[2].imageUrl} alt={projects[2].title} loading="lazy" />
						<div className="project-overlay">{projects[2].title}</div>
					</div>

					{/* Проект 4 */}
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

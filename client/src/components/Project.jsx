import { useLocation } from "react-router-dom";

const Project = () => {
	const location = useLocation();
	const { title, city, area, images } = location.state;

	return (
		<div>
			<h1>{title}</h1>
			<p>Город: {city}</p>
			<p>Площадь: {area} м²</p>
			<div className="project-images">
				{images.map((img, index) => (
					<img key={index} src={img} alt={`Img ${index}`} loading="lazy" />
				))}
			</div>
		</div>
	);
};

export default Project;

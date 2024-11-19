import { useState } from "react";
import { useLocation } from "react-router-dom";
import Gallery from "react-photo-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const Project = () => {
	const location = useLocation();
	const { title, city, area, images } = location.state;
	const [isOpen, setIsOpen] = useState(false);
	const [photoIndex, setPhotoIndex] = useState(0);

	// Форматуємо зображення з перевіркою на існування width і height
	const photos = images.map((img, index) => ({
		src: img.url,
		width: img.width || 4,
		height: img.height || 3,
		key: `img-${index}`, // Унікальний ключ для кожного елемента
	}));

	const openLightbox = (index) => {
		setPhotoIndex(index);
		setIsOpen(true);
	};

	return (
		<div className="projects-container container">
			{/* <div> */}
			<div className="project-gallery">
				<Gallery photos={photos} onClick={(event, { index }) => openLightbox(index)} />
			</div>
			<div className="project-description">
				<h1>{title}</h1>
				<p>Город: {city}</p>
				<p>Площадь: {area} м²</p>
			</div>

			{isOpen && (
				<Lightbox
					mainSrc={photos[photoIndex].src}
					nextSrc={photos[(photoIndex + 1) % photos.length].src}
					prevSrc={photos[(photoIndex + photos.length - 1) % photos.length].src}
					onCloseRequest={() => setIsOpen(false)}
					onMovePrevRequest={() => setPhotoIndex((photoIndex + photos.length - 1) % photos.length)}
					onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % photos.length)}
				/>
			)}
			{/* </div> */}
		</div>
	);
};

export default Project;

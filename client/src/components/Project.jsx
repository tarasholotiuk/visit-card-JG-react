import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Gallery from "react-photo-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const Project = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState(false);
	const [photoIndex, setPhotoIndex] = useState(0);

	useEffect(() => {
		if (!location.state) {
			navigate("/", { replace: true });
		}
	}, [location.state, navigate]);

	if (!location.state) {
		return null;
	}

	const { title, city, area, description, imageUrl, images } = location.state;

	const photos = images.map((img, index) => ({
		src: img.url,
		srcMax: img.urlMax,
		width: img.width || 4,
		height: img.height || 3,
		key: `img-${index}`,
	}));

	const openLightbox = (index) => {
		setPhotoIndex(index);
		setIsOpen(true);
	};

	return (
		<div className="project-container container">
			<div className="project-description-container">
				<img src={imageUrl} alt="" />
				<div className="project-description">
					<h1>{title}</h1>
					<div>
						<p>Город: {city}</p>
						<p>Площадь: {area}</p>
					</div>
					<div dangerouslySetInnerHTML={{ __html: description }}></div>
				</div>
			</div>
			<div className="project-gallery">
				<Gallery
					photos={photos.map(({ src, width, height, key }) => ({ src, width, height, key }))}
					onClick={(event, { index }) => openLightbox(index)}
				/>
			</div>

			{isOpen && (
				<Lightbox
					mainSrc={photos[photoIndex].srcMax}
					nextSrc={photos[(photoIndex + 1) % photos.length].srcMax}
					prevSrc={photos[(photoIndex + photos.length - 1) % photos.length].srcMax}
					onCloseRequest={() => setIsOpen(false)}
					onMovePrevRequest={() => setPhotoIndex((photoIndex + photos.length - 1) % photos.length)}
					onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % photos.length)}
				/>
			)}
		</div>
	);
};

export default Project;

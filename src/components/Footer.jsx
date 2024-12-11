import { NavLink } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";

const Footer = () => {
	const projects = require("../projects.json");
	const [currentImages, setCurrentImages] = useState({
		slider1: null,
		slider2: null,
	});
	const [animationState, setAnimationState] = useState({
		slider1: true,
		slider2: true,
	});

	const getRandomImage = useCallback(
		(excludeIndex = null) => {
			const projectIndex = Math.floor(Math.random() * projects.length);
			const project = projects[projectIndex];

			if (project?.images && project.images.length > 0) {
				const randomImageIndex = Math.floor(Math.random() * project.images.length);
				const selectedImage = project.images[randomImageIndex].url;

				if (excludeIndex !== null && currentImages[excludeIndex]?.url === selectedImage) {
					return getRandomImage(excludeIndex);
				}

				return { url: selectedImage, projectTitle: project.title };
			}

			return null;
		},
		[projects]
	);

	useEffect(() => {
		const updateImages = () => {
			setAnimationState({ slider1: false, slider2: false });

			setTimeout(() => {
				setCurrentImages((prevImages) => ({
					slider1: getRandomImage("slider2"),
					slider2: getRandomImage("slider1"),
				}));
				setAnimationState({ slider1: true, slider2: true });
			}, 1000);
		};

		updateImages();
		const interval = setInterval(updateImages, 3000);

		return () => clearInterval(interval);
	}, [getRandomImage, projects]);

	return (
		<footer className="footer">
			<div className="footer-links">
				<NavLink to="/" className="footer-link" activeclassname="active">
					Главная
				</NavLink>
				<NavLink to="/about" className="footer-link" activeclassname="active">
					Обо мне
				</NavLink>
				<NavLink to="/projects" className="footer-link" activeclassname="active">
					Проекты
				</NavLink>
				<NavLink to="/services" className="footer-link" activeclassname="active">
					Услуги и цены
				</NavLink>
			</div>

			<div className="footer-slider-container">
				<div className="footer-slider">
					<div className="slider-wrapper">
						{currentImages.slider1 ? (
							<img
								src={currentImages.slider1.url}
								alt={currentImages.slider1.projectTitle}
								className={`slider-image ${animationState.slider2 ? "" : "hidden"}`}
							/>
						) : (
							<p>Завантаження...</p>
						)}
					</div>
				</div>
				<div className="footer-slider">
					<div className="slider-wrapper">
						{currentImages.slider2 ? (
							<img
								src={currentImages.slider2.url}
								alt={currentImages.slider2.projectTitle}
								className={`slider-image ${animationState.slider2 ? "" : "hidden"}`}
							/>
						) : (
							<p>Завантаження...</p>
						)}
					</div>
				</div>
			</div>

			<div className="footer-contacts">
				<p className="footer-contact">
					<a href="tel:+79816842836" className="contact-link">
						+7 981 684 28 36
					</a>
				</p>
				<p className="footer-contact">
					<a href="mailto:janegridina@gmail.com" className="contact-link">
						janegridina@gmail.com
					</a>
				</p>
				<div className="footer-socials">
					<a href="https://t.me/+79816842836" target="_blank" rel="noopener noreferrer">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Telegram_Messenger.png/240px-Telegram_Messenger.png"
							alt="Telegram"
							className="footer-icon"
						/>
					</a>
					<a href="https://wa.me/79816842836" target="_blank" rel="noopener noreferrer">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/240px-WhatsApp.svg.png"
							alt="WhatsApp"
							className="footer-icon"
						/>
					</a>
					<a href="https://vk.com/janegridinadesign" target="_blank" rel="noopener noreferrer">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/VK.com-logo.svg/240px-VK.com-logo.svg.png"
							alt="VK"
							className="footer-icon"
						/>
					</a>
					<a href="https://www.behance.net/janegridina" target="_blank" rel="noopener noreferrer">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Behance_while_icon.svg/270px-Behance_while_icon.svg.png"
							alt="Behance"
							className="footer-icon"
						/>
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

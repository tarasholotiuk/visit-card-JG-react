import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import telegramIcon from "../images/telegram.svg";
import whatsappIcon from "../images/whatsapp.svg";
import instagramIcon from "../images/instagram.svg";
import behanceIcon from "../images/behance.svg";

const Footer = () => {
	const projects = require("../projects.json");
	const [currentIndex, setCurrentIndex] = useState(0);

	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
	// 	}, 3000); // Зміна слайду кожні 3 секунди
	// 	return () => clearInterval(interval);
	// }, [projects.length]);

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

			<div className="footer-slider">
				<div className="slider-wrapper">
					{projects.map((project, index) => (
						<div
							key={index}
							className={`slider-image-container ${
								index === currentIndex ? "active" : ""
							}`}
						>
							<img
								src={project.imageUrl}
								alt={project.title}
								className="slider-image"
							/>
							{/* <div className="slider-title">{project.title}</div> */}
						</div>
					))}
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
						<img src={telegramIcon} alt="Telegram" className="footer-icon" />
					</a>
					<a href="https://wa.me/79816842836" target="_blank" rel="noopener noreferrer">
						<img src={whatsappIcon} alt="WhatsApp" className="footer-icon" />
					</a>
					<a href="https://www.instagram.com/jg_design.ru/" target="_blank" rel="noopener noreferrer">
						<img src={instagramIcon} alt="Instagram" className="footer-icon" />
					</a>
					<a href="https://www.behance.net/janegridina" target="_blank" rel="noopener noreferrer">
						<img src={behanceIcon} alt="Behance" className="footer-icon" />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

import React, { useState } from "react";
// import { NavLink } from "react-router-dom";

const ScrollToTopButton = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleMouseEnter = () => {
		setIsMenuOpen(true);
	};

	const handleMouseLeave = () => {
		setIsMenuOpen(false);
	};

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<div
			className="scroll-to-top"
			onMouseLeave={handleMouseLeave} // Закриття меню, коли миша виходить з області
		>
			<button
				className={`scroll-button ${isMenuOpen ? "active" : ""}`}
				onMouseEnter={handleMouseEnter} // Відкриває меню при наведенні
				onClick={scrollToTop}
			>
				↑
			</button>
			{/* {isMenuOpen && (
				<div className={`menu-up ${isMenuOpen ? "active" : ""}`}>
					<NavLink to="/" className="menu-up-item" onClick={scrollToTop}>
						В начало
					</NavLink>
					<NavLink to="/about" className="menu-up-item">
						Обо мне
					</NavLink>
					<NavLink to="/services" className="menu-up-item">
						Услуги и цены
					</NavLink>
					<NavLink to="/projects" className="menu-up-item">
						Проекты
					</NavLink>
					<NavLink to="/contacts" className="menu-up-item">
						Контакты
					</NavLink>
				</div>
			)} */}
		</div>
	);
};

export default ScrollToTopButton;

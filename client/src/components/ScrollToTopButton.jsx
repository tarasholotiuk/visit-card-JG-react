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
		</div>
	);
};

export default ScrollToTopButton;

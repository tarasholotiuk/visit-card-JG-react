import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png"; // Імпорт логотипа

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (isMenuOpen && event.target.closest(".menu") === null && event.target.closest(".menu-toggle") === null) {
				closeMenu();
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isMenuOpen]);

	return (
		<div>
			<header>
				<div className="logo">
					<a href="/">
						<img src={logo} alt="Logo" />
					</a>
				</div>
				<nav className={`menu ${isMenuOpen ? "active" : ""}`}>
					<NavLink to="/" className="menu-item" activeclassname="active" onClick={closeMenu}>
						Главная
					</NavLink>
					<NavLink to="/about" className="menu-item" activeclassname="active" onClick={closeMenu}>
						Обо мне
					</NavLink>
					{/* <NavLink to="/projects" className="menu-item" activeclassname="active">
                        Проекты
                    </NavLink> */}
					<NavLink to="/services" className="menu-item" activeclassname="active" onClick={closeMenu}>
						Услуги и цены
					</NavLink>
					{/* <NavLink to="/contacts" className="menu-item" activeclassname="active">
                        Контакты
                    </NavLink> */}
				</nav>
				<button className="menu-toggle" onClick={toggleMenu}>
					<span className="bar"></span>
					<span className="bar"></span>
					<span className="bar"></span>
				</button>
				<div className="header-right">
					<div className="socials-grid">
						<div className="social-item tg">
							<a href="https://t.me/+79816842836" target="_blank" rel="noopener noreferrer">
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Telegram_Messenger.png/240px-Telegram_Messenger.png"
									alt="Telegram"
								/>
							</a>
						</div>
						<div className="social-item wt">
							<a href="https://wa.me/79816842836" target="_blank" rel="noopener noreferrer">
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/240px-WhatsApp.svg.png"
									alt="WhatsApp"
								/>
							</a>
						</div>
						<div className="social-item vk">
							<a href="https://vk.com/janegridinadesign" target="_blank" rel="noopener noreferrer">
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/VK.com-logo.svg/240px-VK.com-logo.svg.png"
									alt="ВКонтакте"
								/>
							</a>
						</div>
						<div className="social-item bh">
							<a href="https://www.behance.net/janegridina" target="_blank" rel="noopener noreferrer">
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Font_Awesome_5_brands_behance.svg/270px-Font_Awesome_5_brands_behance.svg.png"
									alt="Behance"
								/>
							</a>
						</div>
					</div>
					<div className="contact-info">
						<a className="phone" href="tel:+79816842836">
							+7 981 684 28 36
						</a>
						<a className="mail" href="mailto:janegridina@gmail.com" target="_blank" rel="noopener noreferrer">
							janegridina@gmail.com
						</a>
					</div>
				</div>
			</header>
		</div>
	);
};

export default Header;

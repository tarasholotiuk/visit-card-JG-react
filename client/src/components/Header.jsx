import { NavLink } from "react-router-dom";
import logo from "../images/logo_ImgID1.png"; // Імпорт логотипа

const Header = () => {
	return (
		<div>
			<header>
				<img className="logo" src={logo} alt="err" />
				<nav className="menu">
					<NavLink to="/" className="menu-item" activeclassname="active">
						Главная
					</NavLink>
					<NavLink to="/about" className="menu-item" activeclassname="active">
						Обо мне
					</NavLink>
					<NavLink to="/projects" className="menu-item" activeclassname="active">
						Проекты
					</NavLink>
					<NavLink to="/services" className="menu-item" activeclassname="active">
						Услуги и цены
					</NavLink>
					<NavLink to="/contacts" className="menu-item" activeclassname="active">
						Контакты
					</NavLink>
				</nav>
				<div className="container-socials">
					<a href="#">
						<img
							className="tg"
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Telegram_Messenger.png/240px-Telegram_Messenger.png"
							alt="Telegram"
						/>
					</a>
					<a href="#">
						<img
							className="wt"
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/240px-WhatsApp.svg.png"
							alt="WhatsApp"
						/>
					</a>
					<a className="mail" href="mailto:janegridina@gmail.com" target="_blank" rel="noopener noreferrer">
						janegridina@gmail.com
					</a>
				</div>
			</header>
		</div>
	);
};
export default Header;

import { NavLink } from "react-router-dom";
import logo from "../images/logo_ImgID1.png"; // Імпорт логотипа

const Header = () => {
	return (
		<div>
			<header>
				<div className="logo">
					<img src={logo} alt="err" />
				</div>
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

				<div className="header-right">
					<div className="socials-grid">
						<div className="social-item tg">
							<a href="#">
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Telegram_Messenger.png/240px-Telegram_Messenger.png"
									alt="Telegram"
								/>
							</a>
						</div>
						<div className="social-item wt">
							<a href="#">
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/240px-WhatsApp.svg.png"
									alt="WhatsApp"
								/>
							</a>
						</div>
						<div className="social-item vk">
							<a href="#">
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/VK.com-logo.svg/240px-VK.com-logo.svg.png"
									alt="ВКонтакте"
								/>
							</a>
						</div>
						<div className="social-item bh">
							<a href="#">
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

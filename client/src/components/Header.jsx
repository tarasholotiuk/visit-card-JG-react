import logo from "../images/logo_ImgID1.png"; // Імпорт логотипа

const Header = () => {
	return (
		<div>
			<header>
				<img className="logo" src={logo} alt="err" />
				<div className="container">
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

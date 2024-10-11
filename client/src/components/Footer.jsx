const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-links">
				<a href="/about" className="footer-link">
					Обо мне
				</a>
				<a href="/projects" className="footer-link">
					Проекты
				</a>
				<a href="/services" className="footer-link">
					Услуги и цены
				</a>
				<a href="/contacts" className="footer-link">
					Связаться со мной
				</a>
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
					<a href="https://t.me/+79816842836">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Telegram_Messenger.png/240px-Telegram_Messenger.png"
							alt="Telegram"
							className="footer-icon"
						/>
					</a>
					<a href="https://wa.me/79816842836">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/240px-WhatsApp.svg.png"
							alt="WhatsApp"
							className="footer-icon"
						/>
					</a>
					<a href="https://vk.com/janegridinadesign">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/VK.com-logo.svg/240px-VK.com-logo.svg.png"
							alt="VK"
							className="footer-icon"
						/>
					</a>
					<a href="https://www.behance.net/janegridina">
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

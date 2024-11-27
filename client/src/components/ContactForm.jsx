import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = ({ packageName, onClose }) => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
		packageName,
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		emailjs
			.send(
				process.env.REACT_APP_EMAILJS_SERVICE_ID,
				process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
				formData,
				process.env.REACT_APP_EMAILJS_PUBLIC_KEY
			)
			.then(
				(result) => {
					alert("Повідомлення успішно надіслано!");
					setFormData({ name: "", email: "", message: "" }); // Очистити форму
					if (onClose) {
						onClose();
					}
				},

				(error) => {
					alert("Помилка при відправці: " + error.text);
				}
			);
	};

	return (
		<div className="contact-form-container">
			<div>
				<h2>Форма обратной связи</h2>
				{onClose && (
					<button className="close-button" onClick={onClose}>
						&times;
					</button>
				)}
			</div>
			<form id="contact-form" onSubmit={handleSubmit}>
				<p>{packageName}</p>
				<br />
				<label htmlFor="name">Имя:</label>
				<input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
				<label htmlFor="email">Электронная почта:</label>
				<input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
				<label htmlFor="message">Сообщение:</label>
				<textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
				<button className="button-send" type="submit">
					Отправить
				</button>
			</form>
		</div>
	);
};

export default ContactForm;

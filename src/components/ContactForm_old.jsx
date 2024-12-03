import React, { useState } from "react";

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

	const handleSubmit = async (e) => {
		e.preventDefault();

		const response = await fetch("http://localhost:5000/send", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		});

		const result = await response.json();
		alert(result.message);

		if (result.success) {
			onClose();
		}
	};

	return (
		<div className="contact-form-container">
			<div>
				<h2>Форма обратной связи</h2>
				<button className="close-button" onClick={onClose}>
					&times;
				</button>
			</div>
			<form id="contact-form" onSubmit={handleSubmit}>
				<p>{packageName}</p>
				<br />
				<label htmlFor="name">Имя:</label>
				<input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
				{/* <br /> */}

				<label htmlFor="email">Электронная почта:</label>
				<input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
				{/* <br /> */}

				<label htmlFor="message">Сообщение:</label>
				<textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
				{/* <br /> */}

				<button className="button-send" type="submit">Отправить</button>
			</form>
		</div>
	);
};

export default ContactForm;

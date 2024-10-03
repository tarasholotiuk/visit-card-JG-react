// src/ContactForm.js
import React, { useState } from "react";

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
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
	};

	return (
		<div>
			<h2>Форма зворотнього зв'язку</h2>
			<form id="contact-form" onSubmit={handleSubmit}>
				<label htmlFor="name">Ім'я:</label>
				<input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
				<br />

				<label htmlFor="email">Електронна пошта:</label>
				<input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
				<br />

				<label htmlFor="message">Повідомлення:</label>
				<textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
				<br />

				<button type="submit">Надіслати</button>
			</form>
		</div>
	);
};

export default ContactForm;

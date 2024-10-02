const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
const { google } = require("googleapis");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Налаштування OAuth2
const OAuth2 = google.auth.OAuth2;

// Задайте свої облікові дані
const oauth2Client = new OAuth2(
	"813063916444-07glfrqvpflahvc41tq1ts92lnh4kd5h.apps.googleusercontent.com", // Замініть на ваш Client ID
	"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", // Замініть на ваш Client Secret
	"https://developers.google.com/oauthplayground" // URL перенаправлення
);

// Додайте правильний Refresh Token
oauth2Client.setCredentials({
	refresh_token:
		"1//04PtN_l5TxF5mCgYIARAAGAQSNwF-L9IrzxAAv3Xtb01Ko6JQwANMIM_oS6aZ0F3Q6C5-F2mJHn4JrStmMzaVR8UZljwyfB5LjKI", // Refresh Token
});

// Створіть транспорт для Nodemailer
const sendMail = async (mailOptions) => {
	try {
		const accessToken = await oauth2Client.getAccessToken();
		if (!accessToken || accessToken.token === null) {
			throw new Error("Не вдалося отримати Access Token");
		}

		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				type: "OAuth2",
				user: "taratantas@gmail.com", // Ваша електронна пошта
				clientId: "813063916444-07glfrqvpflahvc41tq1ts92lnh4kd5h.apps.googleusercontent.com", // Client ID
				clientSecret: "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", // Client Secret
				refreshToken:
					"1//04PtN_l5TxF5mCgYIARAAGAQSNwF-L9IrzxAAv3Xtb01Ko6JQwANMIM_oS6aZ0F3Q6C5-F2mJHn4JrStmMzaVR8UZljwyfB5LjKI", // Refresh Token
				accessToken: accessToken.token,
			},
		});

		return await transporter.sendMail(mailOptions);
		// return console.log(mailOptions);
	} catch (error) {
		console.error("Error occurred while sending email:", error);
		throw new Error("Не вдалося відправити повідомлення");
	}
};

// Обробка запиту на відправлення листа
app.post("/send", async (req, res) => {
	console.log(req.body);

	const { name, email, message } = req.body;
	const mailOptions = {
		from: email,
		to: "janegridina@gmail.com", // на яку пошту надсилати
		subject: `Повідомлення від ${name} ${email}`,
		// text: message,
		html: `<p>Вам пришло уведомление со следующим текстом:</p>\n<p>${message}</p>\n<p>Почта отправителя ${email}</p>`,
	};

	try {
		await sendMail(mailOptions);
		res.status(200).json({ message: "Повідомлення успішно відправлене" });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// Запуск сервера
app.listen(PORT, () => {
	console.log(`Сервер запущено на порту ${PORT}`);
});

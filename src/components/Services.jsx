import React, { useState } from "react";
import ContactForm from "./ContactForm.jsx";
import ModalServices from "./ModalServices.jsx";

const Services = () => {
	const [isModalOpen, setModalOpen] = useState(false);
	const [selectedPackage, setSelectedPackage] = useState("");
	const [openArticleId, setOpenArticleId] = useState(null);

	const openModal = (packageName) => {
		setSelectedPackage(packageName);
		setModalOpen(true);
	};

	const closeModal = () => {
		setModalOpen(false);
		setSelectedPackage("");
	};

	const articles = [
		{
			id: 1,
			title: (
				<h3>
					Дизайн проект
					<br />
					Пакет базовый «Light» 1900руб за м²
				</h3>
			),
			package: "Пакет базовый «Light»",
			content: (
				<div>
					<p>
						Что <u>входит</u> в дизай проект по тарифу Light?
						<ul>
							<li className="li-check">Выезд дизайнера на объект</li>
							<li className="li-check">Обмерный план с привязкой существующих коммуникаций</li>
							<li className="li-check">Планировочное решение (2-4 варианта)</li>
							<li className="li-check">План демонтажа существующих перегородок</li>
							<li className="li-check">План возводимых перегородок и конструкций</li>
							<li className="li-check">План после монтажа</li>
							<li className="li-check">Утвержденное планировочное решение с размерами</li>
							<li className="li-check">План размещения розеток и электровыводов</li>
							<li className="li-check">План осветительных приборов</li>
							<li className="li-check">План привязки и размещения выключателей</li>
							<li className="li-check">План напольных покрытий с указанием типов напольных покрытий</li>
							<li className="li-check">План размещения теплых полов (при необходимости)</li>
							<li className="li-check">План потолков с указанием размещения карнизов</li>
							<li className="li-check">План привязки сантехнического оборудования</li>
							<li className="li-check">План размещения дверных проемов</li>
							<li className="li-check">Развертки по стенам</li>
							<li className="li-check">Подбор плитки и керамогранита в санузлы</li>
							<li className="li-check">Развертки стен в санузлах. Схема раскладки плитки</li>
						</ul>
						<br />
						Что <u>не входит</u> в пакет по тарифу Light?
						<ul>
							<li className="li-cross">3Д визуализация помещений</li>
							<li className="li-cross">Ведомость оборудования, освещения и мебели</li>
							<li className="li-cross">Подбор материалов по помещениям (кроме санузлов)</li>
							<li className="li-cross">Выезд с клиентами в салон на подбор материалов, мебели и оборудования</li>
							<li className="li-cross">Авторский надзор на объекте</li>
						</ul>
					</p>
				</div>
			),
		},
		{
			id: 2,
			title: (
				<h3>
					Дизайн проект
					<br />
					Пакет полный «PRO» 3000 руб. за м²
				</h3>
			),
			package: "Пакет базовый PRO",
			content: (
				<div>
					<p>
						Что <u>входит</u> в дизай проект по тарифу PRO?
						<ul>
							<li className="li-check">Выезд дизайнера на объект </li>
							<li className="li-check">Обмерный план с привязкой существующих коммуникаций</li>
							<li className="li-check">Планировочное решение (2-4 варианта)</li>
							<li className="li-check">План демонтажа существующих перегородок</li>
							<li className="li-check">План возводимых перегородок и конструкций</li>
							<li className="li-check">План после монтажа</li>
							<li className="li-check">3Д визуализация помещений</li>
							<li className="li-check">Утвержденное планировочное решение с размерами</li>
							<li className="li-check">План размещения розеток и электровыводов</li>
							<li className="li-check">План осветительных приборов</li>
							<li className="li-check">План привязки и размещения выключателей</li>
							<li className="li-check">План напольных покрытий с указанием типов напольных покрытий</li>
							<li className="li-check">План размещения теплых полов (при необходимости)</li>
							<li className="li-check">План потолков с указанием размещения карнизов</li>
							<li className="li-check">План привязки сантехнического оборудования</li>
							<li className="li-check">План размещения дверных проемов</li>
							<li className="li-check">Развертки по стенам</li>
							<li className="li-check">Подбор плитки и керамогранита в санузлы</li>
							<li className="li-check">Развертки стен в санузлах. Схема раскладки плитки</li>
							<li className="li-check">Ведомость оборудования, освещения и мебели</li>
							<li className="li-check">Подбор материалов по помещениям (кроме санузлов)</li>
							<li className="li-check">
								Выезд с клиентами в салон на подбор материалов, мебели и оборудования (3-4 выезда, не более 5 часов на
								каждый)
							</li>
							<li className="li-check">Помощь в комплектации объекта</li>
						</ul>
						<br />
						Что <u>не входит</u> в пакет по тарифу PRO?
						<ul>
							<li className="li-cross">Авторский надзор на объекте</li>
						</ul>
					</p>
				</div>
			),
		},
		{
			id: 3,
			title: (
				<h3>
					Разработка планировочного
					<br />
					решения 1400 руб. за м²
				</h3>
			),
			package: "Разработка планировочного решения",
			content: (
				<div>
					<p>
						Что <u>входит</u> в разработку планировочного решения?
						<ul>
							<li className="li-check">Выезд дизайнера на объект</li>
							<li className="li-check">Обмерный план с привязкой существующих коммуникаций</li>
							<li className="li-check">Планировочное решение (2-4 варианта)</li>
							<li className="li-check">План демонтажа существующих перегородок</li>
							<li className="li-check">План возводимых перегородок и конструкций</li>
							<li className="li-check">План после монтажа</li>
							<li className="li-check">Утвержденное планировочное решение с размерами</li>
							<li className="li-check">План размещения розеток и электровыводов</li>
							<li className="li-check">План осветительных приборов</li>
							<li className="li-check">План привязки и размещения выключателей</li>
							<li className="li-check">План напольных покрытий с указанием типов напольных покрытий</li>
						</ul>
						<br />
						Для кого подойдет Разработка планировочного решения? Если вы четко представляете, каким должен быть ваш
						будущий интерьер, или хотите оптимизировать затраты на ремонт, этот пакет станет для вас идеальным выбором.
						Я помогу грамотно спланировать размещение мебели, освещения и необходимых электровыводов, чтобы ваше
						пространство стало максимально удобным, функциональным и радовало вас долгие годы.
					</p>
				</div>
			),
		},
		{
			id: 4,
			title: (
				<h3>
					Авторский надзор
					<br /> 30000 руб. месяц
				</h3>
			),
			package: "Авторский надзор",
			content: (
				<div>
					<p>
						Что <u>входит</u> в авторский надзор?
						<ul>
							<li className="li-check">Плановое посещение обьекта и выезды в салоны до 6-и раз в месяц</li>
							<li className="li-check">Дистанционное сопровождение проекта</li>
							<li className="li-check">Фотофиксация объекта при выездах</li>
							<li className="li-check">
								Консультации заказчиков и подрядчиков по различным вопросам связанных с проектом
							</li>
							<li className="li-check">Доработка и актуализация чертежей при необходимости</li>
							<li className="li-check">Решение вопросов возникающих в ходе доставок</li>
						</ul>
						<br />
						Что <u>не входит</u> в авторский надзор?
						<ul>
							<li className="li-cross">
								Технический надзор (прием и корректировка скрытых работ, соблюдение технологий)
							</li>
							<li className="li-cross">Корректировка 3Д визуализаций</li>
							<li className="li-cross">Прием материалов и оборудования на объекте</li>
							<li className="li-cross">Передача денежных средств поставщикам и партнерам</li>
							<li className="li-cross">
								Ответственность за недобросовестное отношение к работе третьих лиц и соблюдение договоров, сроков
							</li>
						</ul>
					</p>
				</div>
			),
		},
	];
	const handleToggle = (id) => {
		setOpenArticleId(openArticleId === id ? null : id);
	};

	return (
		<div className="container">
			<div className="title">
				<h2>Прайс на услуги</h2>
			</div>
			<div className="services-container">
				{articles.map((article) => (
					<article key={article.id} className="services-article-container">
						<div
							className={`services-article-title ${
								article.id % 2 >= 1 ? "services-left-article" : "services-right-article"
							}`}
							onClick={() => handleToggle(article.id)}
						>
							<h3>{article.title}</h3>
						</div>
						<div className={`services-article-content ${openArticleId === article.id ? " open" : ""}`}>
							{article.content}
						</div>
						<button
							className={`open-modal-button${openArticleId === article.id ? " open" : ""} `}
							onClick={() => openModal(article.button)}
						>
							Оставить заявку
						</button>
					</article>
				))}
			</div>
			{isModalOpen && <ModalServices selectedPackage={selectedPackage} onClose={closeModal} />}
			<ContactForm />
		</div>
	);
};
export default Services;

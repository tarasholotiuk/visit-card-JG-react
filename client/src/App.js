// src/App.js
// src/ContactForm.js
import "./style.css"; // Додайте цей рядок для імпорту стилів

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Project from "./components/Project";
import Services from "./components/Services";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<div className="main">
					<Routes>
						<Route path="/" element={<MainPage />} />
						<Route path="/about" element={<AboutMe />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="/projects/:id" element={<Project />} />
						<Route path="/services" element={<Services />} />
						<Route path="/contacts" element={<Contacts />} />
					</Routes>
				</div>
				<ScrollToTopButton />
				<Footer />
			</div>
		</Router>
	);
}

export default App;

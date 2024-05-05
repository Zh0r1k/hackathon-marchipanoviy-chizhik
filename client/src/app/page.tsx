import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
	return (
		<>
			<form className="search-container" id="searchForm">
				<label htmlFor="query">Запрос:</label>
				<input
					type="text"
					id="query"
					className="search-input"
					placeholder="Введите запрос"
					aria-label="Введите запрос"
				/>
				<button type="submit" id="searchBtn" className="search-button">
					Найти
				</button>
			</form>

			<div id="results" className="results-container" role="region" aria-live="polite"></div>
		</>
	);
}

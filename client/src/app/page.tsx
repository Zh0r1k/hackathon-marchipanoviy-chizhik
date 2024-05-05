import Image from "next/image";
import styles from "./page.module.css";
import { CardList } from "@/components/CardList/CardList";
import { useEffect, useState } from "react";
import { TypeCard } from "@/types";
import { endpoints } from "@/api/config";

export default function Home() {
	const [cards, setCards] = useState<TypeCard[]>([]);

	useEffect(() => {
		async function fetchCardList() {
			const response: Response = await fetch(endpoints.cards);

			if(!response.ok) {
				return;
			}

			const data: TypeCard[] = await response.json();
			setCards(data);
		}

		fetchCardList();
	}, []);

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

      		<CardList cards={cards} />
		</>
	);
}

import { TypeCard } from "@/types";
import styles from "./Card.module.scss";

export const Card = ({ name, phone_code, capital, region, subregion, nationality, timezones }: TypeCard) => {
    return (
        <div className={styles.card}>
            <h1>{name}</h1>
            
        </div>
    )
}

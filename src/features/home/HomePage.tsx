import {CardComponent} from "../../core/shared/card/Card.tsx";
import styles from './home.module.css';

export const HomePage = () => {
	return (
		<main className={styles.container}>
			<CardComponent />
			<h1 className={styles.title}> Esta es mi home</h1>
		</main>
	)
}

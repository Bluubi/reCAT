import styles from './home.module.css'
import { CatComponent } from '../cat/ui/cat.component.tsx'

export const HomePage = () => {
	return (
		<main className={styles.container}>
			<CatComponent />
		</main>
	)
}

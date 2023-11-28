import styles from './header.module.css'

export const HeaderComponent = () => {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<h1>This is the header</h1>
			</div>
		</header>
	)
}

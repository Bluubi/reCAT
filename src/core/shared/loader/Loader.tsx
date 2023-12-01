import cat from './loader.module.css'

export const Loader = () => {
	return (
		<div className={cat.house}>
			<div className={cat.face}>
				<div className={cat.whisker}></div>
				<div className={cat.mouth}></div>
			</div>
			<p className={cat.loading}> Loading...</p>
		</div>
	)
}

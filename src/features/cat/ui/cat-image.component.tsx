import card from './cat.module.css'

export const ImageComponent = ({ url }: { url: string }) => {
	return (
		<div className={card.container}>
			<img src={url} alt={''} />
		</div>
	)
}

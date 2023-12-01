import { useEffect, useState } from 'react'
import { Cat } from '../domain/Cat.tsx'
import { CardComponent } from '../../../core/shared/card/Card.tsx'
import { ImageComponent } from './cat-image.component.tsx'
import { Loader } from '../../../core/shared/loader/Loader.tsx'
import styles from '../../home/home.module.css'

export const CatComponent = () => {
	const [cat, setCat] = useState<Cat>()

	useEffect(() => {
		setTimeout(() => {
			fetch('https://api.thecatapi.com/v1/images/9hb')
				.then((response) => response.json())
				.then((data) => {
					setCat(data)
				})
		}, 5000)
	}, [])

	return (
		<CardComponent>
			<h1 className={styles.title}> reCAT</h1>
			{cat ? <ImageComponent url={cat.url} /> : <Loader />}
		</CardComponent>
	)
}

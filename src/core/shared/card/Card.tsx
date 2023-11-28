import styles from './card.module.css';
import {ComponentProps} from "react";


type CardProps = ComponentProps<'div'>;

export const CardComponent = ({...props}: CardProps) => {
    return (
        <div className={styles.card}>
            { props.children }
        </div>
    )
}

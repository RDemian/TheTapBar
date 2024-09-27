import styles from './styles.module.css';

export interface IIconProps {
	iconSrc: string;
	alt: string;
}

/**
 * Кнопка
 */
export const Icon = ({ iconSrc, alt }: IIconProps) => {
	return (
		<div className={styles['iconWrap']}>
			<img src={iconSrc} className={styles['icon']} alt={alt} />
		</div>
	);
};

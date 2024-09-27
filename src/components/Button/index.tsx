import { ButtonHTMLAttributes } from 'react';
import styles from './styles.module.css';
import { Icon, IIconProps } from '../Icon';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	icon: IIconProps;
	text: string | number;
	onClick: () => void;
}

/**
 * Кнопка
 */
export const Button = ({ text, onClick, icon, ...props }: ButtonProps) => {
	return (
		<button
			onClick={onClick}
			className={styles['button']}
			title={icon.alt}
			{...props}
		>
			{icon.iconSrc &&
				<Icon iconSrc={icon.iconSrc} alt={icon.alt} />
			}
			{text && text}
		</button>
	);
};

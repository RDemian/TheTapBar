
import { ReactNode } from 'react';
import cn from 'classnames';
import styles from './styles.module.css';

interface IProps {
	children: ReactNode;
	className?: string;
}

/**
 * Панель
 */
export const Bar = ({ children, className }: IProps) => {
	return (
		<nav className={cn(styles['wrapper'], className)}>
			{children}
		</nav>
	);
};

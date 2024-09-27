import cn from 'classnames';
import { Button } from '../../components/Button';
import { Bar } from '../../components/Bar';
import { useTapBar } from './hooks/useTapBar';
import { useIsSсroll } from './hooks/useIsSсroll';
import styles from './styles.module.css';

/**
 * Панель навигации
 */
export const TapBar = () => {
	const items = useTapBar();

	const isScrolling = useIsSсroll();

	return (
		<Bar className={cn(styles['sticky'], {
			[styles['hide']]: !isScrolling,
		})}>
			{items.map(({ id, text, icon, action }) => (
				<Button
					key={id}
					text={text}
					icon={icon}
					onClick={action}
				/>
			))}
		</Bar>
		
	);
};

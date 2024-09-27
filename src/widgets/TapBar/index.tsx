import cn from 'classnames';
import { Button } from '../../components/Button';
import { Bar } from '../../components/Bar';
import { useTapBar } from './hooks/useTapBar';
import { useIsBottomSсroll } from './hooks/useIsBottomSсroll';
import styles from './styles.module.css';

/**
 * Панель навигации
 */
export const TapBar = () => {
	const items = useTapBar();

	const isScrolling = useIsBottomSсroll();

	return (
		<Bar className={cn(styles['sticky'], {
			[styles['hide']]: isScrolling,
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

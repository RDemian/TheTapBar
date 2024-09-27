import styles from './styles.module.css';
import { TapBar } from '../../widgets/TapBar';
import Pict from '../../assets/picture.png';
import { textContent } from './textContent';

export const Main = () => {
	return (
		<section className={styles['page']}>
			<img width={300} height={600} src={Pict} alt='картинка' />
			<span style={{ whiteSpace: 'pre-line' }}>
				{textContent}
				{textContent}
				{textContent}
				{textContent}
				{textContent}
			</span>

			<TapBar/>
		</section>
	);
};

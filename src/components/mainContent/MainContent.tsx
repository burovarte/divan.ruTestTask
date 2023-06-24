import headerLogo from "../../assets/Illustration.svg";
import styles from "./MainContent.module.css";

export const MainContent = () => {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<img src={headerLogo} className={styles.headerLogo} alt="logo" />
			</div>
			<div className={styles.textContent}>
				<h1>Добро пожаловать в конструктор!</h1>
				<p>Выберите действие для продолжения</p>
			</div>
			<div className={styles.buttonsContent}>
				<button className={styles.whiteButton}>Изменить конфигурацию</button>
				<button className={styles.blackButton}>Купить любой диван</button>
			</div>
		</div>
	);
};

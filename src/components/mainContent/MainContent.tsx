import { useEffect } from "react";
import headerLogo from "../../assets/Illustration.svg";
import styles from "./MainContent.module.css";
import { EOnboarding } from "../../onBoardingConfig";
import { createOnBoardingTooltip } from "../OnBoardingTooltip/OnBoardingTooltip";
import { useOnBoarding } from "../../hooks/useOnBoarding";

const OnBoardingTooltip = createOnBoardingTooltip(EOnboarding.Main);
export const MainContent = () => {
	const { targetIDs, startOnBoarding } = useOnBoarding(EOnboarding.Main);
	const [changeConfig, buySofa] = targetIDs;

	useEffect(() => {
		setTimeout(startOnBoarding, 200);
	}, [startOnBoarding]);

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
				<OnBoardingTooltip target={changeConfig}>
					<button className={styles.whiteButton}>Изменить конфигурацию</button>
				</OnBoardingTooltip>
				<OnBoardingTooltip target={buySofa}>
					<button className={styles.blackButton}>Купить любой диван</button>
				</OnBoardingTooltip>
			</div>
		</div>
	);
};

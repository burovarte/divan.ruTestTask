import { FC, PropsWithChildren } from "react";
import clsx from "clsx";
import styles from "./onBoardingContent.module.css";
import { Close } from "@mui/icons-material";

type OnBoardingContentProps = PropsWithChildren<{
	tooltip: {
		title: string;
		content: string;
		actionText: string;
	};
	currentStep: number;
	totalSteps: number;
	onActionPressed: () => void;
	onClose: () => void;
	position: "left" | "top" | "right" | "bottom";
}>;

export const OnBoardingContent: FC<OnBoardingContentProps> = ({
	tooltip,
	currentStep,
	totalSteps,
	onClose,
	onActionPressed,
	children,
}) => (
	<div className={clsx(styles.container)} onClick={(e) => e.stopPropagation()}>
		{children}
		<div className={styles.tooltipContent}>
			<div className={styles.contentContainer}>
				<div>
					<div className={styles.title}>{tooltip.title}</div>
					<div className={styles.content}>{tooltip.content}</div>
				</div>
				<div className={styles.closeButton} onClick={onClose}>
					<Close />
				</div>
			</div>
			<div className={styles.footer}>
				<div className={styles.actionButton} onClick={onActionPressed}>
					{tooltip.actionText}
				</div>
				<div
					className={styles.stepsIndicator}
				>{`${currentStep}/${totalSteps}`}</div>
			</div>
		</div>
	</div>
);

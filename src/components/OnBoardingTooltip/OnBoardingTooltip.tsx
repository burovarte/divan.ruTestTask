import { Popper } from "@mui/base";
import { FC, PropsWithChildren, useCallback, useMemo, useRef } from "react";
import { EOnboarding } from "../../onBoardingConfig";
import { useOnBoardingContent } from "../../hooks/useOnBoardingContent";
import { OnBoardingContent } from "../OnBoardingContent/OnBoardingContent";
import { useOnBoardingContext } from "../../context/OnBoardingContext/useOnBoardingContext";
import styles from "./onBoardingTooltip.module.css";
import { createPortal } from "react-dom";
import { useResizedStyles } from "./useResizedStyles";

type OnBoardingTooltipProps = PropsWithChildren<{
	target: string;
	onHighlightClicked: () => void;
}>;

export const createOnBoardingTooltip =
	(type: EOnboarding): FC<OnBoardingTooltipProps> =>
	({ children, target, onHighlightClicked }) => {
		const { tooltipData } = useOnBoardingContent(type, target);
		const {
			onNext,
			onClose,
			currentStep,
			totalSteps,
			currentTarget,
			backdropRef,
		} = useOnBoardingContext();
		const open = useMemo(
			() => target === currentTarget,
			[currentTarget, target]
		);
		const elementRef = useRef<HTMLDivElement>(null);
		const arrowRef = useRef(null);

		const highlightStyles = useResizedStyles(elementRef);

		const highlight = highlightStyles ? (
			<div
				onClick={onHighlightClicked}
				style={{
					position: "absolute",
					background: "gray",
					borderRadius: 8,
					...highlightStyles,
				}}
			></div>
		) : null;
		return (
			<>
				<div className={styles.element} ref={elementRef}>
					{children}
				</div>
				{tooltipData && currentStep && totalSteps ? (
					<Popper
						placement={tooltipData.position}
						anchorEl={elementRef.current}
						open={open}
						modifiers={[
							{
								name: "arrow",
								enabled: true,
								options: {
									elementRef: arrowRef,
								},
							},
						]}
					>
						<OnBoardingContent
							tooltip={tooltipData.tooltip}
							position={tooltipData.position}
							currentStep={currentStep}
							totalSteps={totalSteps}
							onActionPressed={onNext}
							onClose={onClose}
						>
							<span className={styles.arrow} ref={arrowRef} />
						</OnBoardingContent>
						{backdropRef?.current
							? createPortal(highlight, backdropRef.current)
							: null}
					</Popper>
				) : null}
			</>
		);
	};

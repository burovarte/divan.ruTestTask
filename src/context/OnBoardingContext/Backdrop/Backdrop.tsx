import { PropsWithChildren, FC, forwardRef } from "react";
import styles from "./backdrop.module.css";
import clsx from "clsx";

type BackdropProps = PropsWithChildren<{
	onClick?: () => void;
	active: boolean;
}>;

export const Backdrop = forwardRef<HTMLDivElement, BackdropProps>(
	({ onClick, active, children }, ref) => (
		<div
			ref={ref}
			onClick={onClick}
			className={clsx(
				styles.backdrop,
				active ? styles.backdropActive : undefined
			)}
		>
			{children}
		</div>
	)
);

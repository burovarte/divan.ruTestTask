import { FC, PropsWithChildren, useRef } from "react";
import { OnBoardingContext } from "./OnBoardingContext";
import { useOnBoardingController } from "./useOnBoardingController";
import { Backdrop } from "./Backdrop/Backdrop";

export const OnBoardingProvider: FC<PropsWithChildren> = ({ children }) => {
	const value = useOnBoardingController();
	const backdropRef = useRef(null);

	return (
		<OnBoardingContext.Provider value={{ ...value, backdropRef }}>
			{children}
			<Backdrop
				active={value.isActive}
				ref={backdropRef}
				onClick={value.onClose}
			/>
		</OnBoardingContext.Provider>
	);
};

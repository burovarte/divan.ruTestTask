import { useMemo } from "react";
import { EOnboarding, OnBoardingData, config } from "../onBoardingConfig";

type UseOnBoardingContent = (type: EOnboarding, target: string) => {
    tooltipData?: OnBoardingData,
}

export const useOnBoardingContent: UseOnBoardingContent = (type, target) => {
    const tooltipData = useMemo(() => 
        config[type]
        .find(({ target: t }) => t === target), [target, type])

    return {
        tooltipData,
    }
}
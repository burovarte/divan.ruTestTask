import { useCallback, useMemo, useState } from "react";
import { OnBoardingContextType } from "./types";
import { EOnboarding, config } from "../../onBoardingConfig";

export const useOnBoardingController = (): Omit<OnBoardingContextType, 'backdropRef'> => {
    const [type, setType] = useState<EOnboarding>()
    const [currentStep, setCurrentStep] = useState<number>()
    const currentConfig = useMemo(() => type ? config[type] : undefined, [type])
    const isActive = useMemo(() => !!type, [type])
    const totalSteps = useMemo(() => currentConfig ? currentConfig.length : undefined, [currentConfig])
    const currentTarget = useMemo(() => (currentConfig && currentStep)
        ? currentConfig[currentStep - 1].target
        : undefined, [currentConfig, currentStep])
 
    const onClose = useCallback(() => {
        setType(undefined)
        setCurrentStep(undefined)
    }, [])

    const onNext = useCallback(() => {
        setCurrentStep((step) => {
            if (!step) return undefined
            if (step === totalSteps) {
                onClose()
                return undefined
            }
            return step + 1
        })
    }, [onClose, totalSteps])

    const startOnBoarding = useCallback((onboardingType: EOnboarding) => {
        if (localStorage.getItem(onboardingType) === "used") {
            return
        }
        setType(onboardingType)
        setCurrentStep(1)
        localStorage.setItem(onboardingType, "used")
    }, [])

    return {
        onNext,
        onClose,
        currentStep,
        totalSteps,
        currentTarget,
        startOnBoarding,
        isActive,
    }
}

import { MutableRefObject } from "react"
import { EOnboarding } from "../../onBoardingConfig"

export type OnBoardingContextType = {
    onNext: () => void,
    onClose: () => void,
    startOnBoarding: (type: EOnboarding) => void
    currentStep?: number,
    totalSteps?: number,
    currentTarget?: string,
    isActive: boolean
    backdropRef?: MutableRefObject<any>
}

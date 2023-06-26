import { useContext } from "react"
import { OnBoardingContext } from "./OnBoardingContext"

export const useOnBoardingContext = () => {
    const context = useContext(OnBoardingContext)
    if (!context) throw new Error("Sorry you need to wrap usage with OnboardingProvider")
    return context
}
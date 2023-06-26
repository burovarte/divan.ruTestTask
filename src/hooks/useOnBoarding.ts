import { useCallback, useMemo } from "react"
import { EOnboarding, config } from "../onBoardingConfig"
import { useOnBoardingContext } from "../context/OnBoardingContext/useOnBoardingContext"

type UseOnBoarding = (type: EOnboarding) => {
    targetIDs: string[]
    startOnBoarding: () => void
}

export const useOnBoarding: UseOnBoarding = (type) => {
    const {startOnBoarding} = useOnBoardingContext()
    const targetIDs = useMemo(() => config[type].map(({ target }) => target), [type])
    const startOnBoardingByType = useCallback(() => {
        startOnBoarding(type)
    }, [type, startOnBoarding])
    return {
        startOnBoarding: startOnBoardingByType,
        targetIDs
    }
}


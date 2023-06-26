import { createContext } from "react";
import type { OnBoardingContextType } from './types'

export const OnBoardingContext = createContext<OnBoardingContextType | null>(null)

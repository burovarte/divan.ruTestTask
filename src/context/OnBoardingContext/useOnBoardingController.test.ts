/**
* @jest-environment jsdom
*/
import { renderHook } from "@testing-library/react";
import { useOnBoardingController } from "./useOnBoardingController"
import * as onBoardingConfig from "../../onBoardingConfig"
import { act } from "react-dom/test-utils";

// @ts-expect-error mocking constant
onBoardingConfig.config = {
    placement1: [
        {
            target: "id1",
            tooltip: {
                title: "***",
                content: "***",
                actionText: "***",
            },
            position: "left"
        },
        {
            target: "id2",
            tooltip: {
                title: "***",
                content: "***",
                actionText: "***",
            },
            position: "right"
        }
    ],
    placement2: [
        {
            target: "id3",
            tooltip: {
                title: "***",
                content: "***",
                actionText: "***",
            },
            position: "top"
        },
        {
            target: "id4",
            tooltip: {
                title: "***",
                content: "***",
                actionText: "***",
            },
            position: "bottom"
        },
        {
            target: "id5",
            tooltip: {
                title: "***",
                content: "***",
                actionText: "***",
            },
            position: "left"
        }
    ]
}


const getLocal = jest.fn().mockImplementation(() => undefined)
const setLocal = jest.fn()

describe("useOnBoardingController", () => {
    test("OnBoarding logic works as expected", () => {
        Object.defineProperty(window, 'localStorage', { value: {
            getItem: getLocal,
            setItem: setLocal,
        } });
        const {result} = renderHook(() => useOnBoardingController())
        /* It starts empty */
        expect(result.current.currentStep).toBe(undefined)
        expect(result.current.totalSteps).toBe(undefined)
        expect(result.current.currentTarget).toBe(undefined)
        expect(result.current.isActive).toBe(false)
        act(() => {
            result.current.startOnBoarding("placement1" as onBoardingConfig.EOnboarding)
        })
        expect(getLocal).toBeCalledWith("placement1")
        expect(setLocal).toBeCalledWith("placement1", "used")
        /* It picks first target */
        expect(result.current.currentStep).toBe(1)
        expect(result.current.totalSteps).toBe(2)
        expect(result.current.currentTarget).toBe("id1")
        expect(result.current.isActive).toBe(true)
        act(() => {
            result.current.onNext()
        })
        /* It picks next target */
        expect(result.current.currentStep).toBe(2)
        expect(result.current.currentTarget).toBe("id2")
        act(() => {
            result.current.onNext()
        })
        /* It closes on last target */
        expect(result.current.currentStep).toBe(undefined)
        expect(result.current.currentTarget).toBe(undefined)
        expect(result.current.totalSteps).toBe(undefined)
        expect(result.current.isActive).toBe(false)
        act(() => {
            result.current.startOnBoarding("placement2" as onBoardingConfig.EOnboarding)
        })
        /* It picks another placement */
        expect(result.current.currentStep).toBe(1)
        expect(result.current.totalSteps).toBe(3)
        expect(result.current.currentTarget).toBe("id3")
        expect(result.current.isActive).toBe(true)
        act(() => {
            result.current.onClose()
        })
        /* It closes on close */
        expect(result.current.currentStep).toBe(undefined)
        expect(result.current.currentTarget).toBe(undefined)
        expect(result.current.totalSteps).toBe(undefined)
        expect(result.current.isActive).toBe(false)
        /* It skips stored placements */
        getLocal.mockImplementationOnce(() => "used")
        act(() => {
            result.current.startOnBoarding("placement2" as onBoardingConfig.EOnboarding)
        })
        expect(getLocal).toBeCalledWith("placement2")
        expect(result.current.currentStep).toBe(undefined)
        expect(result.current.currentTarget).toBe(undefined)
        expect(result.current.totalSteps).toBe(undefined)
        expect(result.current.isActive).toBe(false)
    })
})
export enum EOnboarding {
    Main = "main",
}

export type OnBoardingData = {
	target: string;
	tooltip: {
		title: string;
		content: string;
		actionText: string;
	};
	position: "left" | "right" | "top" | "bottom";
}

export type OnBoardingConfig = Record<EOnboarding, OnBoardingData[]>

export const config: OnBoardingConfig = {
    [EOnboarding.Main]: [
        {
            target: "#target1",
            tooltip: {
                title: "Создай свой дизайн",
                content: "Для этой модели доступно еще 62 варианта обивки и 5 опций",
                actionText: "Понял принял",
            },
            position: "left"
        },
        {
            target: "#target2",
            tooltip: {
                title: "Все и сразу!",
                content: "Купи уже готовый диван и не парься ни с какими конструкторами",
                actionText: "Спасибо пожалуйста",
            },
            position: "right"
        }
    ],
}
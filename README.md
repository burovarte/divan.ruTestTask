# divan.ruTestTask

## Плюсы решения:

1. Данное решение имеет удобное API:

```tsx
const { targetIDs, startOnBoarding } = useOnBoarding(<placement>);
```

2. Позволяет легко использовать OnBoarding для любого компонента

```tsx
const OnBoardingTooltip = createOnBoardingTooltip(<placement>);

...

<OnBoardingTooltip target={targetIDs[0]}>
    <AnyComponent>
</OnBoardingTooltip>
```

3. Имеет возможности для масштабирования количества плейсментов

В `onBoardingConfig.ts` помещаются все подсказки, которые необходимо отобразить. В файле прописываются все подсказки для определенной цепочки. Таких цепочек может несколько.

Формат:

```tsx
export const config: OnBoardingConfig = {
	placement1: [
		{
			target: "id1",
			tooltip: {
				title: "***",
				content: "***",
				actionText: "***",
			},
			position: "left",
		},
		{
			target: "id2",
			tooltip: {
				title: "***",
				content: "***",
				actionText: "***",
			},
			position: "right",
		},
	],
	placement2: [
		{
			target: "id1",
			tooltip: {
				title: "***",
				content: "***",
				actionText: "***",
			},
			position: "top",
		},
	],
};
```

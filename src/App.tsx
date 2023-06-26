import "./App.css";
import { MainContent } from "./components/mainContent/MainContent";
import { OnBoardingProvider } from "./context/OnBoardingContext/OnBoardingProvider";

function App() {
	return (
		<OnBoardingProvider>
			<MainContent />
		</OnBoardingProvider>
	);
}

export default App;

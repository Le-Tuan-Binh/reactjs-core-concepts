import "./App.css";
import { Avatar } from "./components/Avatar";

function App() {
	const name = "tbin";
	const handleGetFullYear = () => {
		return new Date().getFullYear();
	};
	return (
		<>
			<div className="content">
				<Avatar />
				<p>My name is {name}</p>
				<p>This year is {handleGetFullYear()}</p>
			</div>
		</>
	);
}

export default App;

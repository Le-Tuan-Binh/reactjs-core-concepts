import "./App.css";
import { Banner, Contact, Profile } from "./components";

function App() {
	return (
		<>
			<div className="content">
				<h1>Vite with React</h1>
				<p>Start building amazing thing with React </p>
				<Profile />
				<Banner />
				<Contact />
			</div>
		</>
	);
}

export default App;

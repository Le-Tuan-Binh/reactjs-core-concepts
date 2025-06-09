import "./App.css";
import { Avatar } from "./components/Avatar";

function App() {
	return (
		<>
			<div
				className="content"
				style={{
					display: "flex",
					gap: "20px",
					alignItems: "center",
				}}
			>
				<Avatar
					image_url="https://images.unsplash.com/photo-1748939832727-a2f0abdff540?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					size={100}
				/>
				<Avatar
					image_url="https://images.unsplash.com/photo-1748939832727-a2f0abdff540?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					size={200}
				/>
				<Avatar
					image_url="https://images.unsplash.com/photo-1748939832727-a2f0abdff540?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					size={100}
				/>
			</div>
		</>
	);
}

export default App;

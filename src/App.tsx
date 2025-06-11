import "./App.css";
import UserList from "./components/UserList";

function App() {
	return (
		<>
			<div
				className="content"
				style={{
					display: "flex",
					gap: "20px",
					alignItems: "center",
					flexDirection: "column",
				}}
			>
				<UserList />
			</div>
		</>
	);
}

export default App;

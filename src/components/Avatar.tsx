const image_url =
	"https://images.unsplash.com/photo-1748939832727-a2f0abdff540?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const handleClickImage = () => {
	console.log("Click Me");
};
export function Avatar() {
	return (
		<img
			src={image_url}
			style={{
				width: "120px",
				height: "120px",
				borderRadius: "100px",
				objectFit: "cover",
			}}
			onClick={handleClickImage}
		/>
	);
}

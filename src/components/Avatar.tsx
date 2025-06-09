interface AvatarProps {
	image_url: string;
	size?: number;
	heading?: React.ReactNode;
	children?: React.ReactNode;
}

const handleClickImage = () => {
	console.log("Click Me");
};
export function Avatar({
	image_url,
	size = 300,
	heading,
	children,
}: AvatarProps) {
	return (
		<div
			style={{
				display: "flex",
				gap: "20px",
				alignItems: "center",
				justifyContent: "center",
				flexDirection: "column",
			}}
		>
			{heading}
			<img
				src={image_url}
				style={{
					width: size,
					height: size,
					borderRadius: "100px",
					objectFit: "cover",
				}}
				onClick={handleClickImage}
			/>
			{children}
		</div>
	);
}

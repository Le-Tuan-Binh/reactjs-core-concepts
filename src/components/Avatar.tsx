interface AvatarProps {
	image_url: string;
	size: number;
}

const handleClickImage = () => {
	console.log("Click Me");
};
export function Avatar(props: AvatarProps) {
	const { image_url, size } = props;
	return (
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
	);
}

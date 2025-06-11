export interface ToDoProps {
	title: string;
	isCompleted?: boolean;
	count?: number;
}
export default function ToDo({ title, isCompleted = false }: ToDoProps) {
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				gap: "10px",
			}}
		>
			{title}
			{/* {isCompleted ? `✨` : ``} */}
			{isCompleted && `✨`}
			{/* {!isCompleted && `✨`} */}
		</div>
	);
}

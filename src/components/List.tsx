export interface ListProps {}
export default function List() {
	const studentNames = [
		"John Smith",
		"Emma Johnson",
		"Michael Brown",
		"Olivia Davis",
		"William Miller",
		"Sophia Wilson",
		"James Anderson",
		"Isabella Taylor",
		"Benjamin Thomas",
		"Mia Moore",
		"Lucas Jackson",
		"Charlotte White",
		"Henry Harris",
		"Amelia Martin",
		"Alexander Thompson",
		"Emily Garcia",
		"Daniel Martinez",
		"Ava Robinson",
		"Matthew Clark",
		"Harper Lewis",
	];

	return (
		<div>
			{studentNames.map((value, index) => {
				const activeStudent = index % 2 == 0 ? "" : "red";
				return (
					<div
						key={`${index}-${index}`}
						className={`item ${activeStudent}`}
					>
						{value}
					</div>
				);
			})}
		</div>
	);
}

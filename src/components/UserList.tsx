export interface UserListProps {}
export default function UserList(_props: UserListProps) {
	const users = [
		{
			id: "USR2025A1",
			name: "Emma Johnson",
			age: 22,
			level: "university",
		},
		{
			id: "USR2025B3",
			name: "Liam Smith",
			age: 25,
			level: "university",
		},
		{
			id: "USR2025C7",
			name: "Olivia Brown",
			age: 20,
			level: "college",
		},
		{
			id: "USR2025D5",
			name: "Noah Davis",
			age: 24,
			level: "college",
		},
		{
			id: "USR2025E2",
			name: "Ava Wilson",
			age: 21,
			level: "university",
		},
	];
	const usersUniversity = users.filter((user) => user.level === "university");
	const usersCollege = users.filter((user) => user.level === "college");

	return (
		<div>
			<h2>University</h2>
			{usersUniversity.map((user) => (
				<div key={user.id}>
					{user.name} - {user.level}
				</div>
			))}
			<h2>College</h2>
			{usersCollege.map((user) => (
				<div key={user.id}>
					{user.name} - {user.level}
				</div>
			))}
		</div>
	);
}

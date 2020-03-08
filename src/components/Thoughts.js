export default function Thoughts(props) {
	return (
		<ul>
			{props.thoughts &&
				props.thoughts.map(thought => (
					<li key={thought._id}>{thought.message}</li>
				))}
		</ul>
	);
}

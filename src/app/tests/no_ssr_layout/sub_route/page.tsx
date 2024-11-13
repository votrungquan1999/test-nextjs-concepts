import RandomDisplay from "./RandomDisplay";

export default function NoSSRLayoutSubRoutePage() {
	return (
		<div className="flex flex-col gap-4 items-center">
			<h2 className="text-2xl font-bold">NoSSRLayout Sub-Route Page</h2>

			<h3 className="text-xl font-bold">Random Display</h3>

			<RandomDisplay />
		</div>
	);
}

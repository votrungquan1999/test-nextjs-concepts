import Link from "next/link";

export default function NoSSRLayoutPage() {
	return (
		<div className="flex flex-col gap-4 items-center">
			<h2 className="text-2xl font-bold">NoSSRLayout Page</h2>

			<Link
				href="/tests/no_ssr_layout/sub_route"
				className="text-blue-500 hover:text-blue-600 underline"
			>
				Sub Route
			</Link>
		</div>
	);
}

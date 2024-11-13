import RandomProvider from "./RandomProvider";

export default function NoSSRLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	console.log("render on server");

	return (
		<div className="flex flex-col gap-4 items-center">
			<h1 className="text-2xl font-bold">NoSSR Layout</h1>

			<RandomProvider>{children}</RandomProvider>
		</div>
	);
}

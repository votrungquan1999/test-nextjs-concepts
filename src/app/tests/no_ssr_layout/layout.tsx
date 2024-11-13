// import DynamicRandomProvider from "./DynamicRandomProvider";
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

			{/* don't use this since it will create thousands of random values/providers on client */}
			{/* uncomment this to see the unexpected behavior */}
			{/* <DynamicRandomProvider>{children}</DynamicRandomProvider> */}

			<RandomProvider>{children}</RandomProvider>
		</div>
	);
}

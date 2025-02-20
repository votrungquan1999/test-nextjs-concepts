"use client";

import { Suspense, use, useState } from "react";
import { doSomething } from "./action_doSomething";

export default function Input() {
	const [promise, setPromise] = useState<Promise<string> | null>(null);

	return (
		<div className="flex flex-col gap-4 items-center">
			<input
				type="text"
				onChange={(e) => {
					const value = e.target.value;
					setPromise(doSomething(value));
				}}
				className="border border-gray-300 rounded-md p-2"
			/>

			<Suspense fallback={<div>Loading...</div>}>
				<DisplayState promise={promise} />
			</Suspense>
		</div>
	);
}

function DisplayState({ promise }: { promise: Promise<string> | null }) {
	if (!promise) return <div>No promise</div>;
	const something = use(promise);

	return <div>{something}</div>;
}

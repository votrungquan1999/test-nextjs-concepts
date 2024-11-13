"use client";

import { createContext, useContext } from "react";
import NoSSR from "src/components/NoSSR";

const RandomContext = createContext<number | null>(null);

function RandomProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const random = Math.random();

	console.log("RandomProvider", random);

	return (
		<RandomContext.Provider value={random}>{children}</RandomContext.Provider>
	);
}

// export default RandomProvider;

export default NoSSR(RandomProvider);

export function useRandom() {
	return useContext(RandomContext);
}

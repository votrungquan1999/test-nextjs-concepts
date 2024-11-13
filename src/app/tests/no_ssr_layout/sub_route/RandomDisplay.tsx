"use client";

// import NoSSR from "src/components/NoSSR";
import { useRandom } from "../RandomProvider";

function RandomDisplay() {
	const random = useRandom();

	// this only log once, with the random value generated on the client
	// if this component is ssr, the random should be null, since the random value is only injected on the client
	// => this piece of code is only render in client, not ssr
	console.log("RandomDisplay", random);

	return <div>{random}</div>;
}

export default RandomDisplay;

// export default NoSSR(RandomDisplay);

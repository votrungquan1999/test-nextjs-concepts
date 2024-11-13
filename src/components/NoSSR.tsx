import type { ComponentType } from "react";
import { useEffect, useState } from "react";

/**
 * NoSSR
 * in development mode, this will use useEffect which is not recommended.
 * However, throwing error to prevent server render will make HMR to stop working properly.
 *
 */

export default function NoSSR<Props>(
	Component: ComponentType<Props>,
): ComponentType<Props & JSX.IntrinsicAttributes> {
	function WrappedDevelopment(p: Props & JSX.IntrinsicAttributes) {
		const [mounted, setMounted] = useState(false);

		useEffect(() => {
			setMounted(true);
		}, []);

		if (!mounted) {
			return null;
		}

		console.log("Start rendering on client");

		return <Component {...p} />;
	}

	WrappedDevelopment.displayName = `NoSSR(${Component.displayName || Component.name})`;

	function WrappedProduction(p: Props & JSX.IntrinsicAttributes) {
		if (typeof window !== "object") {
			throw new Error(
				`${Component.displayName} can only be rendered in the browser`,
			);
		}
		return <Component {...p} />;
	}

	WrappedProduction.displayName = `NoSSR(${Component.displayName || Component.name})`;
	return process.env.NODE_ENV === "production"
		? WrappedProduction
		: WrappedDevelopment;
}

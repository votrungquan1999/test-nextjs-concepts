"use client";

import Link from "next/link";

export default function Home() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
			<div className="text-center">
				<h1 className="text-4xl font-bold mb-6">Welcome to Testing Platform</h1>
			</div>

			<div className="flex flex-col gap-4 items-center">
				<h2 className="text-2xl font-bold">Start Testing</h2>

				<Link
					href="/tests/no_ssr_layout"
					className="text-blue-500 hover:text-blue-600 underline"
				>
					No SSR in layout
				</Link>

				<Link
					href="/tests/react_use_api"
					className="text-blue-500 hover:text-blue-600 underline"
				>
					try react &ldquo;use&rdquo; API
				</Link>

				<Link
					href="/tests/unauthorized"
					className="text-blue-500 hover:text-blue-600 underline"
				>
					Unauthorized Page
				</Link>
			</div>
		</div>
	);
}

"use client";

import dynamic from "next/dynamic";

const DynamicRandomProvider = dynamic(() => import("./RandomProvider"), {
	ssr: false,
});

export default DynamicRandomProvider;

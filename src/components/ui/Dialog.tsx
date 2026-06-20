"use client";

import { CircleX } from "lucide-react";
import { useEffect } from "react";

type DialogProps = {
	open: boolean;
	onClose: () => void;
	children: React.ReactNode;
};

export default function Dialog({ open, onClose, children }: DialogProps) {
	useEffect(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);

	if (!open) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center">
			{/* Backdrop — blocks all interaction with the page behind */}
			<div className="fixed inset-0 bg-gray-800/50" onClick={onClose} />
			{/* Dialog content */}
			<div className="relative z-10 m-auto h-fit rounded-xl w-[min(500px,100vw-2rem)] bg-white">
				<div className="flex flex-row justify-between mb-4 pt-2 px-5">
					<span className="" />
					<button
						onClick={onClose}
						className=" inline-flex items-center mb-2 py-1 px-2 cursor-pointer rounded border-none w-8 h-8 font-bold bg-red-600 text-white"
					>
						<CircleX />
					</button>
				</div>
				<div className="w-full border-0 flex flex-col">
					{children}
				</div>
			</div>
		</div>
	);
}

"use client";

import { indonesianMenu, malaysianMenu, pinoyMenu } from "@/src/assets";
import Image, { type StaticImageData } from "next/image";
import { Utensils, X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type Menu = {
	key: string;
	country: string;
	dish: string;
	image: StaticImageData;
};

const menus: Menu[] = [
	{
		key: "indonesian",
		country: "Indonesia",
		dish: "Warung Pulang Sebentar",
		image: indonesianMenu,
	},
	{
		key: "malaysian",
		country: "Malaysia",
		dish: "Malaysian Menu",
		image: malaysianMenu,
	},
	{
		key: "pinoy",
		country: "Philippines",
		dish: "Pinoy Menu",
		image: pinoyMenu,
	},
];

const MIN_ZOOM = 1;
const MAX_ZOOM = 4;
const clampZoom = (zoom: number) =>
	Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, Math.round(zoom * 100) / 100));

function CulturalDishesMenu() {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);
	const [zoom, setZoom] = useState(1);
	const [pan, setPan] = useState({ x: 0, y: 0 });

	const viewportRef = useRef<HTMLDivElement>(null);
	const stageRef = useRef<HTMLDivElement>(null);

	const isOpen = activeIndex !== null;
	const activeMenu = activeIndex !== null ? menus[activeIndex] : null;

	const close = useCallback(() => {
		setActiveIndex(null);
		setZoom(1);
		setPan({ x: 0, y: 0 });
	}, []);

	const open = (index: number) => {
		setActiveIndex(index);
		setZoom(1);
		setPan({ x: 0, y: 0 });
	};

	const step = (delta: number) => {
		setActiveIndex((current) => {
			if (current === null) return current;
			return (current + delta + menus.length) % menus.length;
		});
		setZoom(1);
		setPan({ x: 0, y: 0 });
	};

	const clampPan = useCallback((x: number, y: number, nextZoom: number) => {
		const view = viewportRef.current;
		const stage = stageRef.current;
		if (!view || !stage) return { x, y };
		const maxX = Math.max(0, (stage.offsetWidth * nextZoom - view.clientWidth) / 2 + 40);
		const maxY = Math.max(0, (stage.offsetHeight * nextZoom - view.clientHeight) / 2 + 40);
		return {
			x: Math.min(maxX, Math.max(-maxX, x)),
			y: Math.min(maxY, Math.max(-maxY, y)),
		};
	}, []);

	const stepZoom = (delta: number) => {
		setZoom((current) => clampZoom(current + delta));
	};

	const resetZoom = () => {
		setZoom(1);
		setPan({ x: 0, y: 0 });
	};

	const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
		event.preventDefault();
		setZoom((current) => clampZoom(current * (event.deltaY < 0 ? 1.12 : 1 / 1.12)));
	};

	const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
		const view = viewportRef.current;
		const stage = stageRef.current;
		if (!view || !stage) return;
		event.preventDefault();
		const startX = event.clientX;
		const startY = event.clientY;
		const originX = pan.x;
		const originY = pan.y;
		view.style.cursor = "grabbing";
		let latest = { x: originX, y: originY };

		const move = (ev: PointerEvent) => {
			latest = clampPan(originX + (ev.clientX - startX), originY + (ev.clientY - startY), zoom);
			stage.style.transform = `translate(${latest.x}px, ${latest.y}px) scale(${zoom})`;
		};
		const up = () => {
			view.style.cursor = "grab";
			setPan(latest);
			window.removeEventListener("pointermove", move);
			window.removeEventListener("pointerup", up);
		};
		window.addEventListener("pointermove", move);
		window.addEventListener("pointerup", up);
	};

	useEffect(() => {
		if (!isOpen) return;

		document.body.style.overflow = "hidden";
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") close();
		};
		document.addEventListener("keydown", handleKeyDown);

		return () => {
			document.body.style.overflow = "";
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [isOpen, close]);

	return (
		<section className="rounded-3xl border border-teal-200 bg-white/80 p-8 shadow-lg backdrop-blur-sm md:p-10">
			<div className="mb-8 flex flex-col items-center gap-2 text-center">
				<div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-cyan-600">
					<Utensils className="h-7 w-7 text-white" />
				</div>
				<h2 className="text-2xl font-bold text-gray-700 md:text-3xl">
					Cultural Dishes Menu
				</h2>
				<p className="max-w-xl text-base leading-relaxed text-gray-600">
					These kitchens are cooking for the summit. Tap a menu to
					see the full dishes and prices before you preorder.
				</p>
			</div>

			<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
				{menus.map((menu, index) => (
					<button
						key={menu.key
							
						}
						type="button"
						onClick={() => open(index)}
						className="flex flex-col overflow-hidden rounded-2xl border border-teal-200 bg-white text-left shadow-md transition hover:-translate-y-1 hover:shadow-xl"
					>
						<div className="relative h-56 w-full overflow-hidden bg-gray-100">
							<Image
								src={menu.image}
								alt={`${menu.country} menu`}
								fill
								className="object-cover object-top"
							/>
						</div>
						<div className="flex items-center justify-between gap-3 px-5 py-4">
							<div className="flex flex-col gap-0.5">
								<span className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-600">
									{menu.country}
								</span>
								<span className="text-lg font-bold text-gray-700">
									{menu.dish}
								</span>
							</div>
							<span className="flex-shrink-0 text-sm font-semibold text-cyan-600">
								View
							</span>
						</div>
					</button>
				))}
			</div>

			{isOpen && activeMenu
				? createPortal(
						<div className="fixed inset-0 z-[60] bg-gray-900/95">
							<div
								ref={viewportRef}
								onWheel={handleWheel}
								onPointerDown={handlePointerDown}
								className="absolute inset-0 flex cursor-grab items-center justify-center overflow-hidden pb-24 pt-24 [touch-action:none]"
							>
								<div
									ref={stageRef}
									style={{
										transformOrigin: "center center",
										transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
									}}
								>
									<Image
										src={activeMenu.image}
										alt={`${activeMenu.country} menu`}
										draggable={false}
										priority
										className="block h-auto max-h-[calc(100vh-192px)] w-auto max-w-screen select-none"
									/>
								</div>
							</div>

							<div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-center gap-4 bg-gradient-to-b from-black/60 to-transparent px-5 py-3.5">
								<button
									type="button"
									onClick={close}
									aria-label="Back"
									className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full border-none bg-white/10 text-white hover:bg-white/20"
								>
									<X className="h-5 w-5" />
								</button>
								<span className="text-base font-semibold text-white">
									{activeMenu.country} — {activeMenu.dish}
								</span>
							</div>

							<div className="absolute left-5 top-1/2 -translate-y-1/2">
								<button
									type="button"
									onClick={() => step(-1)}
									aria-label="Previous menu"
									className="inline-flex h-14 w-14 items-center justify-center rounded-full border-none bg-white text-gray-700 hover:bg-gray-200"
								>
									<ChevronLeft className="h-6 w-6" />
								</button>
							</div>
							<div className="absolute right-5 top-1/2 -translate-y-1/2">
								<button
									type="button"
									onClick={() => step(1)}
									aria-label="Next menu"
									className="inline-flex h-14 w-14 items-center justify-center rounded-full border-none bg-white text-gray-700 hover:bg-gray-200"
								>
									<ChevronRight className="h-6 w-6" />
								</button>
							</div>

							<div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white/10 px-3 py-2 backdrop-blur-sm">
								<button
									type="button"
									onClick={() => stepZoom(-0.25)}
									aria-label="Zoom out"
									className="inline-flex h-9 w-9 items-center justify-center rounded-full border-none bg-white/10 text-white hover:bg-white/20"
								>
									<ZoomOut className="h-[18px] w-[18px]" />
								</button>
								<button
									type="button"
									onClick={resetZoom}
									className="h-9 min-w-[64px] rounded-full border-none bg-white/10 px-2.5 font-mono text-[13px] font-semibold text-white hover:bg-white/20"
								>
									{Math.round(zoom * 100)}%
								</button>
								<button
									type="button"
									onClick={() => stepZoom(0.25)}
									aria-label="Zoom in"
									className="inline-flex h-9 w-9 items-center justify-center rounded-full border-none bg-white/10 text-white hover:bg-white/20"
								>
									<ZoomIn className="h-[18px] w-[18px]" />
								</button>
							</div>
						</div>,
						document.body,
					)
				: null}
		</section>
	);
}

export default CulturalDishesMenu;

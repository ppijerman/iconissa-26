"use client";

import { useEffect, useRef, useState } from "react";
import { iconissaLogo } from "@/src/assets";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavigationLink = {
  href: string;
  label: string;
};

type NavigationGroup = {
  label: string;
  links: NavigationLink[];
};

type NavigationItem = NavigationLink | NavigationGroup;

type NavigationBarProps = {
  reserveSpace?: boolean;
  showAfterHero?: boolean;
};

const navigationItems: NavigationItem[] = [
  {
    href: "/",
    label: "Home",
  },
  {
    label: "Events",
    links: [
      {
        href: "/iconic-2026",
        label: "ICONIC 2026",
      },
      {
        href: "/sea-student-summit-2026",
        label: "Sea Student Summit 2026",
      },
      {
        href: "/ppij-70th-anniversary",
        label: "PPI Jerman 70th Anniversary",
      },
    ],
  },
];

function isNavigationLinkActive(pathname: string, navigationLink: NavigationLink): boolean {
  if (navigationLink.href === "/") {
    return pathname === navigationLink.href;
  }

  return pathname.startsWith(navigationLink.href);
}

function isNavigationItemActive(pathname: string, navigationItem: NavigationItem): boolean {
  if ("href" in navigationItem) {
    return isNavigationLinkActive(pathname, navigationItem);
  }

  return navigationItem.links.some((navigationLink) =>
    isNavigationLinkActive(pathname, navigationLink),
  );
}

function NavigationBar({
  reserveSpace = true,
  showAfterHero = false,
}: NavigationBarProps) {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [isEventsOpen, setIsEventsOpen] = useState<boolean>(false);
  const previousScrollYRef = useRef<number>(0);
  const eventsDropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    previousScrollYRef.current = window.scrollY;

    function handleScroll() {
      const currentScrollY = window.scrollY;
      const revealThreshold = showAfterHero
        ? Math.max(window.innerHeight - 96, 0)
        : 0;
      const hasPassedRevealThreshold = currentScrollY >= revealThreshold;
      const isNearTop = currentScrollY < 24;
      const scrollDelta = currentScrollY - previousScrollYRef.current;
      const isScrollingUp = scrollDelta < -8;
      const isScrollingDown = scrollDelta > 8;

      if (showAfterHero && !hasPassedRevealThreshold) {
        setIsVisible(false);
        previousScrollYRef.current = currentScrollY;
        return;
      }

      if (showAfterHero && previousScrollYRef.current < revealThreshold && hasPassedRevealThreshold) {
        setIsVisible(true);
        previousScrollYRef.current = currentScrollY;
        return;
      }

      if ((!showAfterHero && isNearTop) || isScrollingUp) {
        setIsVisible(true);
      }

      if (
        isScrollingDown &&
        (!showAfterHero || currentScrollY > revealThreshold + 80) &&
        !isNearTop
      ) {
        setIsVisible(false);
      }

      previousScrollYRef.current = currentScrollY;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showAfterHero]);

  useEffect(() => {
    setIsEventsOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!eventsDropdownRef.current?.contains(event.target as Node)) {
        setIsEventsOpen(false);
      }
    }

    function handleEscapeKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsEventsOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  return (
    <>
      {reserveSpace ? <div className="h-[73px] md:h-[81px]" aria-hidden="true" /> : null}
      <nav
        className={`fixed inset-x-0 top-0 z-50 border-b border-emerald-100 bg-white/90 shadow-sm backdrop-blur-md transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
          <Link href="/" className="flex items-center">
            <Image
              src={iconissaLogo}
              alt="ICONISSA"
              className="h-10 w-auto object-contain md:h-12"
              priority
            />
          </Link>

          <div className="flex items-center gap-2 md:gap-3">
            {navigationItems.map((navigationItem) => {
              const isActive = isNavigationItemActive(pathname, navigationItem);
              const baseClassName = `rounded-full px-4 py-2 text-sm font-semibold transition-colors md:px-5 ${
                isActive
                  ? "bg-emerald-600 text-white"
                  : "text-emerald-800 hover:bg-emerald-50"
              }`;

              if ("href" in navigationItem) {
                return (
                  <Link
                    key={navigationItem.href}
                    href={navigationItem.href}
                    className={baseClassName}
                  >
                    {navigationItem.label}
                  </Link>
                );
              }

              return (
                <div
                  key={navigationItem.label}
                  ref={eventsDropdownRef}
                  className="relative"
                  onMouseEnter={() => {
                    setIsEventsOpen(true);
                  }}
                  onMouseLeave={() => {
                    setIsEventsOpen(false);
                  }}
                >
                  <button
                    type="button"
                    className={`${baseClassName} inline-flex items-center gap-2`}
                    aria-expanded={isEventsOpen}
                    aria-haspopup="menu"
                    aria-label="Toggle Events menu"
                    onFocus={() => {
                      setIsEventsOpen(true);
                    }}
                    onClick={() => {
                      setIsEventsOpen(!isEventsOpen);
                    }}
                  >
                    <span>{navigationItem.label}</span>
                    <svg
                      className={`h-4 w-4 transition-transform ${
                        isEventsOpen ? "rotate-180" : ""
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.51a.75.75 0 01-1.08 0l-4.25-4.51a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  {isEventsOpen ? (
                    <div
                      className="absolute right-0 top-full min-w-[240px] pt-2"
                      role="menu"
                      aria-label="Events submenu"
                    >
                      <div className="flex flex-col overflow-hidden rounded-2xl border border-emerald-100 bg-white p-2 shadow-lg">
                        {navigationItem.links.map((navigationLink) => {
                          const isSubLinkActive = isNavigationLinkActive(pathname, navigationLink);

                          return (
                            <Link
                              key={navigationLink.href}
                              href={navigationLink.href}
                              className={`rounded-xl px-4 py-3 text-sm transition-colors ${
                                isSubLinkActive
                                  ? "bg-emerald-600 text-white"
                                  : "text-emerald-900 hover:bg-emerald-50"
                              }`}
                              role="menuitem"
                              onClick={() => {
                                setIsEventsOpen(false);
                              }}
                            >
                              {navigationLink.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavigationBar;

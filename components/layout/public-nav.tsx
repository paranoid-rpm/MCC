"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { assets } from "@/lib/assets";
import { siteCopy } from "@/lib/copy";

const navItems = [
  { href: "/", label: siteCopy.nav[0] },
  { href: "/kittens", label: siteCopy.nav[1] },
  { href: "/maine-coon", label: siteCopy.nav[2] },
  { href: "/breeders", label: siteCopy.nav[3] },
  { href: "/contacts", label: siteCopy.nav[4] }
];

export function PublicNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-[var(--mcc-line-soft)] bg-[rgba(5,5,5,.72)] text-[var(--mcc-text)] backdrop-blur-xl">
      <nav className="container-page flex h-16 items-center justify-between gap-5">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src={assets.logo}
            alt={siteCopy.brand}
            width={248}
            height={60}
            priority
            className="h-10 w-auto"
          />
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-[color:rgba(245,245,245,.72)] transition hover:bg-white/10 hover:text-[var(--mcc-text)]"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-lg border border-[var(--mcc-line)] bg-white/[0.04] text-[var(--mcc-text)] md:hidden"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span
            className="h-6 w-6 bg-current"
            style={{
              WebkitMask: `url(${open ? assets.icons.close : assets.icons.menu}) center / contain no-repeat`,
              mask: `url(${open ? assets.icons.close : assets.icons.menu}) center / contain no-repeat`
            }}
          />
        </button>
      </nav>
      {open ? (
        <div className="container-page pb-4 md:hidden">
          <div className="rounded-xl border border-[var(--mcc-line)] bg-[rgba(11,11,11,.96)] p-2 shadow-[0_22px_70px_rgba(0,0,0,.42)]">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center rounded-lg px-4 text-sm font-medium text-[color:rgba(245,245,245,.78)] transition hover:bg-white/10 hover:text-[var(--mcc-text)]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}

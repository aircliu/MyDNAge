// src/components/navbar.tsx
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NAV = [
  { label: "Home", path: "/home" },
  { label: "myDNAge", path: "/myDNAge" },
  { label: "myDogDNAge", path: "/myDogDNAge" },
  { label: "How It Works", path: "/how-it-works" },
  { label: "Our Science", path: "/our-science" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50">
      {/* ─── Mobile top-right bar ─── */}
      <div className="flex justify-end md:hidden">
        <div
          className="inline-flex items-center gap-2
                        bg-harmony-500 text-white
                        rounded-bl-2xl
                        shadow-[0_0_20px_rgba(21,136,131,0.20)]"
        >
          <button
            onClick={() => setOpen(true)}
            className="p-2"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* ─── Desktop bar (md+) ─── */}
      <nav
        className="hidden md:flex items-center justify-between
                   w-fit ml-auto
                   pl-8 pr-6 py-5
                   bg-harmony-500 text-white
                   rounded-bl-[1.625rem]
                   shadow-[0_0_20px_rgba(21,136,131,0.20)]"
      >
        <ul className="flex items-center gap-6">
          {NAV.map(({ label, path }) => (
            <li key={path}>
              <NavLink
                to={path}
                end
                className={({ isActive }) =>
                  `font-semibold transition-colors whitespace-nowrap ${
                    isActive
                      ? "text-fresh-500"
                      : "text-white hover:text-fresh-500"
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* ─── Mobile drawer ─── */}
      <div
        className={`
          fixed inset-y-0 right-0 z-40
          w-3/4 max-w-xs
          bg-harmony-500
          transform ${open ? "translate-x-0" : "translate-x-full"}
          transition-transform duration-300 ease-in-out
          md:hidden
        `}
      >
        {/* top bar with close */}
        <div className="flex justify-between items-center px-6 py-4">
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="p-2"
          >
            <X size={24} className="text-white" />
          </button>
        </div>

        {/* links */}
        <ul className="flex flex-col gap-4 px-6">
          {NAV.map(({ label, path }) => (
            <li key={path} className="border-b border-white/40 pb-2">
              <NavLink
                to={path}
                end
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block text-lg font-semibold ${
                    isActive
                      ? "text-fresh-500"
                      : "text-white hover:text-fresh-300"
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

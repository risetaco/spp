import { useEffect, useState } from "react";
import { cn } from "../utils";
import type { Menu } from "../types";
import { useTransition } from "../hooks/useTransition";

const NavbarItem = ({ activePath, menu }: { activePath: string; menu: Menu }) => {
  console.log("activePath", activePath, menu.url);
  switch (menu.type) {
    case "separator":
      return <hr className="border-t border-gray-200 py-2" />;
    case "button":
      return (
        <li>
          <a href={menu.url} className="block text-white bg-primary rounded-full py-2 px-4 text-center">
            {menu.title}
          </a>
        </li>
      );
    default:
      return (
        <li
          className={cn(
            "text-black hover:text-primary p-3 cursor-pointer",
            "hover:text-primary hover:rounded hover:bg-[#fff4f4]",
            { "text-primary rounded bg-[#fff4f4]": activePath === menu.url }
          )}
        >
          <a href={menu.url} className="w-full h-full block">
            {menu.title}
          </a>
        </li>
      );
  }
};

const NavbarMenu = ({ menus }: { menus: Menu[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { shouldMount } = useTransition(isOpen, 250);

  const activePath = typeof window !== "undefined" ? window.location.pathname : "";

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  return (
    <>
      <button onClick={handleClick} className="flex flex-col justify-center items-center block md:hidden">
        <span
          className={cn(
            "bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm",
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          )}
        />
        <span
          className={cn(
            "bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5",
            isOpen ? "opacity-0" : "opacity-100"
          )}
        />
        <span
          className={cn(
            "bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm",
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          )}
        />
      </button>
      {shouldMount && (
        <>
          <div
            className={cn(
              "fixed top-16 left-0 w-full h-full bg-black  transition-all duration-300 ease-out",
              isOpen ? "bg-opacity-50" : "bg-opacity-0"
            )}
          />
          <nav
            className={cn(
              "fixed top-16 right-0 h-full w-80 bg-white shadow-md",
              isOpen ? "block animate-slideIn" : "block animate-slideOut"
            )}
          >
            <ul className="p-4">
              {menus.map((menu, index) => (
                <NavbarItem activePath={activePath} menu={menu} key={index} />
              ))}
            </ul>
          </nav>
        </>
      )}
    </>
  );
};

export default NavbarMenu;

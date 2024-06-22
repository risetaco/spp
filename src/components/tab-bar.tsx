import { useEffect, useRef, useState } from "react";
import { cn } from "../utils";

type TabKey = string | number;

type TabBarProps = {
  header: { slot: string; label: string }[];
  defaultActiveTab?: TabKey;
  fullWidth?: boolean;
  center?: boolean;
  headerContainerClassName?: string;
  headerButtonClassName?: string;
  [key: string]: any; // This allows astro <slot> to be passed as props
};

const TabBar = (props: TabBarProps) => {
  const { header, defaultActiveTab, fullWidth, center, headerContainerClassName, headerButtonClassName, ...rest } =
    props;
  const [active, setActive] = useState<TabKey>(defaultActiveTab ?? header[0].slot);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      const activeTabElement = headerRef.current.querySelector(`button[data-value="${active}"]`);

      if (activeTabElement) {
        const activeTabElementRect = activeTabElement.getBoundingClientRect();
        const headerRect = headerRef.current.getBoundingClientRect();

        if (activeTabElementRect.left < headerRect.left) {
          const scrollLeft = activeTabElementRect.left - headerRect.left;
          headerRef.current.scrollTo({ left: scrollLeft, behavior: "smooth" });
        } else if (activeTabElementRect.right > headerRect.right) {
          const scrollLeft = activeTabElementRect.right - headerRect.right;
          headerRef.current.scrollTo({ left: scrollLeft, behavior: "smooth" });
        }
      }
    }
  }, [active]);

  return (
    <div>
      <div
        ref={headerRef}
        className={cn(
          "border-b border-gray-200 flex overflow-auto",
          { "justify-between": fullWidth },
          { "justify-center": center },
          headerContainerClassName
        )}
      >
        {header?.map((item, index) => (
          <button
            key={index}
            data-value={item.slot}
            onClick={() => setActive(item.slot)}
            className={cn(
              { "py-2 px-4 hover:bg-gray-100 border-b-2 border-transparent ": true },
              { "transition-all duration-300 ease-in-out": true },
              { "whitespace-nowrap": true },
              { "border-primary text-primary": item.slot === active },
              { "w-full": fullWidth },
              headerButtonClassName
            )}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div>{rest[active]}</div>
    </div>
  );
};

export default TabBar;

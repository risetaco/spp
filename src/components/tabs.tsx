import { useEffect, useRef, useState } from "react";
import { cn } from "../utils";

type ShowContent = "one" | "full" | "none";
type TabKey = string | number;

interface Tab {
  key: string | number;
  title: string;
  content: any;
}

export interface TabProps {
  tabs: Tab[];
  showContent?: ShowContent;
  defaultActiveTab?: TabKey;
  fullWidth?: boolean;
  center?: boolean;
  headerContainerClassName?: string;
  headerButtonClassName?: string;
  value?: TabKey;
  onChange?: (value: TabKey) => void;
}

const Content = ({ show, tabs, activeTab }: { show: ShowContent; tabs: Tab[]; activeTab: TabKey }) => {
  if (show === "one") {
    return tabs.find((tab) => tab.key === activeTab)?.content ?? null;
  }

  if (show === "full") {
    return (
      <div>
        {tabs.map((tab) => (
          <div key={tab.key} style={{ display: tab.key === activeTab ? "block" : "none" }}>
            {tab.content}
          </div>
        ))}
      </div>
    );
  }

  return null;
};

const Tabs = (props: TabProps) => {
  const {
    tabs,
    defaultActiveTab,
    fullWidth,
    center,
    value,
    headerContainerClassName,
    headerButtonClassName,
    onChange,
  } = props;
  const [activeTab, setActiveTab] = useState<TabKey>(value ?? defaultActiveTab ?? tabs[0].key);
  const headerRef = useRef<HTMLDivElement>(null);

  const handleTabClick = (index: TabKey) => {
    onChange?.(index);
    setActiveTab(index);
  };

  useEffect(() => {
    if (headerRef.current) {
      const activeTabElement = headerRef.current.querySelector(`button[data-value="${activeTab}"]`);

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
  }, [activeTab]);

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
        {tabs.map((tab) => (
          <button
            key={tab.key}
            data-value={tab.key}
            onClick={() => handleTabClick(tab.key)}
            className={cn(
              { "py-2 px-4 hover:bg-gray-100 border-b-2 border-transparent ": true },
              { "transition-all duration-300 ease-in-out": true },
              { "whitespace-nowrap": true },
              { "border-primary text-primary": tab.key === activeTab },
              { "w-full": fullWidth },
              headerButtonClassName
            )}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <Content show={props.showContent ?? "one"} tabs={tabs} activeTab={activeTab} />
    </div>
  );
};

export default Tabs;

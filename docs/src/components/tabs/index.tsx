"use client";

import "./index.css";

import { motion } from "framer-motion";
import { useState } from "react";

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

export const Tabs = ({ tabs }: TabsProps) => {
  const [activeTabId, setActiveTabId] = useState(tabs[0].id);

  const handleTabChange = (id: string) => {
    setActiveTabId(id);
  };

  return (
    <div className="tabs">
      <div className="list" role="tablist">
        {tabs.map((tab) => (
          <button
            type="button"
            key={tab.id}
            data-tab
            className={`tab${activeTabId === tab.id ? " selected" : ""}`}
            onClick={() => handleTabChange(tab.id)}
            role="tab"
            tabIndex={activeTabId === tab.id ? 0 : -1}
            aria-selected={activeTabId === tab.id}
          >
            {activeTabId === tab.id && (
              <motion.span
                className="indicator"
                layoutId="bubble"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="label">{tab.label}</span>
          </button>
        ))}
      </div>
      <div className="panels">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className="panel"
            hidden={activeTabId !== tab.id}
            role="tabpanel"
            aria-hidden={activeTabId !== tab.id}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

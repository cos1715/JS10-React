import { ReactNode, useEffect, useState } from "react";
import { TabItem, ITabItem } from "./tab-item";
import styles from "./tab.module.scss";

export interface ITabConfig {
  id: string;
  title: ITabItem["title"];
  content: ReactNode;
}

interface ITabs {
  defaultActive?: ITabConfig["id"];
  tabs: ITabConfig[];
}

export const Tabs = ({ defaultActive, tabs }: ITabs) => {
  const [activeTab, setActiveTab] = useState(defaultActive);
  const [activeContent, setActiveContent] = useState<ReactNode>();

  useEffect(() => {
    const tab = tabs.find((tab) => tab.id === activeTab);
    setActiveContent(tab?.content || null);
  }, [activeTab, tabs]);

  return (
    <div>
      <div className={styles["tab-container"]}>
        {tabs.map((tab) => (
          <TabItem
            key={tab.id}
            id={tab.id}
            active={tab.id === activeTab}
            title={tab.title}
            onClick={() => {
              setActiveTab(tab.id);
            }}
          />
        ))}
      </div>
      {activeContent}
    </div>
  );
};

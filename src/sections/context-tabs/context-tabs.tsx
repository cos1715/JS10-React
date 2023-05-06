import { ReactNode, useContext } from "react";
import { Tabs, ITabConfig } from "components/tabs";
import { TimerInterval, TimerTimeout } from "components/timer";
import { Age } from "providers/age";

interface IContextData {
  children: ReactNode;
}

const ContextData = ({ children }: IContextData) => {
  const { age } = useContext(Age);

  return (
    <div>
      {children}
      <p>context data: {age}</p>
    </div>
  );
};

const tabsConfig: ITabConfig[] = [
  {
    id: "1",
    title: "Timer Interval",
    content: (
      <ContextData>
        <TimerInterval />
      </ContextData>
    ),
  },
  {
    id: "2",
    title: "Timer Timeout",
    content: (
      <ContextData>
        <TimerTimeout />
      </ContextData>
    ),
  },
];

export const ContextTabs = () => {
  return <Tabs tabs={tabsConfig} defaultActive="1" />;
};

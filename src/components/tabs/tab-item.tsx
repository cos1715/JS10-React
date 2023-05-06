import { ReactNode } from "react";
import cn from "classnames";
import styles from "./tab-item.module.scss";

export interface ITabItem {
  id: string;
  title: ReactNode;
  active?: boolean;
  onClick?: () => void;
}

export const TabItem = ({ title, active, onClick, id }: ITabItem) => {
  return (
    <div
      key={id}
      onClick={onClick}
      className={cn(styles["btn"], { [styles["active"]]: active })}
    >
      {title}
    </div>
  );
};

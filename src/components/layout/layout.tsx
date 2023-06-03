import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { ROUTES } from "routes/const";
import styles from "./layout.module.scss";

export const Layout: React.FC = () => {
  const routesConfig = Object.entries(ROUTES);
  return (
    <>
      <header className={styles["header"]}>
        {routesConfig.map(([key, value], index) => {
          return key === "user" ? null : (
            <div key={key} className={styles["nav-item"]}>
              <NavLink to={value}>{key.toUpperCase()}</NavLink>
              {index < routesConfig.length - 1 ? (
                <div className={styles["divider"]} />
              ) : null}
            </div>
          );
        })}
      </header>
      <main className={styles["main"]}>
        <Outlet />
      </main>
    </>
  );
};

import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { ROUTES } from "routes/const";
import { useAuthContext } from "providers/auth";
import styles from "./layout.module.scss";

export const Layout: React.FC = () => {
  const routesConfig = Object.entries(ROUTES);
  const { username, setAuth } = useAuthContext();
  return (
    <>
      <header className={styles["header"]}>
        {routesConfig.map(([key, value], index) => {
          return key === "user" || (key === "login" && username) ? null : (
            <div key={key} className={styles["nav-item"]}>
              <NavLink to={value}>{key.toUpperCase()}</NavLink>
              {index < routesConfig.length - 1 ? (
                <div className={styles["divider"]} />
              ) : null}
            </div>
          );
        })}
        {username && (
          <p
            className={styles["link"]}
            onClick={() => {
              localStorage.removeItem("authLogin");
              setAuth("");
            }}
          >
            LOG OUT
          </p>
        )}
      </header>
      <main className={styles["main"]}>
        <Outlet />
      </main>
    </>
  );
};

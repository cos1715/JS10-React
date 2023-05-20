import { ReactNode } from "react";
import { ErrorMessage, FormikContextType, useFormikContext } from "formik";
import cn from "classnames";
import styles from "./FormItem.module.scss";

interface IFormItem<T> {
  children: ReactNode;
  label: string;
  name: keyof T;
}

export function FormItem<T = string>({ label, children, name }: IFormItem<T>) {
  const { errors, touched }: FormikContextType<T> = useFormikContext();
  const successState = !errors[name] && touched[name];
  const errorState = errors[name] && touched[name];

  return (
    <div className={styles["container"]}>
      <label
        className={cn(styles["label"], {
          [styles["success"]]: successState,
          [styles["error"]]: errorState,
        })}
      >
        {label}
      </label>
      {children}
      <ErrorMessage
        name={name.toString()}
        component="div"
        className={cn(styles["error"], styles["mt-8"])}
      />
    </div>
  );
}

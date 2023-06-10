import { useForm } from "react-hook-form";
import cn from "classnames";
import styles from "./login.module.scss";
import { useNavigate } from "react-router";
import { ROUTES } from "routes/const";
import { useProfileMutation } from "store/profile/mutations";

interface IForm {
  username: string;
}

const getServerError = (err: any) => {
  return err?.status === 404 ? "Please enter correct username" : "";
};

export const Login = () => {
  const { mutateAsync, error } = useProfileMutation();

  const { register, handleSubmit, formState } = useForm<IForm>({
    defaultValues: { username: "" },
  });
  const navigate = useNavigate();

  const errorMsg = formState.errors.username?.type
    ? formState.errors.username.type.toUpperCase()
    : getServerError(error);

  const onSubmit = handleSubmit(async (values) => {
    const resp = await mutateAsync(values.username);
    if (resp.status === 200) {
      navigate(ROUTES.home);
    }
  });

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={onSubmit} className={styles.form}>
        <label htmlFor="username" className={styles["mb-8"]}>
          Username:
        </label>
        <input
          id="username"
          {...register("username", { required: true })}
          className={cn({
            [styles["mb-8"]]: errorMsg,
            [styles["mb-40"]]: !errorMsg,
          })}
        />
        {errorMsg && <p className={styles["error-msg"]}>{errorMsg}</p>}
        <button type="submit" disabled={!"loading"}>
          Sign in
        </button>
      </form>
    </div>
  );
};

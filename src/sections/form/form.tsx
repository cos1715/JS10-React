import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

interface IForm {
  email: string;
  userName: string;
  password: string;
}

const validationSchema = Yup.object({
  email: Yup.string().email("Please enter correct email").required("Required"),
  password: Yup.string()
    .required("Required")
    .min(8, "Password should be longer then 8 symbols")
    .matches(/\d+/, "Password should have at least one number")
    .matches(/[A-Z]+/, "Password should have at least one uppercase letter"),
});

const Input = ({ ref }: any) => {
  return <input type="text" ref={ref} />;
};

export const Form = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const {
    handleSubmit,
    register,
    formState,
    getValues,
    reset,
    setValue,
    control,
  } = useForm<IForm>({
    mode: "onBlur",
    defaultValues: { email: "", password: "", userName: "" },
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = handleSubmit(async (values) => {
    setSubmitted(true);
    console.log(values);

    // reset();
    // setValue("email", "iii@i.com");
  });
  const values = getValues();

  console.log(formState.errors);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>
          Email:
          <br />
          <input {...register("email")} />
        </label>
        {formState.errors.email && formState.touchedFields.email && (
          <p>{formState.errors.email.message}</p>
        )}
        <br />
        <label>
          User Name:
          <br />
          <Controller
            name="userName"
            control={control}
            render={({ field }) => <input {...field} />}
          />
        </label>
        {formState.errors.userName && formState.touchedFields.userName && (
          <p>{formState.errors.userName.message}</p>
        )}
        <br />
        <label>
          Password:
          <br />
          <input {...register("password")} />
        </label>
        {formState.errors.password && formState.touchedFields.password && (
          <p>{formState.errors.password.message}</p>
        )}
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div>
          <p>First Name: {values.email}</p>
          <p>Last Name: {values.password}</p>
        </div>
      )}
    </div>
  );
};

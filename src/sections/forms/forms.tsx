import { FormEvent, useState, FocusEvent } from "react";

type TFormEvent = FormEvent<HTMLFormElement>["target"];
type TFormElements = TFormEvent & {
  elements: {
    firstName: HTMLInputElement;
    lastName: HTMLInputElement;
  };
};

const BlurForm = () => {
  const [error, setError] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit");
  };

  const onBlur = (e: FocusEvent<HTMLInputElement, Element>) => {
    setError(e.target.value.length < 3);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="name" onBlur={onBlur} />
      {error && <p>Text Is Too Short</p>}
      <button disabled={error}>Submit Form</button>
    </form>
  );
};

export const Forms = () => {
  const [formValues, setFormValues] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <BlurForm />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const target = e.target as TFormElements;

          const firstNameValid = target.elements.firstName.value.length > 2;
          const lastNameValid = target.elements.lastName.value.length > 2;

          if (firstNameValid && lastNameValid) {
            setFormValues({
              firstName: target.elements.firstName.value,
              lastName: target.elements.lastName.value,
            });
          } else {
            console.error("Form filled incorrect");
          }
        }}
      >
        <input type="text" name="firstName" />
        <br />
        <input type="text" name="lastName" />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>

      <p>First Name: {formValues.firstName}</p>
      <p>last Name: {formValues.lastName}</p>
    </div>
  );
};

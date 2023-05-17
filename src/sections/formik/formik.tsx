import { useEffect, useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FormItem } from "components/FormItem";

const ControlledComponent = () => {
  const [value, setValue] = useState("");

  const onChange = (e: any) => {
    setValue(e.target.value);
  };

  return <input value={value} onChange={onChange} />;
};

const UncontrolledComponent = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    console.log(inputRef.current);
  }, [inputRef]);

  return <input ref={inputRef} />;
};

interface IFormValues {
  firstName: string;
  university?: string;
  student: boolean;
}

const initialValues: IFormValues = {
  firstName: "",
  university: "",
  student: false,
};

const validationSchema = Yup.object({
  firstName: Yup.string().required("Required").min(5, "Name is too short"),
  student: Yup.boolean(),
  university: Yup.string().when("student", {
    is: true,
    then: (schema) =>
      schema
        .required("Required")
        .test("university-name", "Not correct university", (value, context) => {
          return value.toLowerCase() === "university" && context.parent.student;
        }),
    otherwise: (schema) => schema.notRequired(),
  }),
});

// if(student===true){
//   (schema) => schema.required("Required"),
// }else{
//   (schema) => schema.notRequired(),
// }

export const FormikForm = () => {
  const onSubmit = (values: IFormValues) => {
    console.log("submit", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values, handleChange, setFieldValue }) => {
        return (
          <Form>
            <FormItem name="firstName" label="First Name:">
              <Field name="firstName" />
            </FormItem>

            <br />
            <label>
              University:
              <Field name="university" disabled={!values.student} />
            </label>
            <ErrorMessage component="div" name="university" />
            <br />
            <label>
              Student:
              {/* <input
                name="student"
                type="checkbox"
                checked={values.student}
                onBlur={handleBlur}
                onChange={(e) => {
                  handleChange(e);
                }}
              /> */}
              <Field
                name="student"
                type="checkbox"
                onChange={(e: any) => {
                  if (!e.target.checked) {
                    setFieldValue("university", "");
                  }
                  handleChange(e);
                }}
              />
            </label>
            <br />
            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
};

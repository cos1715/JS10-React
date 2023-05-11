import { Formik, Form, Field } from "formik";
// Імпорт всього з yup
import * as Yup from "yup";

interface IForm {
  name: string;
  email: string;
  terms: boolean;
}

// Схема фалідації
// Прописуєм правила для кожного поля у формі
// Раджу почитати Yup документацію для того щоб +- знати які є методи
// Створити загальний yup об'єкт
const validationSchema = Yup.object({
  // Дивимся якого типу в нас будуть дані в інпуті і прописуєм праила
  name: Yup.string().min(3, "Value is too short").required("Required"),
  email: Yup.string().email("Please enter an email").required("Required"),
  terms: Yup.boolean().isTrue("Please accept terms").required("Required"),
});

// Не забудьте дати початкуові значення відмінні від undefined
const initialValues: IForm = { name: "", email: "", terms: false };

export const FormikForm = () => {
  return (
    // Загальний формік копнент
    <Formik
      // Передати схему  валідації
      validationSchema={validationSchema}
      // Обов'зковий проп
      initialValues={initialValues}
      // Обов'зковий проп
      onSubmit={(values, formikBag) => {
        console.log("values", values);
        console.log("formikBag", formikBag);
      }}
    >
      {/* Використовуєм функцію яка повертає форму */}
      {/* Функція приймає пропси із форміка */}
      {({ touched, values, errors, isValid, handleBlur, handleChange }) => {
        console.log("touched", touched);
        console.log("values", values);
        console.log("errors", errors);
        return (
          // Обгортка форми від форміка
          <Form>
            <label>
              Name:
              {/* Використати свій інпут */}
              <input
                type="text"
                name="name"
                // Обов'язково передати
                value={values.name}
                // Обов'язково передати
                onBlur={handleBlur}
                // Обов'язково передати
                onChange={handleChange}
              />
            </label>
            <p style={{ color: "red" }}>{errors.name}</p>
            <br />
            <label>
              Email:
              {/* Викоистати обгортку інпута він форміка */}
              {/* В нього теж можна передати свій компонент */}
              <Field name="email" type="email" />
            </label>
            <p style={{ color: "red" }}>{errors.email}</p>
            <br />
            <label>
              Terms:
              <input
                type="checkbox"
                name="terms"
                checked={values.terms}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </label>
            <p style={{ color: "red" }}>{errors.terms}</p>
            <br />
            <br />
            <button type="submit" disabled={!isValid}>
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

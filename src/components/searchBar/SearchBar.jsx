import css from "./SearchBar.module.css";
import { Field, Form, Formik } from "formik";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values.query);
    resetForm();
  };
  return (
    <header>
      <Formik initialValues={{ query: "" }} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form className={css.form}>
            <Field
              className={css.input}
              type="text"
              name="query"
              autoComplete="off"
              placeholder="Search images and photos"
              autoFocus
            />
            <button type="submit" disabled={isSubmitting}>
              Search
            </button>
          </Form>
        )}
      </Formik>
    </header>
  );
};

export default SearchBar;

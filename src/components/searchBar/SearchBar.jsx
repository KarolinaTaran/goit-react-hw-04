import css from "./SearchBar.module.css";
import { Field, Form, Formik } from "formik";
import { Toaster, toast } from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    const results = values.query;
    onSubmit(results);
    notify(values);
    resetForm();
  };

  const notify = (values) => {
    if (!values.query || values.query.trim() === "") {
      toast.error("Sorry, there is no search query!");
    }
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
      <Toaster />
    </header>
  );
};

export default SearchBar;

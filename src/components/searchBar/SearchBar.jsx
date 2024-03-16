import css from "./SearchBar.module.css";
import { Field, Form, Formik } from "formik";
import { Toaster, toast } from "react-hot-toast";

const SearchBar = ({ onSubmit, setPics }) => {
  const handleSubmit = async (values, { resetForm }) => {
    try {
      const results = await onSubmit(values.query);
      console.log(values.query);
      notify(values, results);
      resetForm();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const notify = (values, results) => {
    if (!values.query || values.query.trim() === "") {
      toast.error("Sorry, there is no search query!");
      setPics([]);
    } else if (!results || !Array.isArray(results) || results.length === 0) {
      toast.error("Sorry, there is no query you are searching for!");
      setPics([]);
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

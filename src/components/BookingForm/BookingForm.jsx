import "./ContactForm.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
// import { addContact } from "../../redux/contactsOps";
import { useState } from "react";

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short, 3 characters min")
    .max(50, "Too long, 50 characters max")
    .required("Required field"),
  email: Yup.string()
    .min(3, "Too short, 3 characters min")
    .max(50, "Too long, 50 characters max")
    .required("Required field"),
  bookDate: Yup.string().required("Required field"),
});

const BookingForm = () => {
  const dispatch = useDispatch();
  // const [bookDate, setBookDate] = useState(new Date());

  const handleSubmit = (data, actions) => {
    const contact = {
      name: data.name,
      number: data.number,
    };
    // dispatch(addContact(contact));
    actions.resetForm();
  };

  return (
    <div className="book-form">
      <div className="form-title">
        <h2>Book your campervan now</h2>
        <p>Stay connected! We are always ready to help you.</p>
      </div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          bookDate: "",
          comment: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={contactSchema}
      >
        {/* <Form className="contactForm"> */}
        <Form>
          <label className="form-name">
            <div className="errMsg">
              <ErrorMessage name="name" />
            </div>
            <Field type="text" name="name" placeholder="Name*" />
          </label>
          <label className="form-email">
            <div className="errMsg">
              <ErrorMessage name="email" />
            </div>
            <Field type="email" name="email" placeholder="Email*" />
          </label>

          <label className="form-date">
            <div className="errMsg">
              <ErrorMessage name="bookDate" />
            </div>
            <Field
              type="text"
              name="bookDate"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
              placeholder="Booking date*"
            />
          </label>
          <div className="datepicker-toggle"></div>
          <label className="form-comment">
            <div className="errMsg">
              <ErrorMessage name="comment" />
            </div>
            <Field
              className="input-comment"
              as="textarea"
              name="comment"
              placeholder="Comment*"
            />
          </label>

          <button type="submit">Send</button>
        </Form>
      </Formik>
    </div>
  );
};

export default BookingForm;

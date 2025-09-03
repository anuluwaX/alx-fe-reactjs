import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

export default function FormikForm() {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("Submitting with Formik:", values);
      }}
    >
      {() => (
        <Form className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-xl space-y-4">
          <div>
            <label className="block font-semibold">Username</label>
            <Field
              type="text"
              name="username"
              className="w-full p-2 border rounded-md"
            />
            <ErrorMessage
              name="username"
              component="p"
              className="text-red-500 text-sm"
            />
          </div>

          <div>
            <label className="block font-semibold">Email</label>
            <Field
              type="email"
              name="email"
              className="w-full p-2 border rounded-md"
            />
            <ErrorMessage
              name="email"
              component="p"
              className="text-red-500 text-sm"
            />
          </div>

          <div>
            <label className="block font-semibold">Password</label>
            <Field
              type="password"
              name="password"
              className="w-full p-2 border rounded-md"
            />
            <ErrorMessage
              name="password"
              component="p"
              className="text-red-500 text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
          >
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
}

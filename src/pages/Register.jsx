import { Form, Link } from "react-router-dom";
import { FormInput, FormButton } from "../components";

const Register = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Form
        method="POST"
        className="flex flex-col gap-y-4 w-96 shadow-lg p-8 rounded-xl "
      >
        <h1 className="text-3xl font-bold text-center">Register</h1>
        <FormInput label="username" name="username" type="text" />
        <FormInput label="email" name="identifier" type="email" />
        <FormInput label="password" name="password" type="password" />
        <FormButton text="register" bgColor="btn-primary" />
        <p className="text-center">
          Already a member?{" "}
          <Link to="/register" className="text-primary">
            Register
          </Link>
        </p>
      </Form>
    </div>
  )
}
export default Register;

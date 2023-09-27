import { Form, Link, redirect } from "react-router-dom";
import { FormInput, FormButton } from "../components";
import { toast } from "react-toastify";

export const action = async ({request}) => {
  const url = await request.formData()
  const data = Object.fromEntries(url)
  // ! fix
  console.log(data);
  try {
      await customFetch.post("/auth/local", data)
      toast.success("Logged in successfully")
      return redirect("/")
  } catch (error) {
      const errorMessage = error.response.data.error.message
      toast.error(errorMessage)
      return error
  }
}

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Form
        method="POST"
        className="flex flex-col gap-y-4 w-96 shadow-lg p-8 rounded-xl "
      >
        <h1 className="text-3xl font-bold text-center">Login</h1>
        <FormInput label="email" name="identifier" type="email" />
        <FormInput label="password" name="password" type="password" />
        <FormButton text="login" bgColor="btn-primary" />
        <button text="guest user" className="btn btn-secondary">
          guest user
        </button>
        <p className="text-center">
          Not a member yet?{" "}
          <Link to="/register" className="text-primary">
            Register
          </Link>
        </p>
      </Form>
    </div>
  )
};
export default Login;

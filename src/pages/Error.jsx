import { Link, useRouteError } from "react-router-dom"

const Error = () => {
  const error = useRouteError()
  
  if (error.status === 404) {
    return <main className="flex gap-y-5 flex-col items-center justify-center h-screen">
      <h1 className="text-9xl text-primary text font-semibold">404</h1>
      <h3 className="text-3xl tracking-tight font-bold sm:text-5xl">page not found</h3>
      <p className="text-lg">Sorry, we couldn't find the page you're looking for.</p>
      <Link className="mt-5 btn btn-secondary" to="/">go back home</Link>
    </main>
  }

  console.log(error);
  return (
    <main>
      <div className="flex gap-y-5 flex-col items-center justify-center h-screen">
        <p className="text-4xl font-bold">There was an error...</p>
      </div>
    </main>
  )
}
export default Error
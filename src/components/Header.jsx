import { Link } from "react-router-dom"

const Header = () => {
    const user = null
  return (
    <div className="bg-neutral p-2 text-neutral-content text-xs sm:text-sm">
        {user ? <div className="flex justify-center items-center gap-x-6 sm:justify-end"> 
            <p>Hello, {user}</p>
            <button className="btn btn-xs btn-outline btn-primary">logout</button>
        </div> : <div className="align-element flex justify-center gap-x-6 sm:justify-end"> 
            <Link className="hover:link" to="/login">Sign in / Guest</Link>
            <Link className="hover:link" to="/register">Create Account</Link>
        </div>}
    </div>
  )
}
export default Header
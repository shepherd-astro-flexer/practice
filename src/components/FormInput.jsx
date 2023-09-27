const FormInput = ({type, label, name}) => {
  return (
    <div>
        <label className="capitalize label text-sm" htmlFor={label}>{label}</label>
        <input type={type} name={name} className="input input-bordered w-full" required/>
    </div>
  )
}
export default FormInput
import { Link } from "react-router-dom"
import { formatPrice } from "../utils"

const ProductCard = ({id, image, price, title}) => {
  return (
    <Link className="card pt-4 px-4 shadow-xl duration-300 hover:shadow-2xl" to={`/products/${id}`}>
        <img src={image} alt={title} className="h-64 w-auto rounded-xl object-cover md:h-48"/>
        <div className="card-body place-items-center">
            <h1 className="cart-title text-xl font-semibold capitalize tracking-wider">{title}</h1>
            <p className="text-secondary">{formatPrice(price)}</p>
        </div>
    </Link>
  )
}
export default ProductCard
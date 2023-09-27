import { useLoaderData } from "react-router-dom"
import ProductCard from "./ProductCard"

const FeaturedProducts = () => {
   const products = useLoaderData()
   
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {products.map(product => {
            const {attributes, id} = product
            return <ProductCard key={id} {...attributes} id={id}/>
        })}
    </div>
  )
}
export default FeaturedProducts
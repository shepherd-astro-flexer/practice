import { SectionTitle, FeaturedProducts } from "../components"
import { customFetch } from "../utils"

export const loader = async () => {
  const {data: {data: products}} = await customFetch("/products", {
    params: {
      featured: true
    }
  })
  
  return products
}
 
const Landing = () => {
  return (
    <div>
      <SectionTitle text="featured products"/>
      <FeaturedProducts/>
    </div>
  )
}
export default Landing
import axios from "axios";

export const customFetch = axios.create({
    baseURL: "https://strapi-store-server.onrender.com/api"
})

export const formatPrice = (num) => {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(num/100)
}
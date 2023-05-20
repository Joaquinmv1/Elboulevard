import { ProductTypes } from "../interfaces/interfaceProduct"

export const getProducts = async (url:string) => {
  try {
    const res = await fetch(url)
    const data = await res.json()

    const mappedProducts: Array<ProductTypes> = data.map((product: any) => (
      {
        title: product.title,
        image: product.image,
        price: product.price,
        name: product.name
      }
    ))

    return mappedProducts
  } catch (error) {
    console.log(error);
  }
}

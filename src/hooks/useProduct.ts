import { useEffect, useState } from "react";
import { getProducts } from "../services/getProducts";
import { ProductTypes } from "../interfaces/interfaceProduct";

export function useProduct(url: string) {
  const [products, setProducts] = useState<ProductTypes[]>([])

  const getData = async () => {
    try {
      const res = await getProducts(url)      
      if (res) setProducts(res)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData()
  }, [url])

  return { products }
}
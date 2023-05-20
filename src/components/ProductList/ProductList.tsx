import { useFilter, useProduct } from "../../hooks"
import { ProductContainerUl, ProductLi } from "./style"

export const ProductList = () => {
  const { filter } = useFilter()
  const { products } = useProduct(`https://fakestoreapi.com/products/`)

  return (
    <>
      <h2 style={{textAlign: 'center'}}>Nuestros Productos</h2>
      <ProductContainerUl>
        {products.map((product) => (
          <ProductLi key={product.title}>
            <img src={product.image} alt={`image of ${product.name}`} />
            <div>
              <h2><strong>{product.title}</strong></h2>
              <h3>$ {product.price}</h3>
              <button>Agregar al carrito</button>
            </div>
          </ProductLi>
        ))}
      </ProductContainerUl>
    </>
  )
}

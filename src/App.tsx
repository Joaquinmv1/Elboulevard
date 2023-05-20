import { Navbar, ProductList, Carrousel } from './components'
import { FilterProvider } from './context'

function App() {
  return (
    <>
      <FilterProvider>
        <Navbar />
        <Carrousel />
        <ProductList />
      </FilterProvider>
    </>
  )
}

export default App

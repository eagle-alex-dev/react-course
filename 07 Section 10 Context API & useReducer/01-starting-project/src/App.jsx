import Header from "./components/Header.jsx";
import Shop from "./components/Shop.jsx";
import Product from "./components/Product.jsx";
import { DUMMY_PRODUCTS } from "./dummy-products.js";
import CartContextProvider from "./store/shopping-cart-context.jsx";

function App() {
  return (
    // providing the context created to the nested components
    <CartContextProvider>
      <Header />
      <Shop>
        {/* wrapping the inner component here eliminates 1 level of nesting and props drilling */}
        {/* but it's not enough to solve the problem */}
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </CartContextProvider>
  );
}

export default App;

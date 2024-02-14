import Filters from "../components/products/Filters";
import PaginationContainer from "../components/PaginationContainer";
import ProductsContainer from "../components/products/ProductsContainer";

const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};
export default Products;

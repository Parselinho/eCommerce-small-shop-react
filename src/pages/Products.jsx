import Filters from "../components/products/Filters";
import PaginationContainer from "../components/products/PaginationContainer";
import ProductsContainer from "../components/products/ProductsContainer";
import ProductsList from "../components/products/ProductsList";

const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <ProductsList />
      <PaginationContainer />
    </>
  );
};
export default Products;

import { useLoaderData } from "react-router-dom";
import { ComplexPagination, OrdersList, SectionTitle } from "../components";

const Orders = () => {
  const { meta } = useLoaderData();
  if (meta.pagination.total < 1) {
    return <SectionTitle text="please make an order" />;
  }
  return (
    <>
      <SectionTitle text="Your Orders" />
      <OrdersList />
      <ComplexPagination />
    </>
  );
};
export default Orders;

import { useSelector } from "react-redux";
import { CheckOutForm, CartTotal, SectionTitle } from "../components/";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cartState.carTotal);
  console.log(cartItems);
  if (cartItems === 0) {
    return <SectionTitle text="Your cart is empty" />;
  }
  return (
    <>
      <SectionTitle text="place your order" />
      <div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
        <CheckOutForm />
        <CartTotal />
      </div>
    </>
  );
};
export default Checkout;

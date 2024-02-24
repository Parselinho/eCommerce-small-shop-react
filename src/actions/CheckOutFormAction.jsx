import { toast } from "react-toastify";
import { customFetch, formatPrice } from "../helpers";
import { clearCart } from "../features/cart/cartSlice";
import { redirect } from "react-router-dom";

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const { name, address } = Object.fromEntries(formData);
    const user = store.getState().userState.user;
    const { cartItems, orderTotal, numItemsInCart } =
      store.getState().cartState;
    const info = {
      name,
      address,
      chargeTotal: orderTotal,
      orderTotal: formatPrice(orderTotal),
      cartItems,
      numItemsInCart,
    };
    try {
      // eslint-disable-next-line no-unused-vars
      const response = await customFetch.post(
        "/orders",
        { data: info },
        { headers: { Authorization: `Bearer ${user.token}` } }
      );
      store.dispatch(clearCart());
      toast.success("order placed successfully");
      return redirect("/orders");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "there was an error with your order";
      toast.error(errorMessage);
      if (error.response.status === 401 || error.response.status === 403)
        return redirect("/login");
      return null;
    }
  };

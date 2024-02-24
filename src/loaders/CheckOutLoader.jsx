import { redirect } from "react-router-dom";
import { toast } from "react-toastify";

export const loader = (store) => async () => {
  // add request if im handling in server side
  const user = store.getState().userState.user;
  if (!user) {
    toast.warn("you must be logged in to checkout");
    return redirect("/login");
  }
  return null;
};

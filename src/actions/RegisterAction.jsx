import { toast } from "react-toastify";
import { customFetch } from "../helpers";
import { redirect } from "react-router-dom";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/auth/local/register", data);
    toast.success("account created successfully");
    return redirect("/login");
  } catch (error) {
    const errorMessage = error?.response?.data?.error?.message || "";
    toast.error(errorMessage);
    return null;
  }
};

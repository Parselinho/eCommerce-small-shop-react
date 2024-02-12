import { customFetch } from "../helpers";

export const loader = async () => {
  const response = await customFetch(`products`);
  return { products: response.data.data, meta: response.data.meta };
};

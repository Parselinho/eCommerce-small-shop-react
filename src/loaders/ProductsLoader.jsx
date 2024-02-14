import { customFetch } from "../helpers";
const url = "/products";
export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  const response = await customFetch(url, { params });
  return { products: response.data.data, meta: response.data.meta, params };
};

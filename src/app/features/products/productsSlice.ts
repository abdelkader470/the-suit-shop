import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const productsApiSlice = createApi({
  reducerPath: "products",
  tagTypes: ["Products"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:1337/api" }),
  endpoints: (builder) => ({
    getProductsList: builder.query({
      query: () => {
        return {
          url: "/products?populate=thumbnail,categories",
        };
      },
    }),
  }),
});

export const { useGetProductsListQuery } = productsApiSlice;

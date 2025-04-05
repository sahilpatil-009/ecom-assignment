import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://dummyjson.com/products"

export const productsApi = createApi({
    reducerPath:"productsApi",
    baseQuery: fetchBaseQuery({ baseUrl:baseUrl}),
    endpoints: (builder) =>({
        getAllProducts: builder.query({
            query: () =>"/",
            providesTags: [{type: "Products"}],
        }),
    })
});

export const { useGetAllProductsQuery } = productsApi;
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const whatshyAPi = createApi({
  reducerPath: "whatshyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://square-dove-73.hasura.app/api/rest",
    headers: {
      "Content-Type": "application/json",
      "x-hasura-admin-secret":
        "15S69DEMAIaP6CSxytqQbQPdBLBLF8viC2olz6lTt5jUjDLAw34omV1f4vIH8mhj",
    },
  }),
  endpoints: (builder) => ({
    userRegister: builder.mutation({
      query: (body) => ({
        url: "/auth/register",
        method: "POST",
        body,
      }),
    }),
    userLogin: builder.mutation({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
    }),
    getPhonebook: builder.query({
      query: ({ id }) => ({
        url: "/phonebook/get",
        method: "POST",
        body: { id },
      }),
    }),
    addPhonebook: builder.mutation({
      query: ({ user_id, name, number }) => ({
        url: "/phonebook",
        method: "POST",
        body: { user_id, name, number },
      }),
    }),
    deletePhonebook: builder.mutation({
      query: ({ id }) => ({
        url: `/phonebook`,
        method: "DELETE",
        params: { id },
      }),
    }),
    updatePhonebook: builder.mutation({
      query: ({ id, name, number }) => ({
        url: `/phonebook`,
        method: "PUT",
        body: { id, name, number },
      }),
    }),
    getByIdPhonebook: builder.query({
      query: ({ id }) => ({
        url: `/phonebook/id`,
        method: "POST",
        params: { id },
      }),
    }),
  }),
});

export const {
  useUserRegisterMutation,
  useUserLoginMutation,
  useGetPhonebookQuery,
  useAddPhonebookMutation,
  useDeletePhonebookMutation,
  useUpdatePhonebookMutation,
  useGetByIdPhonebookQuery,
} = whatshyAPi;

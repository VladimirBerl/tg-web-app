import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  tagTypes: ["User"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api",
  }),
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => ({
        url: `get_user_info/${id}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
      providesTags: (result) =>
        result && result.id_telegram
          ? [
              { type: "User", id_telegram: result.id_telegram },
              { type: "User", id_telegram: "LIST" },
            ]
          : [{ type: "User", id_telegram: "LIST" }],
    }),
    createUser: build.mutation({
      query: (body) => ({
        url: `create_user`,
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "User", id_telegram: "LIST" }],
    }),
    changeUserCount: build.mutation({
      query: ({ id, count_token }) => ({
        url: `user/${id}`,
        method: "PATCH",
        body: { count_token },
      }),
      invalidatesTags: [{ type: "User", id_telegram: "LIST" }],
    }),
  }),
});

export const {
  useGetUserQuery,
  useChangeUserCountMutation,
  useCreateUserMutation,
} = userApi;
